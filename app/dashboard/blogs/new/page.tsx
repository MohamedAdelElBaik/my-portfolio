"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewBlogPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    department: "frontend",
    date: "",
    excerpt: "",
    content: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from("blogs").insert({ ...form });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard/blogs");
  };

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Add New Blog</h1>
      {error && <p className="text-destructive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            className="w-full"
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="slug">Slug (unique)</Label>
          <Input
            id="slug"
            className="w-full"
            placeholder="Slug (unique)"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="department">Department</Label>
          <Input
            id="department"
            className="w-full"
            placeholder="Department"
            name="department"
            value={form.department}
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            className="w-full"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            placeholder="Excerpt"
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows={3}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="content">Content (Markdown)</Label>
          <Textarea
            id="content"
            placeholder="Content (Markdown)"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={10}
          />
        </div>
        <Button disabled={loading}>Create</Button>
      </form>
    </div>
  );
}
