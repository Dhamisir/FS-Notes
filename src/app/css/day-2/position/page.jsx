import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CSS Position",
  description:
    "Explains all five CSS position values — static, relative, absolute, fixed, and sticky — with code examples and a comparison table of how each affects movement and reserved space.",
  path: "/css/day-2/position",
});

export default function Position() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-2"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 2
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Mastery: Position & z-index
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          <code>position</code> lets you take an element out of normal
          document flow and place it exactly where you want.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        Each section below is a <b>complete, standalone HTML file</b>. Copy
        the whole code block into a <code>.html</code> file, open it in your
        browser, and it&apos;ll look exactly like the preview under it.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) position: static (default)
        </h2>
        <p className="text-sm text-muted-foreground">
          Normal flow. <code>top/left/right/bottom</code> are ignored.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Position: static</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  /* display: inline-block just lines boxes up side by side —
     we'll learn a cleaner way to do this in the Flexbox lesson */
  .box {
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #cfd8dc;
    border-radius: 6px;
    font-weight: bold;
    margin-right: 12px;
  }
  .box-2 {
    position: static; /* default — this is the same as not setting it */
    top: 30px;   /* ignored */
    left: 30px;  /* ignored */
    background: #90caf9;
  }
</style>
</head>
<body>
  <div class="box">1</div>
  <div class="box box-2">2</div>
  <div class="box">3</div>
</body>
</html>`}
        />
        <div className="flex items-center gap-3 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]">
            1
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1]">
            2
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]">
            3
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Normal flow: each box just sits next to the last one.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) position: relative
        </h2>
        <p className="text-sm text-muted-foreground">
          Moves from its normal spot, but its original space stays reserved.
          Often used as the positioned parent for absolute children.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Position: relative</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .box {
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #cfd8dc;
    border-radius: 6px;
    font-weight: bold;
    margin-right: 12px;
  }
  .box-2 {
    position: relative;
    top: 20px;
    left: 30px;
    background: #90caf9;
  }
</style>
</head>
<body>
  <div class="box">1</div>
  <div class="box box-2">2</div>
  <div class="box">3</div>
</body>
</html>`}
        />
        <div className="flex items-center gap-3 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]">
            1
          </div>
          <div className="relative h-12 w-12 rounded border-2 border-dashed border-black/20">
            <div
              className="absolute flex h-12 w-12 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1] shadow"
              style={{ top: 20, left: 30 }}
            >
              2
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded bg-[#cfd8dc] text-xs font-semibold text-[#2c3e50]">
            3
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Box 3 doesn&apos;t shift — box 2&apos;s original slot (dashed) is
          still reserved.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) position: absolute
        </h2>
        <p className="text-sm text-muted-foreground">
          Removed from flow entirely (no space reserved), positioned relative
          to the nearest ancestor that has <code>position: relative</code>{" "}
          (or any non-static value). If there&apos;s no positioned ancestor,
          it uses the page.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Position: absolute</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .parent {
    position: relative;
    width: 220px;
    height: 120px;
    border: 2px dashed #2980b9;
  }
  .child {
    position: absolute;
    top: 0;
    right: 0;
    width: 110px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #90caf9;
    border-radius: 6px;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="parent">
    <div class="child">top:0; right:0</div>
  </div>
</body>
</html>`}
        />
        <div className="relative h-28 w-full max-w-xs rounded-md border-2 border-dashed border-[#2980b9]/40 bg-[#f7f9fb] p-2">
          <div className="text-[10px] font-semibold text-[#2980b9]">
            .parent (position: relative)
          </div>
          <div className="absolute right-2 top-2 flex h-10 w-28 items-center justify-center rounded bg-[#90caf9] text-xs font-semibold text-[#0d47a1] shadow">
            .child (top:0; right:0)
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          4) position: fixed
        </h2>
        <p className="text-sm text-muted-foreground">
          Glued to the browser viewport — stays put even while the page
          scrolls. Chat buttons, sticky help icons. Open this one in a real
          browser tab and scroll to see it properly (a small embedded preview
          can&apos;t show true fixed behavior).
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Position: fixed</title>
<style>
  body { font-family: sans-serif; height: 250vh; padding: 40px; }
  .fixed-box {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-radius: 50%;
    background: #e67e22;
    color: white;
    font-size: 24px;
  }
</style>
</head>
<body>
  <p>Scroll down — the button stays pinned to the corner.</p>
  <div class="fixed-box">💬</div>
</body>
</html>`}
        />
        <div className="relative h-32 w-full max-w-xs overflow-hidden rounded-md border border-black/10 bg-[#eef2f5]">
          <div className="h-full space-y-2 overflow-y-auto p-2 text-[10px] text-muted-foreground">
            <p>Scroll this box…</p>
            <p>line 2</p>
            <p>line 3</p>
            <p>line 4</p>
            <p>line 5</p>
            <p>line 6</p>
          </div>
          <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#e67e22] text-xs text-white shadow-lg">
            💬
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          The chat bubble stays pinned to the corner as you scroll. (Shown
          pinned to this box for illustration — real{" "}
          <code>position: fixed</code> pins to the whole browser viewport,
          not a small container.)
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          5) position: sticky
        </h2>
        <p className="text-sm text-muted-foreground">
          Normal at first, then sticks once it hits the scroll threshold you
          give it (here <code>top: 0</code>). Sticky navbars, table headers.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Position: sticky</title>
