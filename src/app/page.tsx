import { getMdxContents } from "@/lib/getMdxContents";

export default function BlogPage() {
  const mdxContents = getMdxContents();

  console.log(mdxContents);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">CZ Blog</h1>
      <ul className="flex flex-col gap-4 p-4">
        {mdxContents.map((content) => (
          <li key={content}>
            <a href={`/blog/${content}`}>{content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
