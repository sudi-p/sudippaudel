import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/40 px-4 py-14 md:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-lg shadow-blue-100/40 backdrop-blur-sm md:p-10">
        <header className="mb-8 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
            {post.title}
          </h1>
          {post.date ? (
            <p className="mt-4 text-sm font-medium text-slate-500">
              {post.date}
            </p>
          ) : null}
        </header>

        <div
          className="blog-content max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
