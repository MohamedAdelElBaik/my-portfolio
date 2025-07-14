"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Params {
  params: {
    id: string;
  };
}

export default function EditProjectPage({ params }: Params) {
  const router = useRouter();
  const { id } = params;

  const [form, setForm] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setForm({
          ...data,
          date: data.date ?? "",
          duration: data.duration ?? "",
          github_url: data.github_url ?? "",
          live_demo_url: data.live_demo_url ?? "",
          company: data.company ?? "",
          technologies: (data.technologies || []).join(", "),
        });
      }
      if (error) setError(error.message);

      setLoading(false);
    };

    fetchProject();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!form) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;
    setSaving(true);
    setError(null);

    const payload = {
      ...form,
      technologies: form.technologies
        .split(",")
        .map((t: string) => t.trim())
        .filter(Boolean),
      date: form.date || null,
      duration: form.duration || null,
      github_url: form.github_url || null,
      live_demo_url: form.live_demo_url || null,
      company: form.company || null,
    };

    const { error } = await supabase
      .from("projects")
      .update(payload)
      .eq("id", id);

    if (error) {
      setError(error.message);
      setSaving(false);
      return;
    }

    router.push("/dashboard/projects");
  };

  if (loading) return <p>Loading...</p>;
  if (!form) return <p>Project not found</p>;

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Edit Project</h1>
      {error && <p className="text-destructive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {(
          [
            ["title", "Title", "text"],
            ["subtitle", "Subtitle", "text"],
            ["main_image_url", "Main Image URL", "text"],
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
              required={name === "title" || name === "subtitle" || name === "main_image_url"}
            />
          </div>
        ))}

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

        <Button disabled={saving}>Save</Button>
      </form>
    </div>
  );
}
