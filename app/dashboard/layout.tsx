"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    };

    verifySession();
  }, [router]);

  if (loading) return null;

  return (
    <div className="flex min-h-screen bg-background text-secondary">
      <aside className="w-60 border-r bg-card p-6 text-card-foreground">
        <h2 className="mb-6 text-xl font-semibold">Dashboard</h2>
        <nav className="space-y-3">
          <Link
            href="/dashboard/blogs"
            className="block rounded px-3 py-2 transition-colors hover:bg-muted"
          >
            Blogs
          </Link>
          {/* Future links can be added here */}
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
