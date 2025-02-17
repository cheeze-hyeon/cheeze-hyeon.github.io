import fs from "fs";
import path from "path";

export function getMdxContents() {
  const postsDirectory = path.join(process.cwd(), "src/posts"); // MDX 파일이 있는 폴더
  const filenames = fs.readdirSync(postsDirectory);

  // .mdx 파일만 필터링
  const filteredFiles = filenames.filter((file) => file.endsWith(".mdx"));
  const files = filteredFiles.map((file) => file.replace(/\.mdx$/, ""));

  return files;
}
