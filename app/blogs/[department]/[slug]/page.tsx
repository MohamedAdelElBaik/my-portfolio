import { notFound } from "next/navigation";
import blogsData from "@/data/blogs.json";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface BlogParams {
  params: {
    department: string;
    slug: string;
  };
}

export default function BlogDetails({ params }: BlogParams) {
  const department = blogsData.find((d) => d.department === params.department);
  const blog = department?.blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="w-10/12 md:w-9/12 mx-auto pt-32 mb-16 space-y-8">
      <Link href={`/blogs/${params.department}`} className="text-primary hover:underline">
        ← Back to {department!.title}
      </Link>
      <h1 className="text-4xl md:text-6xl text-primary">{blog!.title}</h1>
      <p className="text-sm text-gray-500">{blog!.date}</p>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown>{blog!.content}</ReactMarkdown>
      </article>
    </main>
  );
}
