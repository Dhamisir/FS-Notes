import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "Box Model & box-sizing" };

export default function BoxModel() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-2"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 2
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Mastery: The Box Model
      </h1>

      <p className="text-sm text-muted-foreground">
        Everything in CSS is a <b>box</b>. If you master how boxes are sized
        and spaced, everything else — positioning, flexbox, grid — gets
        easier.
      </p>

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

        <div className="mt-2 flex justify-center">
          <div className="rounded bg-[#fdf3d8] p-4">
            <div className="mb-1 text-center text-[10px] font-semibold uppercase tracking-wide text-[#b8860b]">
              margin
            </div>
            <div className="rounded border-2 border-[#c0392b] bg-[#f8d7a3] p-4">
              <div className="mb-1 text-center text-[10px] font-semibold uppercase tracking-wide text-[#c0392b]">
                border
              </div>
              <div className="rounded bg-[#c8e6c9] p-4">
                <div className="mb-1 text-center text-[10px] font-semibold uppercase tracking-wide text-[#2e7d32]">
                  padding
                </div>
                <div className="flex items-center justify-center rounded bg-white px-8 py-5 text-sm font-semibold text-[#2c3e50] shadow-inner">
                  content
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#2c3e50]">
          The “border-box” revolution
        </h3>
        <p className="text-muted-foreground">
          By default the browser uses <code>content-box</code>. This can break
          layouts because padding increases total size. Use this at the top of
          every CSS project:
        </p>

        <p className="text-muted-foreground">
          Add this to the top of every CSS project:
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>box-sizing: content-box vs border-box</title>
<style>
  /* THE SOLUTION: reset this at the top of every CSS project */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: sans-serif; padding: 40px; }
  .label { font-size: 12px; font-weight: bold; margin: 20px 0 8px; }
  .outline { width: 160px; border: 1px dashed #999; }

  .content-box {
    box-sizing: content-box; /* overriding the reset, just to prove the point */
    width: 160px;
    padding: 16px;
    background: #ffebee;
    border: 2px solid #c0392b;
  }
  .border-box {
    box-sizing: border-box;
    width: 160px;
    padding: 16px;
    background: #e8f5e9;
    border: 2px solid #2e7d32;
  }
</style>
</head>
<body>
  <div class="label">content-box — actually ~196px wide</div>
  <div class="outline"><div class="content-box">width: 160px; padding: 16px;</div></div>

  <div class="label">border-box — stays 160px wide</div>
  <div class="outline"><div class="border-box">width: 160px; padding: 16px;</div></div>
</body>
</html>`}
        />

        <p className="text-muted-foreground">
          With <code>border-box</code>, <code>width: 200px</code> stays 200px,
          and padding/border grow inward.
        </p>

        <div className="mt-2 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-[#c0392b]">
              content-box (default) — grows past the dashed line
            </div>
            <div className="w-[160px] border border-dashed border-black/30">
              <div
                style={{ boxSizing: "content-box", width: 160, padding: 16 }}
                className="flex items-center justify-center border-2 border-[#c0392b] bg-[#ffebee] text-center text-[11px] text-[#c0392b]"
              >
                actually ~194px wide
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-[#2e7d32]">
              border-box — stays inside the dashed line
            </div>
            <div className="w-[160px] border border-dashed border-black/30">
              <div
                style={{ boxSizing: "border-box", width: 160, padding: 16 }}
                className="flex items-center justify-center border-2 border-[#2e7d32] bg-[#e8f5e9] text-center text-[11px] text-[#2e7d32]"
              >
                stays 160px wide
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Both boxes above have <code>width: 160px; padding: 16px;</code> — the
          dashed outline marks 160px. Watch which one breaks out of it.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Invisible essentials
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

        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>opacity vs visibility vs display</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .row { margin-bottom: 24px; }
  .box {
    width: 260px;
    padding: 12px;
    background: #90caf9;
    border-radius: 6px;
    margin-bottom: 4px;
  }
  .opacity-half { opacity: 0.5; } /* still clickable, still takes space */
  .invisible { visibility: hidden; } /* gone visually, space still reserved */
  .gone { display: none; } /* removed completely, no space reserved */
</style>
</head>
<body>
  <div class="row">
    <div class="box opacity-half">opacity: 0.5</div>
    <div class="box">next box (right below, same spacing)</div>
  </div>
  <div class="row">
    <div class="box invisible">you can't see me</div>
    <div class="box">next box (space above is still reserved)</div>
  </div>
  <div class="row">
    <div class="box gone">you can't see me</div>
    <div class="box">next box (moved up — no space reserved)</div>
  </div>
</body>
</html>`}
        />

        <div className="mt-2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="rounded bg-[#90caf9] px-3 py-2 text-xs font-semibold text-[#0d47a1] opacity-50">
              opacity: 0.5
            </div>
            <div className="rounded bg-[#cfd8dc] px-3 py-2 text-xs text-[#2c3e50]">
              next box (right below, same spacing)
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="invisible rounded bg-[#90caf9] px-3 py-2 text-xs font-semibold text-[#0d47a1]">
              you can&apos;t see me
            </div>
            <div className="rounded bg-[#cfd8dc] px-3 py-2 text-xs text-[#2c3e50]">
              next box (space above is still reserved)
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="rounded bg-[#cfd8dc] px-3 py-2 text-xs text-[#2c3e50]">
              next box (moved up — no space reserved)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
