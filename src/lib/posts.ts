import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectories = [
  path.join(process.cwd(), "content/blog"),
  path.join(process.cwd(), "src/content/blog"),
];
const supportedExtensions = [".md", ".mdx"];

export type BlogPostSummary = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
};

export type BlogPost = BlogPostSummary & {
  contentHtml: string;
};

const getPostsDirectory = () => {
  const existingDirectory = postDirectories.find((dirPath) =>
    fs.existsSync(dirPath)
  );

  return existingDirectory ?? postDirectories[0];
};

const toDateString = (value: unknown) => {
  if (typeof value === "string") {
    return value;
  }

  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return "";
};

const stripPostExtension = (fileName: string) =>
  fileName.replace(/\.(md|mdx)$/i, "");

const normalizePostMeta = (slug: string, data: Record<string, unknown>) => ({
  slug,
  title: typeof data.title === "string" ? data.title : slug,
  description: typeof data.description === "string" ? data.description : "",
  date: toDateString(data.date),
});

export function getAllPosts(): BlogPostSummary[] {
  const postsDirectory = getPostsDirectory();

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => supportedExtensions.some((ext) => fileName.endsWith(ext)));

  const posts = fileNames.map((fileName) => {
    const slug = stripPostExtension(fileName);
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return normalizePostMeta(slug, data);
  });

  return posts.sort(
    (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const postsDirectory = getPostsDirectory();
  const matchedExtension = supportedExtensions.find((ext) =>
    fs.existsSync(path.join(postsDirectory, `${slug}${ext}`))
  );

  if (!matchedExtension) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${slug}${matchedExtension}`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const meta = normalizePostMeta(slug, data);

  return {
    ...meta,
    contentHtml: processedContent.toString(),
  };
}