import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "CSS Animations (@keyframes)" };

export default function Animations() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-3"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 3
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Animations (@keyframes)
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          <code>transition</code> only animates between two states (like
          normal → hover). <code>@keyframes</code> lets you define{" "}
          <b>a full sequence of steps</b> that can play automatically, loop
          forever, or run once on page load — no hover needed.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        Every code block below is a <b>complete, standalone HTML file</b> —
        copy it into a <code>.html</code> file and it plays immediately.
      </p>

      <style>{`
        @keyframes day3PulseDemo {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .day3-pulse-box { animation: day3PulseDemo 1.5s ease-in-out infinite; }

        @keyframes day3FadeInUpDemo {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .day3-fade-card { animation: day3FadeInUpDemo 0.8s ease-out; }

        @keyframes day3FillDemo {
          from { width: 0%; }
          to   { width: 80%; }
        }
        .day3-progress-bar { animation: day3FillDemo 2s ease-out forwards; }
      `}</style>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) @keyframes basics
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>@keyframes basics</title>
<style>
  body { font-family: sans-serif; padding: 40px; }

  @keyframes pulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  .box {
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 6px;
    font-weight: bold;
    animation: pulse 1.5s ease-in-out infinite;
  }
</style>
</head>
<body>
  <div class="box">pulsing</div>
</body>
</html>`}
        />
        <div className="flex items-center rounded-md border border-black/10 bg-[#f7f9fb] p-6">
          <div className="day3-pulse-box flex h-[60px] w-[100px] items-center justify-center rounded bg-[#90caf9] text-center text-xs font-semibold text-[#0d47a1]">
            pulsing
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          <code>@keyframes pulse</code> defines the steps (0% → 50% → 100%).{" "}
          <code>animation: pulse 1.5s ease-in-out infinite;</code> = play the{" "}
          <b>pulse</b> keyframes, over <b>1.5s</b>, with an{" "}
          <b>ease-in-out</b> curve, <b>forever</b>.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Entrance animation
        </h2>
        <p className="text-sm text-muted-foreground">
          Runs once when the page loads — this is exactly what a
          &quot;fade + slide in&quot; card entrance is.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Entrance animation</title>
<style>
  body { font-family: sans-serif; padding: 40px; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card {
    width: 220px;
    padding: 20px;
    background: #90caf9;
    color: #0d47a1;
    border-radius: 10px;
    font-weight: bold;
    animation: fadeInUp 0.8s ease-out; /* no infinite — plays once */
  }
</style>
</head>
<body>
  <div class="card">I fade + slide in on load</div>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-6">
          <div className="day3-fade-card w-56 rounded-lg bg-[#90caf9] p-5 text-sm font-semibold text-[#0d47a1]">
            I fade + slide in on load
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Reload this page to watch it replay — with no{" "}
          <code>infinite</code>, it plays exactly once.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) Loading spinner
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Loading spinner</title>
<style>
  body { font-family: sans-serif; padding: 40px; }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #cfd8dc;
    border-top-color: #2980b9; /* one side a different color = shows the spin */
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
</style>
</head>
<body>
  <div class="spinner"></div>
</body>
</html>`}
        />
        <div className="flex items-center rounded-md border border-black/10 bg-[#f7f9fb] p-6">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#cfd8dc] border-t-[#2980b9]" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          4) Progress bar
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Progress bar</title>
<style>
  body { font-family: sans-serif; padding: 40px; }

  @keyframes fill {
    from { width: 0%; }
    to   { width: 80%; }
  }

  .track {
    width: 260px;
    height: 16px;
    background: #eee;
    border-radius: 8px;
    overflow: hidden;
  }
  .bar {
    height: 100%;
    background: #2980b9;
    border-radius: 8px;
    animation: fill 2s ease-out forwards; /* forwards = stay at 80% instead of resetting */
  }
</style>
</head>
<body>
  <div class="track"><div class="bar"></div></div>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-6">
          <div className="h-4 w-64 overflow-hidden rounded-full bg-[#eee]">
            <div className="day3-progress-bar h-full rounded-full bg-[#2980b9]" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Reload the page to watch it fill from 0% to 80% again.{" "}
          <code>forwards</code> is what keeps it at 80% instead of snapping
          back to 0% when the animation ends.
        </p>
      </section>
    </div>
  );
}
