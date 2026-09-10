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
          <b>two-direction</b> layouts (rows and columns). Every code block
          below is a <b>complete, standalone HTML file</b> — copy it into a{" "}
          <code>.html</code> file and it&apos;ll look exactly like the
          preview under it.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 1: Skeleton
        </h2>
        <p className="text-muted-foreground">
          Plain HTML, no styling yet — just three items sitting in normal
          flow.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Grid: skeleton</title>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>`}
        />
        <div className="flex flex-col gap-1 rounded-md border border-black/10 bg-[#f7f9fb] p-3 text-sm text-[#2c3e50]">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 2: Create columns
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Grid: fixed columns</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* 3 fixed columns */
    gap: 8px;
  }
  .item {
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 grid w-full max-w-md grid-cols-[repeat(3,1fr)] gap-1 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex h-12 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
            >
              {n}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 3: Flexible units (fr)
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Grid: fr units</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    /* shortcut for 3 EQUAL columns instead:
       grid-template-columns: repeat(3, 1fr); */
    gap: 8px;
  }
  .item {
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
  }
  .item:nth-child(2) {
    background: #42a5f5;
    color: white;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">1fr</div>
    <div class="item">2fr (2x wider)</div>
    <div class="item">1fr</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 grid w-full max-w-md grid-cols-[1fr_2fr_1fr] gap-1 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
          <div className="flex h-12 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]">
            1fr
          </div>
          <div className="flex h-12 items-center justify-center rounded bg-[#42a5f5] text-xs font-semibold text-white">
            2fr (2x wider)
          </div>
          <div className="flex h-12 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]">
            1fr
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 4: Clean spacing with gap
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Grid: gap</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
    <div class="item">4</div><div class="item">5</div><div class="item">6</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 grid w-full max-w-md grid-cols-3 gap-4 rounded-md border border-black/10 bg-[#f7f9fb] p-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="flex h-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
            >
              {n}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 5: Spanning (merge cells)
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Grid: spanning</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
    font-weight: bold;
  }
  .header {
    grid-column: 1 / 4; /* full width (line 1 to line 4) */
    background: #42a5f5;
    color: white;
  }
  .item-1 {
    grid-column: span 2; /* take 2 columns */
    background: #90caf9;
    color: #0d47a1;
  }
  .item-2 {
    background: #cfd8dc;
    color: #2c3e50;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item header">.header (grid-column: 1 / 4)</div>
    <div class="item item-1">.item-1 (span 2)</div>
    <div class="item item-2">item-2</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 grid w-full max-w-md grid-cols-3 gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
          <div className="col-span-3 flex h-10 items-center justify-center rounded bg-[#42a5f5] text-xs font-semibold text-white">
            .header (grid-column: 1 / 4)
          </div>
          <div className="col-span-2 flex h-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]">
            .item-1 (span 2)
          </div>
          <div className="flex h-10 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]">
            item-2
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 6: Auto-fit + minmax
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Grid: auto-fit + minmax</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
    <div class="item">4</div><div class="item">5</div>
  </div>
</body>
</html>`}
        />
        <p className="text-muted-foreground">
          <b>Breakdown</b>: <code>auto-fit</code> fits as many as possible, and{" "}
          <code>minmax(150px, 1fr)</code> means each item is at least 150px
          but can grow.
        </p>

        <div className="mt-2 grid w-full max-w-md grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="flex h-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
            >
              {n}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Try resizing your browser window — items reflow on their own,
          without any media queries.
        </p>
      </section>

      <hr className="my-2" />

      <h2 className="text-2xl font-semibold tracking-tight">
        Real world: responsive grid (media queries)
      </h2>
      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Responsive grid</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  .container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
  .item {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 8px;
    font-weight: bold;
  }
  @media (max-width: 900px) {
    .container {
      grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
    }
  }
  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr; /* Mobile: 1 column */
    }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>`}
      />
      <div className="grid grid-cols-3 gap-3 rounded-md border border-black/10 bg-[#f7f9fb] p-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="flex h-12 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
          >
            {n}
          </div>
        ))}
      </div>
      <p className="text-muted-foreground">
        <b>Standard breakpoints</b>: Mobile 0–600px, Tablet 600–900px, Desktop
        900px+. This preview always shows 3 columns since it&apos;s narrow —
        copy the code and resize a real browser window to see it reflow.
      </p>
    </div>
  );
}
