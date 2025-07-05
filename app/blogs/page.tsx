import Link from "next/link";
import blogsData from "@/data/blogs.json";

export default function DepartmentsPage() {
  return (
    <main className="w-10/12 md:w-9/12 mx-auto pt-32 mb-16 space-y-8">
      <h1 className="text-4xl md:text-6xl text-primary">Blog Departments</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((dept) => (
          <li key={dept.department} className="border p-6 rounded-lg shadow-md shadow-primary/20">
            <h2 className="text-2xl text-secondary mb-4 capitalize">{dept.title}</h2>
            <Link href={`/blogs/${dept.department}`} className="text-primary hover:underline">
              View Blogs →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
