import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Types of CSS & Evolution",
  description:
    "Walks through inline, internal, and external CSS in order, explaining the problems each method has and how the next approach evolved to fix them.",
  path: "/css/day-1/types-of-css",
});

export default function TypesOfCss() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-1"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 1
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Types of CSS & Their Evolution
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          CSS (Cascading Style Sheets) can be added to an HTML document in{" "}
          <b>three ways</b>. Each method improved the previous one to solve
          real problems. Every code block below is a{" "}
          <b>complete, standalone HTML file</b> — copy it into a{" "}
          <code>.html</code> file, open it, and it&apos;ll look exactly like
          the preview under it.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Inline CSS
        </h2>
        <p>
          Style is applied directly inside the HTML tag using the{" "}
          <code>style</code> attribute.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Inline CSS</title>
</head>
<body>
  <h1 style="color: blue; text-align: center;">Hello World</h1>
  <p style="color: red; font-size: 20px;">This is a paragraph.</p>
</body>
</html>`}
        />

        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <h3 className="text-center text-xl font-bold text-blue-600">
            Hello World
          </h3>
          <p className="mt-2 text-red-600" style={{ fontSize: 20 }}>
            This is a paragraph.
          </p>
        </div>

        <Callout variant="problem">
          <h3 className="text-base font-semibold text-[#2c3e50]">
            Problem with Inline CSS
          </h3>
          <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
            <li>
              <b>Repetition</b>: for 10 paragraphs you repeat the same styles 10
              times.
            </li>
            <li>
              <b>Messy HTML</b>: structure and styling get mixed together.
            </li>
            <li>
              <b>Hard to maintain</b>: changing red → green means editing many
              tags.
            </li>
          </ul>
        </Callout>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Internal (Embedded) CSS
        </h2>
        <p>
          Internal CSS solves repetition by moving styles to a{" "}
          <code>&lt;style&gt;</code> tag inside <code>&lt;head&gt;</code>.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Internal CSS</title>
<style>
  p {
    color: red;
    font-size: 20px;
  }
</style>
</head>
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</body>
</html>`}
        />

        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <p className="text-red-600" style={{ fontSize: 20 }}>
            Paragraph 1
          </p>
          <p className="text-red-600" style={{ fontSize: 20 }}>
            Paragraph 2
          </p>
        </div>

        <Callout variant="problem">
          <h3 className="text-base font-semibold text-[#2c3e50]">
            Problem with Internal CSS
          </h3>
          <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
            <li>
              <b>Limited scope</b>: only applies to that page; multi-page sites
              need copy/paste.
            </li>
            <li>
              <b>Large files</b>: HTML becomes heavy as styles grow.
            </li>
          </ul>
        </Callout>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) External CSS
        </h2>
        <p>
          Create a separate <code>.css</code> file and link it in HTML using{" "}
          <code>&lt;link&gt;</code>. This is the only method that needs{" "}
          <b>two files saved in the same folder</b>.
        </p>

        <div className="text-sm font-semibold text-muted-foreground">
          File 1: <code>style.css</code>
        </div>
        <CodeBlock
          language="css"
          code={`/* style.css */
p {
  color: red;
  font-size: 20px;
}`}
        />

        <div className="text-sm font-semibold text-muted-foreground">
          File 2: <code>index.html</code> (same folder as style.css)
        </div>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>External CSS</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</body>
</html>`}
        />

        <p className="text-xs text-muted-foreground">
          Save both files in the same folder, then open{" "}
          <code>index.html</code> — it&apos;ll look identical to the Internal
          CSS example above, just with styles kept in their own file.
        </p>
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <p className="text-red-600" style={{ fontSize: 20 }}>
            Paragraph 1
          </p>
          <p className="text-red-600" style={{ fontSize: 20 }}>
            Paragraph 2
          </p>
        </div>

        <Callout variant="solution">
          <h3 className="text-base font-semibold text-[#2c3e50]">
            Why External is Best
          </h3>
          <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
            <li>
              <b>Change once, apply everywhere</b>
            </li>
            <li>
              <b>Clean separation</b>: HTML for structure, CSS for design
            </li>
            <li>
              <b>Caching</b>: browser downloads CSS once and reuses it
            </li>
          </ul>
        </Callout>
      </section>
    </div>
  );
}
