import Link from "next/link";
import { getAllPosts, type BlogPostSummary } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/40 px-4 py-14 md:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Notes & Insights
          </p>
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Thoughts on software engineering, AI, product building, and
            practical lessons from real-world projects.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-8 text-center shadow-lg shadow-blue-100/40 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              No posts yet
            </h2>
            <p className="mt-2 text-slate-600">
              Blog posts will appear here once markdown files are added to the
              content folder.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post: BlogPostSummary) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-lg shadow-blue-100/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-200/50"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold text-slate-900 hover:text-blue-700">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-slate-600">{post.description}</p>
                {post.date ? (
                  <p className="mt-3 text-sm font-medium text-slate-500">
                    {post.date}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
