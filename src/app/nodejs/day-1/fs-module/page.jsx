import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "fs module",
  description:
    "Learn Node's built-in fs module: writing, reading, appending, and deleting files with writeFileSync, readFileSync, appendFileSync, and unlinkSync, plus a hands-on activity creating and reading a bio.txt file.",
  path: "/nodejs/day-1/fs-module",
});

export default function FsModule() {
  return (
    <NodeLesson backHref="/nodejs/day-1" title="📁 File System (fs Module)">
      <p className="text-muted-foreground">
        Browser JavaScript can’t read files from your computer. But Node.js can
        using the built-in <code>fs</code> module.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">1. Writing a file</h2>
        <CodeBlock
          language="js"
          code={`const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js!");
console.log("File created!");`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">2. Reading a file</h2>
        <CodeBlock
          language="js"
          code={`const fs = require("fs");

const data = fs.readFileSync("hello.txt", "utf-8");
console.log(data); // Hello from Node.js!`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Appending & deleting
        </h2>
        <CodeBlock
          language="js"
          code={`// Add more text
fs.appendFileSync("hello.txt", "\\nMore data here.");

// Delete file
// fs.unlinkSync("hello.txt");`}
        />
      </section>

      <Callout variant="nodeAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">🎯 Minute Activity</h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Write your name and age to <code>bio.txt</code>.
          </li>
          <li>Read the file and print it in the console.</li>
          <li>
            Create a folder synchronously using{" "}
            <code>fs.mkdirSync("my-test-folder")</code>.
          </li>
        </ol>
      </Callout>
    </NodeLesson>
  );
}