<style>
  body { font-family: sans-serif; margin: 0; }
  .scroll-box {
    height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    background: #2980b9;
    color: white;
    padding: 8px 12px;
    font-weight: bold;
  }
  .content { padding: 12px; }
  .content p { margin: 0 0 12px; }
</style>
</head>
<body>
  <div class="scroll-box">
    <div class="sticky-header">Sticky header</div>
    <div class="content">
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
      <p>Paragraph 4</p>
      <p>Paragraph 5</p>
      <p>Paragraph 6</p>
    </div>
  </div>
</body>
</html>`}
        />
        <div className="h-40 w-full max-w-xs overflow-y-auto rounded-md border border-black/10">
          <div className="sticky top-0 bg-[#2980b9] px-3 py-1.5 text-xs font-semibold text-white">
            Sticky header
          </div>
          <div className="space-y-3 p-3 text-xs text-muted-foreground">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
            <p>Paragraph 4</p>
            <p>Paragraph 5</p>
            <p>Paragraph 6</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          This preview is real, working <code>position: sticky</code> —
          scroll inside the box and watch the header stick to the top, then
          release when the box ends.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          6) z-index
        </h2>
        <p className="text-sm text-muted-foreground">
          Controls stacking order when boxes overlap. Only works on elements
          that have a <code>position</code> other than <code>static</code> —
          that&apos;s why both boxes below are <code>position: absolute</code>{" "}
          first, then given a <code>z-index</code>.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>z-index</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .box {
    position: absolute;
    width: 140px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    color: white;
  }
  .box-1 {
    top: 20px;
    left: 20px;
    background: #2196f3;
    z-index: 1;
  }
  .box-2 {
    top: 50px;
    left: 60px;
    background: #e53935;
    z-index: 2; /* higher number = drawn on top */
  }
</style>
</head>
<body>
  <div class="box box-1">z-index: 1</div>
  <div class="box box-2">z-index: 2</div>
</body>
</html>`}
        />
        <div className="relative h-28 w-full max-w-xs rounded-md border border-black/10 bg-[#f7f9fb]">
          <div
            className="absolute left-4 top-4 flex h-16 w-32 items-center justify-center rounded-md bg-[#90caf9] text-xs font-semibold text-[#0d47a1] shadow"
            style={{ zIndex: 1 }}
          >
            z-index: 1
          </div>
          <div
            className="absolute left-12 top-10 flex h-16 w-32 items-center justify-center rounded-md bg-[#ef9a9a] text-xs font-semibold text-[#b71c1c] shadow-lg"
            style={{ zIndex: 2 }}
          >
            z-index: 2 (on top)
          </div>
        </div>
      </section>

      <hr className="my-2" />

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Quick comparison
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left">Position</th>
                <th className="px-3 py-2 text-left">Moves?</th>
                <th className="px-3 py-2 text-left">Keeps space?</th>
                <th className="px-3 py-2 text-left">Relative to</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["static", "❌", "✅", "normal flow"],
                ["relative", "✅", "✅", "itself"],
                ["absolute", "✅", "❌", "positioned parent"],
                ["fixed", "✅", "❌", "viewport"],
                ["sticky", "✅", "✅", "scroll position"],
              ].map((row) => (
                <tr key={row[0]} className="border-t">
                  {row.map((cell, i) => (
                    <td key={i} className="px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
