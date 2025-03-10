import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

// 각 태그에 적용할 커스텀 스타일 컴포넌트
const customComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-orange-500" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold text-blue-500" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg leading-7 text-gray-700" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-5 text-gray-700" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-5 text-gray-700" {...props} />
  ),
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);
  const decodedSlug = decodeURIComponent(filePath);

  if (!fs.existsSync(decodedSlug)) {
    return notFound();
  }

  const mdxContent = fs.readFileSync(decodedSlug, "utf-8");

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <MDXRemote source={mdxContent} components={customComponents} />
    </div>
  );
}
