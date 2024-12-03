import MarkdownContent from "@/components/markdown-content";
import { promises as fs } from "fs";
import path from "path";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const file = (await params).slug;

  const filePath = path.join(process.cwd(), "public", "content", `${file}.md`);
  const content = await fs.readFile(filePath, "utf-8");

  return (
    <div className="w-full max-w-4xl mx-auto p-10">
      <MarkdownContent content={content} />
    </div>
  );
}
