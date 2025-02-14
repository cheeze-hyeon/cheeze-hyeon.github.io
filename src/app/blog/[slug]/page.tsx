import Hello from "../../../../post/hello-word.mdx";

interface BlogPostProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
      <Hello />
    </div>
  );
}
