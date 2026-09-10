import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "CSS Transitions" };

export default function Transitions() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-3"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 3
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Transitions
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Without a transition, style changes (like on <code>:hover</code>)
          happen <b>instantly</b>. <code>transition</code> smooths that
          change over time.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        Every code block below is a <b>complete, standalone HTML file</b> —
        copy it into a <code>.html</code> file, open it, and hover.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Basic transition
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Basic transition</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .btn {
    padding: 12px 24px;
    background: #2980b9;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .btn:hover {
    background-color: #e67e22;
  }
</style>
</head>
<body>
  <button class="btn">Hover me</button>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <button className="rounded-md bg-[#2980b9] px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-[#e67e22]">
            Hover me
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          <code>transition: background-color 0.3s ease;</code> = animate the{" "}
          <b>property</b> (<code>background-color</code>) over a{" "}
          <b>duration</b> (<code>0.3s</code>) with a <b>timing curve</b> (
          <code>ease</code>).
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) transition-timing-function
        </h2>
        <p className="text-sm text-muted-foreground">
          The timing function controls the <b>speed curve</b>, not the
          duration. All three dots below take the same 1 second — but feel
          different.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>transition-timing-function</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .track {
    position: relative;
    height: 40px;
    width: 240px;
    background: #eee;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  .dot {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #90caf9;
    transition: left 1s;
  }
  .track:hover .dot { left: 200px; }
  .linear .dot { transition-timing-function: linear; }
  .ease .dot { transition-timing-function: ease; }
  .bounce .dot { transition-timing-function: cubic-bezier(.34,1.56,.64,1); }
</style>
</head>
<body>
  <p>Hover each track:</p>
  <div class="track linear"><div class="dot"></div></div>
  <div class="track ease"><div class="dot"></div></div>
  <div class="track bounce"><div class="dot"></div></div>
</body>
</html>`}
        />
        <div className="flex flex-col gap-3 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="group relative h-10 w-60 rounded-md bg-[#eee]">
            <div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-[#90caf9] transition-all duration-1000 ease-linear group-hover:left-[196px]" />
          </div>
          <div className="group relative h-10 w-60 rounded-md bg-[#eee]">
            <div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-[#90caf9] transition-all duration-1000 ease-in-out group-hover:left-[196px]" />
          </div>
          <div className="group relative h-10 w-60 rounded-md bg-[#eee]">
            <div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-[#90caf9] transition-all duration-1000 ease-out group-hover:left-[196px]" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Top: <code>linear</code> (constant speed). Middle:{" "}
          <code>ease-in-out</code> (slow start, slow end). Bottom:{" "}
          <code>ease-out</code>/bounce-ish curve — closest match to the
          cubic-bezier bounce in the code.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) Real world: card lift (multiple properties)
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Card lift on hover</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .card {
    width: 220px;
    padding: 20px;
    background: white;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.18);
  }
</style>
</head>
<body>
  <div class="card">Hover this card</div>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-8">
          <div className="w-56 rounded-lg border border-black/5 bg-white p-5 text-sm text-[#2c3e50] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            Hover this card
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          You can transition <b>several properties at once</b> — here
          <code>transform</code> and <code>box-shadow</code> both animate
          together.
        </p>
      </section>
    </div>
  );
}
