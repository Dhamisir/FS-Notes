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
          style. The 3 main beginner types:
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Element selector
        </h2>
        <p>Targets all elements with a specific tag name.</p>
        <CodeBlock
          language="css"
          code={`/* Styles ALL h1 tags on the page */
h1 {
  color: blue;
}`}
        />
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
          code={`<!-- HTML -->
<button class="btn-primary">Click Me</button>
<p class="btn-primary">I am just text with class</p>`}
        />
        <CodeBlock
          language="css"
          code={`/* CSS */
.btn-primary {
  background-color: blue;
  color: white;
}`}
        />
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
          code={`<!-- HTML -->
<div id="main-header">Logo Here</div>`}
        />
        <CodeBlock
          language="css"
          code={`/* CSS */
#main-header {
  height: 100px;
  background-color: #333;
}`}
        />
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
    </div>
  );
}

