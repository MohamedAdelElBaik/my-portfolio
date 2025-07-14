"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Blog {
  id: string;
  title: string;
  department: string;
}

export default function BlogsManagePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blogs").select("id, title, department");

      if (!error && data) {
        setBlogs(data as Blog[]);
      }

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <Link href="/dashboard/blogs/new">
          <Button>Add New Blog</Button>
        </Link>
      </div>

      <table className="min-w-full divide-y divide-border shadow-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Department
            </th>
            <th className="px-4 py-2 text-right text-sm font-semibold uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="px-4 py-2">{blog.title}</td>
              <td className="px-4 py-2 capitalize">{blog.department}</td>
              <td className="px-4 py-2 text-right space-x-2">
                <Link href={`/dashboard/blogs/${blog.id}/edit`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                    await supabase.from("blogs").delete().eq("id", blog.id);
                    setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
