"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  date: string | null;
}

export default function ProjectsManagePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, date")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProjects(data as Project[]);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Link href="/dashboard/projects/new">
          <Button>Add New Project</Button>
        </Link>
      </div>

      <table className="min-w-full divide-y divide-border shadow-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-2 text-right text-sm font-semibold uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="px-4 py-2">{project.title}</td>
              <td className="px-4 py-2">
                {project.date ? new Date(project.date).toLocaleDateString() : "-"}
              </td>
              <td className="px-4 py-2 text-right space-x-2">
                <Link href={`/dashboard/projects/${project.id}/edit`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                    await supabase.from("projects").delete().eq("id", project.id);
                    setProjects((prev) => prev.filter((p) => p.id !== project.id));
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
