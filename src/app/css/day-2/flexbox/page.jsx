import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Flexbox (Mastery & Proofs)",
  description:
    "Builds up Flexbox step by step — display: flex, justify-content, align-items, flex-direction, wrap and gap — then proves flex-grow, flex-shrink, and flex-basis with worked examples and a responsive card layout.",
  path: "/css/day-2/flexbox",
});

export default function Flexbox() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-2"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 2
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Flexbox: From Zero to Hero (Mastery)
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Don’t just memorize properties — <b>see the change</b> as you apply
          them one by one. Every code block below is a{" "}
          <b>complete, standalone HTML file</b> — copy it into a{" "}
          <code>.html</code> file and it&apos;ll look exactly like the
          preview under it.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 2: Add display: flex
        </h2>
        <p className="text-muted-foreground">
          Add this to the <b>parent</b>. All children become flex items.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-muted-foreground">
              before (block, default)
            </div>
            <CodeBlock
              language="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Before: block (default)</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .box {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #cfd8dc;
    border-radius: 6px;
    font-weight: bold;
    margin-bottom: 8px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</body>
</html>`}
            />
            <div className="flex flex-col gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-[#2980b9]">
              after (display: flex)
            </div>
            <CodeBlock
              language="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>After: display: flex</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: flex;
    gap: 8px;
  }
  .box {
    flex: 1;
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
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</body>
</html>`}
            />
            <div className="flex gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 w-full items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 3: Main axis — justify-content
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>justify-content</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .row {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    padding: 8px;
  }
  .box {
    width: 50px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
  }
  .start { justify-content: flex-start; } /* default */
  .center { justify-content: center; }
  .end { justify-content: flex-end; }
  .between { justify-content: space-between; }
  .around { justify-content: space-around; }
