import Link from "next/link";
import { notFound } from "next/navigation";
import blogsData from "@/data/blogs.json";

interface DeptParams {
  params: {
    department: string;
  };
}

export default function BlogsPage({ params }: DeptParams) {
  const department = blogsData.find((d) => d.department === params.department);
  if (!department) {
    notFound();
  }

  return (
    <main className="w-10/12 md:w-9/12 mx-auto pt-32 mb-16 space-y-8">
      <h1 className="text-4xl md:text-6xl text-primary capitalize">{department!.title}</h1>
      <ul className="space-y-6">
        {department!.blogs.map((blog) => (
          <li key={blog.id} className="border rounded-lg p-6 shadow-md shadow-primary/20">
            <h2 className="text-2xl text-secondary mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <p className="mb-4">{blog.excerpt}</p>
            <Link href={`/blogs/${params.department}/${blog.slug}`} className="text-primary hover:underline">
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
