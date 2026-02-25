"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Section from "./Section";

type BlogPostSummary = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
};

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("/api/blog", { cache: "no-store" });
        if (!response.ok) {
          setPosts([]);
          return;
        }

        const data = (await response.json()) as BlogPostSummary[];
        setPosts(data.slice(0, 3));
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <Section id="blogs" bgColor="#f8fafc">
      <div className="mx-auto max-w-screen-xl px-4 py-20 text-center md:px-8">
        <div className="mx-auto mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Writing & Insights
          </p>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Latest Blogs
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Practical lessons from software engineering, system design, and
            AI-powered product development.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-8 text-slate-600 shadow-lg shadow-blue-100/40">
            Loading latest posts...
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-8 text-slate-600 shadow-lg shadow-blue-100/40">
            No blog posts available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded-2xl border border-blue-100/80 bg-white/90 p-6 text-left shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/50"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {post.date || "Recent"}
                </p>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
                  {post.description ||
                    "Read the full article for complete insights."}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex w-fit items-center rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition-colors duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Blogs;
