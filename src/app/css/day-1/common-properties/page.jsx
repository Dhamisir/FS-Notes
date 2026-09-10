import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Common CSS Properties",
  description:
    "Reference notes on everyday CSS properties for typography (color, font-size, text-align, font-family), box and layout basics (background, width/height, border, border-radius), and spacing (margin, padding).",
  path: "/css/day-1/common-properties",
});

export default function CommonProperties() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-1"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 1
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Common CSS Properties
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Here are the most basic properties you’ll use in every project.
        </p>
      </Callout>

      <section className="flex flex-col gap-4">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Text & Typography
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>color</code>
          </h3>
          <CodeBlock
            language="css"
            code={`color: red;
color: #ffffff;
color: rgb(0, 0, 0);`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>font-size</code>
          </h3>
          <CodeBlock
            language="css"
            code={`font-size: 16px;
font-size: 2rem;`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>text-align</code>
          </h3>
          <CodeBlock
            language="css"
            code={`text-align: center;
text-align: left;`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>font-family</code>
          </h3>
          <CodeBlock language="css" code={`font-family: Arial;`} />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Box & Layout (Basics)
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>background</code> / <code>background-color</code>
          </h3>
          <CodeBlock language="css" code={`background: blue;`} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>width</code> / <code>height</code>
          </h3>
          <CodeBlock
            language="css"
            code={`width: 100%;
height: 50vh;`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>border</code>
          </h3>
          <CodeBlock language="css" code={`border: 1px solid red;`} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>border-radius</code>
          </h3>
          <CodeBlock language="css" code={`border-radius: 8px;`} />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) Spacing
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>margin</code> (outside)
          </h3>
          <CodeBlock language="css" code={`margin: 20px;`} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            <code>padding</code> (inside)
          </h3>
          <CodeBlock language="css" code={`padding: 20px;`} />
        </div>
      </section>
    </div>
  );
}

