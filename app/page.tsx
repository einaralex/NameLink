import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import "./markdown.css";

export default async function Home() {
  // Read README.md file
  const readmePath = path.join(process.cwd(), "README.md");
  const markdown = await fs.readFile(readmePath, "utf8");

  const html = marked(markdown);

  return (
    <div className="markdown-container">
      <article className="markdown-content">
        <div dangerouslySetInnerHTML={{ __html: html }} />{" "}
      </article>
    </div>
  );
}
