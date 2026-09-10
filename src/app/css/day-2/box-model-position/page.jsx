import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Box Model & Positioning",
  description:
    "Covers the CSS box model (content, padding, border, margin) and why box-sizing: border-box matters, then the position family, z-index stacking, and the difference between opacity, visibility, and display.",
  path: "/css/day-2/box-model-position",
});

export default function BoxModelPosition() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-2"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 2
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Mastery: Box Model & Positioning
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Everything in CSS is a <b>box</b>. If you master how boxes are sized,
          spaced, and stacked, you can build any UI.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) The Box Model
        </h2>
        <p className="text-muted-foreground">The box model consists of:</p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>
            <b>Content</b>
          </li>
          <li>
            <b>Padding</b>
          </li>
          <li>
            <b>Border</b>
          </li>
          <li>
            <b>Margin</b>
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-[#2c3e50]">
          The “border-box” revolution
        </h3>
        <p className="text-muted-foreground">
          By default the browser uses <code>content-box</code>. This can break
          layouts because padding increases total size. Use this at the top of
          every CSS project:
        </p>

        <CodeBlock
          language="css"
          code={`/* THE SOLUTION: Add this to the top of every CSS project */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`}
        />

        <p className="text-muted-foreground">
          With <code>border-box</code>, <code>width: 200px</code> stays 200px,
          and padding/border grow inward.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Advanced positioning
        </h2>
        <p className="text-muted-foreground">
          Positioning lets you take elements out of normal document flow.
        </p>

        <h3 className="text-lg font-semibold text-[#2c3e50]">
          Position family
        </h3>
        <ol className="list-decimal pl-6 text-muted-foreground">
          <li>
            <b>static</b>: default flow (top/left/right/bottom don’t work)
          </li>
          <li>
            <b>relative</b>: moves from its spot, but keeps its space (often
            parent for absolute children)
          </li>
          <li>
            <b>absolute</b>: removed from flow, positioned relative to nearest
            positioned parent
          </li>
          <li>
            <b>fixed</b>: glued to viewport
          </li>
          <li>
            <b>sticky</b>: normal until a scroll threshold, then sticks
          </li>
        </ol>

        <h3 className="text-lg font-semibold text-[#2c3e50]">Z-index</h3>
        <p className="text-muted-foreground">
          Controls what is on top (only works on positioned elements).
        </p>

        <CodeBlock
          language="css"
          code={`.modal {
  position: fixed;
  z-index: 999; /* Always on top of everything */
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) Invisible essentials
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>
            <code>opacity: 0.5</code> → transparent but still clickable and
            takes space
          </li>
          <li>
            <code>visibility: hidden</code> → invisible but still takes space
          </li>
          <li>
            <code>display: none</code> → removed completely (no space)
          </li>
          <li>
            <code>cursor: pointer</code> → use on buttons
          </li>
        </ul>
      </section>
    </div>
  );
}

