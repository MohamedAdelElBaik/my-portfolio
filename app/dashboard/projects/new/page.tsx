"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewProjectPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    date: "",
    duration: "",
    github_url: "",
    live_demo_url: "",
    company: "",
    description_md: "",
    technologies: "", // comma-separated
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!imageFile) {
      setError("Please choose an image");
      setLoading(false);
      return;
    }

    // Upload image to Supabase Storage (bucket: project-images)
    const fileName = `${Date.now()}_${imageFile.name}`;
    const { error: uploadErr } = await supabase.storage
      .from("project-images")
      .upload(fileName, imageFile);

    if (uploadErr) {
      setError(uploadErr.message);
      setLoading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    const payload = {
      ...form,
      main_image_url: urlData.publicUrl,
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      date: form.date || null,
      duration: form.duration || null,
      github_url: form.github_url || null,
      live_demo_url: form.live_demo_url || null,
      company: form.company || null,
    };

    const { error } = await supabase.from("projects").insert(payload);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard/projects");
  };



  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Add New Project</h1>
      {error && <p className="text-destructive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {(
          [
            ["title", "Title", "text"],
            ["subtitle", "Subtitle", "text"],
            ["date", "Date", "date"],
            ["duration", "Duration (e.g. 3 months)", "text"],
            ["github_url", "GitHub URL", "text"],
            ["live_demo_url", "Live Demo URL", "text"],
            ["company", "Company", "text"],
          ] as const
        ).map(([name, label, type]) => (
          <div className="grid w-full items-center gap-1.5" key={name}>
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              type={type}
              name={name}
              className="w-full"
              value={(form as any)[name]}
              onChange={handleChange}
              {...(name === "title" || name === "subtitle"
                ? { required: true }
                : {})}
            />
          </div>
        ))}

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="image">Main Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
            required
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="technologies">Technologies (comma-separated)</Label>
          <Input
            id="technologies"
            name="technologies"
            className="w-full"
            value={form.technologies}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description_md">Description (Markdown)</Label>
          <Textarea
            id="description_md"
            name="description_md"
            rows={10}
            value={form.description_md}
            onChange={handleChange}
            required
          />
        </div>

        <Button disabled={loading}>Create</Button>
      </form>
    </div>
  );
}