</style>
</head>
<body>
  <div class="row start">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  <div class="row center">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  <div class="row end">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  <div class="row between">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  <div class="row around">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 flex flex-col gap-3">
          {[
            { label: "flex-start", cls: "justify-start" },
            { label: "center", cls: "justify-center" },
            { label: "flex-end", cls: "justify-end" },
            { label: "space-between", cls: "justify-between" },
            { label: "space-around", cls: "justify-around" },
          ].map((row) => (
            <div key={row.label} className="flex flex-col gap-1">
              <div className="text-xs font-semibold text-muted-foreground">
                {row.label}
              </div>
              <div
                className={`flex ${row.cls} gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2`}
              >
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="flex h-8 w-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 4: Cross axis — align-items
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>align-items</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .row {
    display: flex;
    gap: 8px;
    height: 80px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    padding: 8px;
  }
  .box {
    width: 60px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
    font-size: 11px;
  }
  .h32 { height: 32px; line-height: 32px; }
  .h48 { height: 48px; line-height: 48px; }
  .h24 { height: 24px; line-height: 24px; }
  .start { align-items: flex-start; }
  .center { align-items: center; }
  .end { align-items: flex-end; }
  .stretch { align-items: stretch; } /* default */
</style>
</head>
<body>
  <div class="row start">
    <div class="box h32">32px</div>
    <div class="box h48">48px</div>
    <div class="box h24">24px</div>
  </div>
  <div class="row center">
    <div class="box h32">32px</div>
    <div class="box h48">48px</div>
    <div class="box h24">24px</div>
  </div>
  <div class="row end">
    <div class="box h32">32px</div>
    <div class="box h48">48px</div>
    <div class="box h24">24px</div>
  </div>
  <div class="row stretch">
    <div class="box">no set height — stretches to fill</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {[
            { label: "flex-start", cls: "items-start" },
            { label: "center", cls: "items-center" },
            { label: "flex-end", cls: "items-end" },
            { label: "stretch (default)", cls: "items-stretch" },
          ].map((row) => (
            <div key={row.label} className="flex flex-col gap-1">
              <div className="text-xs font-semibold text-muted-foreground">
                {row.label}
              </div>
              <div
                className={`flex ${row.cls} h-20 gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2`}
              >
                <div className="flex w-10 items-center justify-center rounded bg-[#90caf9] text-[10px] font-semibold text-[#0d47a1]">
                  h-8
                </div>
                <div className="flex h-12 w-10 items-center justify-center rounded bg-[#90caf9] text-[10px] font-semibold text-[#0d47a1]">
                  h-12
                </div>
                <div className="flex h-6 w-10 items-center justify-center rounded bg-[#90caf9] text-[10px] font-semibold text-[#0d47a1]">
                  h-6
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Note: the boxes above have fixed heights so you can compare
          flex-start/center/flex-end clearly. The 4th row of the code
          (<code>.stretch</code> with no set height) shows the real default
          in action.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 5: flex-direction
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-direction</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .row { display: flex; flex-direction: row; gap: 8px; margin-bottom: 16px; }
  .column { display: flex; flex-direction: column; gap: 8px; }
  .box {
    width: 40px;
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
  <div class="row">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
  <div class="column">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`}
        />
        <Callout variant="problem">
          <p className="text-sm text-[#2c3e50]">
            <b>CRITICAL</b>: When you switch to <code>column</code>, the axes
            swap. <code>justify-content</code> now controls top/bottom, and{" "}
            <code>align-items</code> controls left/right.
          </p>
        </Callout>

        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-semibold text-muted-foreground">
              flex-direction: row (default)
            </div>
            <div className="flex gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 w-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xs font-semibold text-[#2980b9]">
              flex-direction: column
            </div>
            <div className="flex flex-col gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 w-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 6: flex-wrap + gap
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-wrap + gap</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: flex;
    flex-wrap: wrap; /* items can go to next line */
    gap: 15px; /* spacing between wrapped items */
    width: 260px;
    border: 1px solid #ddd;
    padding: 12px;
  }
  .box {
    width: 70px;
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
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 flex w-64 flex-wrap gap-3 rounded-md border border-black/10 bg-[#f7f9fb] p-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="flex h-10 w-16 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
            >
              {n}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Container is only 260px wide — items that don&apos;t fit wrap to a
          new line instead of shrinking or overflowing.
        </p>
      </section>

      <hr className="my-2" />

      <h2 className="text-2xl font-semibold tracking-tight text-[#2c3e50]">
        Live proofs
      </h2>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Proof 1 — flex-grow</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-muted-foreground">
              flex-grow: 0 (default) — boxes stay their own width
            </div>
            <CodeBlock
              language="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-grow: 0 (default)</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container { display: flex; gap: 8px; width: 100%; border: 1px solid #ddd; padding: 8px; }
  .box {
    width: 100px; /* flex-grow: 0 by default — stays this width */
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #cfd8dc;
    border-radius: 6px;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`}
            />
            <div className="flex w-full max-w-md gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 w-16 shrink-0 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-[#2980b9]">
              flex-grow: 1 — leftover space split equally
            </div>
            <CodeBlock
              language="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-grow: 1</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container { display: flex; gap: 8px; width: 100%; border: 1px solid #ddd; padding: 8px; }
  .box {
    width: 100px;
    flex-grow: 1; /* remaining space divided equally */
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
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`}
            />
            <div className="flex w-full max-w-md gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 grow items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Proof 2 — flex-shrink</h3>
        <p className="text-muted-foreground">
          Default is <code>flex-shrink: 1</code>. To prevent shrinking, set
          it to 0.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-muted-foreground">
              flex-shrink: 1 (default) — boxes shrink to fit
            </div>
            <CodeBlock
              language="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-shrink: 1 (default)</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: flex;
    gap: 8px;
    width: 220px;
    border: 1px solid #ddd;
    padding: 8px;
  }
  .box {
    flex: 1 1 200px; /* shrink: 1 by default — boxes shrink to fit */
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
    font-size: 12px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`}
            />
            <div className="flex w-56 gap-2 overflow-hidden rounded-md border border-black/10 bg-[#f7f9fb] p-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 min-w-0 flex-1 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-[#c0392b]">
              flex-shrink: 0 — boxes overflow the container
            </div>
            <CodeBlock
              language="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-shrink: 0</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: flex;
    gap: 8px;
    width: 220px;
    border: 1px solid #ddd;
    padding: 8px;
    overflow-x: auto;
  }
  .box {
    width: 100px;
    flex-shrink: 0; /* overflow instead of shrink */
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #ef9a9a;
    color: #b71c1c;
    border-radius: 6px;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">1</div><div class="box">2</div><div class="box">3</div>
  </div>
</body>
</html>`}
            />
            <div className="flex w-56 gap-2 overflow-x-auto rounded-md border border-black/10 bg-[#f7f9fb] p-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex h-10 w-20 shrink-0 items-center justify-center rounded bg-[#ef9a9a] text-xs font-semibold text-[#b71c1c]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Proof 3 — flex-basis</h3>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>flex-basis</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: flex;
    gap: 8px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px;
  }
  .box {
    flex-basis: 200px; /* starting size before growing/shrinking */
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
    <div class="box">basis: 200px</div>
    <div class="box">basis: 200px</div>
  </div>
</body>
</html>`}
        />
        <div className="flex w-full max-w-md gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
          {[1, 2].map((n) => (
            <div
              key={n}
              style={{ flexBasis: 200 }}
              className="flex h-10 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]"
            >
              basis: 200px
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Pro trick: proportional grow</h3>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Proportional flex-grow</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .container {
    display: flex;
    gap: 8px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px;
  }
  .box {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
  }
  .box:nth-child(2) {
    flex: 2; /* takes twice as much leftover space */
    background: #42a5f5;
    color: white;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">flex: 1</div>
    <div class="box">flex: 2</div>
    <div class="box">flex: 1</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 flex w-full max-w-md gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-2">
          <div className="flex h-10 flex-1 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]">
            flex: 1
          </div>
          <div className="flex h-10 flex-[2] items-center justify-center rounded bg-[#42a5f5] text-xs font-semibold text-white">
            flex: 2 (2x wider)
          </div>
          <div className="flex h-10 flex-1 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]">
            flex: 1
          </div>
        </div>
      </section>

      <hr className="my-2" />

      <h2 className="text-2xl font-semibold tracking-tight text-[#2c3e50]">
        Real world: responsive layout example
      </h2>

      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Responsive flex layout</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .box {
    flex: 0 0 calc(33.33% - 20px); /* desktop: 3 per row */
    height: 80px;
    line-height: 80px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 8px;
    font-weight: bold;
  }
  @media (max-width: 900px) {
    .box {
      flex: 0 0 calc(50% - 20px); /* tablet: 2 per row */
    }
  }
  @media (max-width: 600px) {
    .box {
      flex: 0 0 100%; /* mobile: 1 per row */
    }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
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
      <p className="text-xs text-muted-foreground">
        This preview always shows 3 columns since it&apos;s narrow — copy the
        code and resize a real browser window to see it drop to 2, then 1
        column.
      </p>
    </div>
  );
}
