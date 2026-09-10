import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CSS Grid",
  description:
    "A step-by-step build-up of CSS Grid: defining columns, fr units, gap, spanning cells, auto-fit with minmax for responsive galleries, and a full media-query breakpoint example.",
  path: "/css/day-2/grid",
});

export default function Grid() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-2"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 2
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Grid: Master the Matrix (Step-by-Step)
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Flexbox is for <b>one-direction</b> layouts. Grid is for{" "}
          <b>two-direction</b> layouts (rows and columns).
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 1: Skeleton
        </h2>
        <CodeBlock
          language="html"
          code={`<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 2: Create columns
        </h2>
        <CodeBlock
          language="css"
          code={`.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 fixed columns */
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 3: Flexible units (fr)
        </h2>
        <CodeBlock
          language="css"
          code={`.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

/* shortcut for 3 equal columns */
.container {
  grid-template-columns: repeat(3, 1fr);
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 4: Clean spacing with gap
        </h2>
        <CodeBlock
          language="css"
          code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 5: Spanning (merge cells)
        </h2>
        <CodeBlock
          language="css"
          code={`.item-1 {
  grid-column: span 2; /* take 2 columns */
}

.header {
  grid-column: 1 / 4; /* full width (line 1 to line 4) */
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 6: Auto-fit + minmax
        </h2>
        <CodeBlock
          language="css"
          code={`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`}
        />
        <p className="text-muted-foreground">
          <b>Breakdown</b>: <code>auto-fit</code> fits as many as possible, and{" "}
          <code>minmax(250px, 1fr)</code> means each item is at least 250px but
          can grow.
        </p>
      </section>

      <hr className="my-2" />

      <h2 className="text-2xl font-semibold tracking-tight">
        Real world: responsive grid (media queries)
      </h2>
      <CodeBlock
        language="css"
        code={`/* Desktop: 3 columns */
.container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet: 2 columns */
@media (max-width: 900px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 column */
@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}
      />
      <p className="text-muted-foreground">
        <b>Standard breakpoints</b>: Mobile 0–600px, Tablet 600–900px, Desktop
        900px+
      </p>
    </div>
  );
}

