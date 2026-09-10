import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { DarkModeToggleDemo } from "./DarkModeToggleDemo";

export const metadata = { title: "CSS Variables & Dark Mode" };

export default function CssVariablesDarkMode() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-3"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 3
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Variables & Dark Mode
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Custom properties (<code>--name</code>) let you name a value once
          and reuse it everywhere with <code>var(--name)</code>. Change the
          variable, and every place that uses it updates — that&apos;s the
          whole trick behind theming and dark mode.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        Every code block below is a <b>complete, standalone HTML file</b> —
        copy it into a <code>.html</code> file and open it.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Custom properties basics
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>CSS custom properties</title>
<style>
  :root {
    --primary-color: #2980b9;
    --spacing: 16px;
  }
  body { font-family: sans-serif; padding: 40px; }
  .btn {
    background: var(--primary-color);
    color: white;
    padding: var(--spacing);
    border: none;
    border-radius: 6px;
    font-weight: bold;
  }
  .card {
    border: 2px solid var(--primary-color);
    padding: var(--spacing);
    border-radius: 8px;
    margin-top: var(--spacing);
  }
</style>
</head>
<body>
  <button class="btn">Uses --primary-color</button>
  <div class="card">Change --primary-color once, both update</div>
</body>
</html>`}
        />
        <div className="flex flex-col items-start gap-4 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <button className="rounded-md bg-[#2980b9] px-4 py-2 font-bold text-white">
            Uses --primary-color
          </button>
          <div className="rounded-lg border-2 border-[#2980b9] p-4 text-sm text-[#2c3e50]">
            Change --primary-color once, both update
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Automatic dark mode with prefers-color-scheme
        </h2>
        <p className="text-sm text-muted-foreground">
          This follows the visitor&apos;s OS/browser theme setting — no
          button needed.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>prefers-color-scheme</title>
<style>
  :root {
    --bg: #ffffff;
    --text: #1a1a1a;
    --card-bg: #f2f2f2;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #121212;
      --text: #f2f2f2;
      --card-bg: #1e1e1e;
    }
  }
  body {
    font-family: sans-serif;
    padding: 40px;
    background: var(--bg);
    color: var(--text);
  }
  .card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
  }
</style>
</head>
<body>
  <div class="card">
    This automatically switches based on your OS/browser theme setting —
    try toggling dark mode in your system settings.
  </div>
</body>
</html>`}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-muted-foreground">
              light (prefers-color-scheme: light)
            </div>
            <div className="rounded-md bg-white p-4 text-sm text-[#1a1a1a] shadow-sm">
              <div className="rounded-lg bg-[#f2f2f2] p-4">
                This card follows your system theme
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-muted-foreground">
              dark (prefers-color-scheme: dark)
            </div>
            <div className="rounded-md bg-[#121212] p-4 text-sm text-[#f2f2f2]">
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                This card follows your system theme
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) Manual toggle (a real switch, like a dashboard settings button)
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Dark mode toggle</title>
<style>
  :root {
    --bg: #ffffff;
    --text: #1a1a1a;
    --card-bg: #f2f2f2;
  }
  body.dark {
    --bg: #121212;
    --text: #f2f2f2;
    --card-bg: #1e1e1e;
  }
  body {
    font-family: sans-serif;
    padding: 40px;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s ease, color 0.3s ease;
  }
  .card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    margin-top: 16px;
  }
  button {
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
</style>
</head>
<body>
  <button onclick="document.body.classList.toggle('dark')">
    Toggle dark mode
  </button>
  <div class="card">This card's colors come from CSS variables</div>

  <script>
    // the whole trick: toggling one class flips every var() at once
  </script>
</body>
</html>`}
        />

        <DarkModeToggleDemo />
        <p className="text-xs text-muted-foreground">
          This preview is a real, working toggle (built with a bit of React
          instead of the one-line vanilla JS in the code block, but the CSS
          variable idea is identical) — click the button.
        </p>
      </section>
    </div>
  );
}
