import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CSS Selectors",
  description:
    "An introduction to the three core beginner CSS selectors — element, class, and ID — plus how specificity decides which one wins when they overlap.",
  path: "/css/day-1/selectors",
});

export default function Selectors() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-1"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 1
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Selectors
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Selectors are used to “find” (select) the HTML elements you want to
          style. The 3 main beginner types below are each a{" "}
          <b>complete, standalone HTML file</b> — copy one into a{" "}
          <code>.html</code> file, open it, and it&apos;ll look exactly like
          the preview under it.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Element selector
        </h2>
        <p>Targets all elements with a specific tag name.</p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Element selector</title>
<style>
  /* Styles ALL h1 tags on the page */
  h1 {
    color: blue;
  }
</style>
</head>
<body>
  <h1>This is styled by the element selector</h1>
  <h1>So is this one</h1>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <h3 className="text-lg font-bold text-blue-600">
            This is styled by the element selector
          </h3>
          <h3 className="mt-1 text-lg font-bold text-blue-600">
            So is this one
          </h3>
        </div>
        <p className="text-muted-foreground">
          <b>Use case</b>: default styles across the site (body font, paragraph
          spacing).
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Class selector (.)
        </h2>
        <p>
          Targets elements with a specific <code>class</code> attribute (starts
          with a dot).
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Class selector</title>
<style>
  .btn-primary {
    background-color: blue;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
  }
</style>
</head>
<body>
  <button class="btn-primary">Click Me</button>
  <p class="btn-primary">I am just text with class</p>
</body>
</html>`}
        />
        <div className="flex flex-col items-start gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <button className="rounded bg-blue-600 px-4 py-2 font-medium text-white">
            Click Me
          </button>
          <p className="rounded bg-blue-600 px-4 py-2 text-white">
            I am just text with class
          </p>
        </div>
        <p className="text-muted-foreground">
          <b>Gold rule</b>: Classes are <b>reusable</b>.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) ID selector (#)
        </h2>
        <p>
          Targets one element with a unique <code>id</code> (starts with #).
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>ID selector</title>
<style>
  #main-header {
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    background-color: #333;
    color: white;
    border-radius: 6px;
  }
</style>
</head>
<body>
  <div id="main-header">Logo Here</div>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="flex h-[60px] items-center rounded-md bg-[#333] px-4 text-white">
            Logo Here
          </div>
        </div>
        <p className="text-muted-foreground">
          <b>Gold rule</b>: IDs must be <b>unique</b>. IDs have higher priority
          than classes.
        </p>
      </section>

      <Callout variant="problem">
        <h3 className="text-base font-semibold text-[#2c3e50]">
          Priority (Specificity)
        </h3>
        <p className="mt-2 text-sm text-[#2c3e50]">
          If you style the same element with all three, which wins?
        </p>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            <b>ID Selector</b> (winner)
          </li>
          <li>
            <b>Class Selector</b>
          </li>
          <li>
            <b>Element Selector</b>
          </li>
        </ol>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Proof: who actually wins?
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Specificity: who wins?</title>
<style>
  p { color: green; }           /* element selector */
  .highlight { color: orange; } /* class selector */
  #winner { color: blue; }      /* ID selector — this one wins */
</style>
</head>
<body>
  <p id="winner" class="highlight">What color am I?</p>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <p className="text-lg font-semibold text-blue-600">
            What color am I?
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          The text is blue — the ID rule beat both the class rule and the
          element rule, exactly matching the priority order above.
        </p>
      </section>
    </div>
  );
}
