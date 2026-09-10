import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "CSS Transforms" };

export default function Transforms() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-3"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 3
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Transforms
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          <code>transform</code> moves, resizes, or rotates an element{" "}
          <b>without affecting layout</b> — other elements don&apos;t shift,
          unlike changing <code>margin</code> or <code>position</code>. This
          is what makes it perfect for hover effects and animations.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        Every code block below is a <b>complete, standalone HTML file</b> —
        copy it into a <code>.html</code> file, open it, and hover the boxes.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          translate, scale, rotate
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>CSS Transforms</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .row { display: flex; gap: 16px; }
  .box {
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease; /* smooths the change — more on this next lesson */
  }
  .translate:hover { transform: translate(10px, -8px); }
  .scale:hover { transform: scale(1.2); }
  .rotate:hover { transform: rotate(15deg); }
  .combo:hover { transform: translateY(-8px) scale(1.1) rotate(-4deg); }
</style>
</head>
<body>
  <p>Hover each box:</p>
  <div class="row">
    <div class="box translate">translate</div>
    <div class="box scale">scale</div>
    <div class="box rotate">rotate</div>
    <div class="box combo">combo</div>
  </div>
</body>
</html>`}
        />

        <div className="flex gap-4 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="flex h-[60px] w-[100px] cursor-pointer items-center justify-center rounded bg-[#90caf9] text-center text-xs font-semibold text-[#0d47a1] transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2">
            translate
          </div>
          <div className="flex h-[60px] w-[100px] cursor-pointer items-center justify-center rounded bg-[#90caf9] text-center text-xs font-semibold text-[#0d47a1] transition-transform duration-300 hover:scale-125">
            scale
          </div>
          <div className="flex h-[60px] w-[100px] cursor-pointer items-center justify-center rounded bg-[#90caf9] text-center text-xs font-semibold text-[#0d47a1] transition-transform duration-300 hover:rotate-[15deg]">
            rotate
          </div>
          <div className="flex h-[60px] w-[100px] cursor-pointer items-center justify-center rounded bg-[#90caf9] text-center text-xs font-semibold text-[#0d47a1] transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:-rotate-[4deg]">
            combo
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Hover each box above — nothing else on the page moves, because{" "}
          <code>transform</code> doesn&apos;t take up any extra space.
        </p>
      </section>

      <Callout variant="solution">
        <h3 className="text-base font-semibold text-[#2c3e50]">
          Common values
        </h3>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
          <li>
            <code>translate(x, y)</code> — moves the element
          </li>
          <li>
            <code>scale(n)</code> — resizes the element (1 = 100%)
          </li>
          <li>
            <code>rotate(deg)</code> — spins the element
          </li>
          <li>You can combine several in one declaration, space-separated</li>
        </ul>
      </Callout>
    </div>
  );
}
