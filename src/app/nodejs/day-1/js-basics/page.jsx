import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "JS Basics (Node)",
  description:
    "A quick refresher on writing JavaScript outside the browser: why there's no document or window in Node.js, using console.log to print to the terminal, and using ES6 arrow functions.",
  path: "/nodejs/day-1/js-basics",
});

export default function JsBasicsNode() {
  return (
    <NodeLesson backHref="/nodejs/day-1" title="♻️ JS Basics (Recap for Backend)">
      <p className="text-muted-foreground">
        Before jumping into Node, make sure you understand how JS works in the
        terminal without a browser.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">1. No DOM on server</h2>
        <Callout variant="nodeMini">
          <p className="text-sm text-[#333]">
            There is no <code>document</code> or <code>window</code> in Node.js.
          </p>
        </Callout>
        <CodeBlock
          language="js"
          code={`// Browser JS:
document.getElementById("my-id").innerHTML = "Hello"; // Works

// Node.js (Server) JS:
document.getElementById("my-id").innerHTML = "Hello"; // ERROR!`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">2. Printing to terminal</h2>
        <p className="mt-2 text-muted-foreground">
          Use <code>console.log()</code> to see output in your terminal.
        </p>
        <CodeBlock language="js" code={`console.log("Server side is running...");`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. ES6 features (arrow functions)
        </h2>
        <CodeBlock
          language="js"
          code={`const add = (a, b) => a + b;
console.log(add(5, 5)); // 10`}
        />
      </section>
    </NodeLesson>
  );
}

