import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);
  const decodedSlug = decodeURIComponent(filePath);

  if (!fs.existsSync(decodedSlug)) {
    return notFound();
  }

  const mdxContent = fs.readFileSync(decodedSlug, "utf-8");

  return (
    <div>
      <MDXRemote source={mdxContent} />
    </div>
  );
}
