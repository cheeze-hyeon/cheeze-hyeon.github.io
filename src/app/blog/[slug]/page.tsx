import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { HTMLAttributes } from "react";
import Header from "@/components/Header";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

// 각 태그에 적용할 커스텀 스타일 컴포넌트
const customComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold text-orange-500" {...props} />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold text-blue-500" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold text-gray-700 " {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-md leading-7 text-gray-700 mb-4" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-5 text-gray-700" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-5 text-gray-700" {...props} />
  ),
  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-t border-gray-200" {...props} />
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
    <>
      <Header />
      <div className="mx-auto px-8">
        <MDXRemote source={mdxContent} components={customComponents} />
      </div>
    </>
  );
}
