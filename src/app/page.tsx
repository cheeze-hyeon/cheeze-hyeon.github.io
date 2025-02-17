import { getMdxContents } from "@/lib/getMdxContents";

export default function BlogPage() {
  const mdxContents = getMdxContents();

  console.log(mdxContents);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {mdxContents.map((content) => (
          <li key={content}>
            <a href={`/blog/${content}`}>{content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
