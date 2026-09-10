import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Node Modules",
  description:
    "How Node.js treats every file as a module: exporting values with module.exports, importing them with require(), and using built-in core modules like os.",
  path: "/nodejs/day-1/modules",
});

export default function Modules() {
  return (
    <NodeLesson backHref="/nodejs/day-1" title="📦 Node.js Modules">
      <p className="text-muted-foreground">
        Node treats every file as a module. You can export from one file and
        import into another.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">1. Exporting</h2>
        <CodeBlock
          language="js"
          code={`// helpers.js
function add(a, b) {
  return a + b;
}

module.exports = add; // exports the function`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Importing (require)
        </h2>
        <CodeBlock
          language="js"
          code={`// index.js
const addFn = require("./helpers.js");

console.log(addFn(10, 20)); // 30`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">3. Core modules</h2>
        <CodeBlock
          language="js"
          code={`const os = require("os");
console.log(os.platform()); // 'win32' or 'linux'`}
        />
      </section>
    </NodeLesson>
  );
}

