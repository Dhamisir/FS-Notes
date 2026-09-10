import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Common CSS Properties",
  description:
    "Reference notes on everyday CSS properties for typography (color, font-size, text-align, font-family), box and layout basics (background, width/height, border, border-radius), and spacing (margin, padding).",
  path: "/css/day-1/common-properties",
});

export default function CommonProperties() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-1"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 1
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Common CSS Properties
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Here are the most basic properties you&apos;ll use in every
          project. Each code block below is a{" "}
          <b>complete, standalone HTML file</b> — copy it into a{" "}
          <code>.html</code> file, open it, and it&apos;ll look exactly like
          the preview under it.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) Text & Typography
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Text & Typography</title>
<style>
  body { padding: 40px; }
  .color-demo { color: red; }
  .size-demo { font-size: 2rem; }
  .align-demo { text-align: center; }
  .family-demo { font-family: Arial; }
</style>
</head>
<body>
  <p class="color-demo">color: red;</p>
  <p class="size-demo">font-size: 2rem;</p>
  <p class="align-demo">text-align: center;</p>
  <p class="family-demo">font-family: Arial;</p>
</body>
</html>`}
        />
        <div className="flex flex-col gap-2 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <p className="text-red-600">color: red;</p>
          <p className="text-3xl">font-size: 2rem;</p>
          <p className="text-center">text-align: center;</p>
          <p style={{ fontFamily: "Arial" }}>font-family: Arial;</p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Box & Layout (Basics)
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Box & Layout basics</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .box {
    width: 220px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: blue;
    color: white;
    margin-bottom: 16px;
  }
  .bordered {
    border: 1px solid red;
    background: white;
    color: #333;
  }
  .rounded {
    border-radius: 8px;
  }
</style>
</head>
<body>
  <div class="box">background: blue; width/height set</div>
  <div class="box bordered">border: 1px solid red;</div>
  <div class="box bordered rounded">border-radius: 8px;</div>
</body>
</html>`}
        />
        <div className="flex flex-col gap-3 rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="flex h-[60px] w-[220px] items-center justify-center bg-blue-600 text-center text-sm text-white">
            background: blue; width/height set
          </div>
          <div className="flex h-[60px] w-[220px] items-center justify-center border border-red-500 bg-white text-center text-sm text-[#333]">
            border: 1px solid red;
          </div>
          <div className="flex h-[60px] w-[220px] items-center justify-center rounded-lg border border-red-500 bg-white text-center text-sm text-[#333]">
            border-radius: 8px;
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) Spacing — margin vs padding
        </h2>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>margin vs padding</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  .wrapper {
    background: #fdf3d8; /* lets you see the margin gap around the box */
  }
  .box {
    margin: 20px;  /* space OUTSIDE the border */
    padding: 20px; /* space INSIDE the border, around the content */
    background: #90caf9;
    border: 2px solid #2980b9;
  }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="box">
      content (padding pushes this in, margin pushes the border out)
    </div>
  </div>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <div className="bg-[#fdf3d8] p-0">
            <div className="m-5 border-2 border-[#2980b9] bg-[#90caf9] p-5 text-sm text-[#0d47a1]">
              content (padding pushes this in, margin pushes the border out)
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          The yellow area is the <code>margin</code> gap (outside the blue
          border). The space between the blue border and the text is the{" "}
          <code>padding</code>.
        </p>
      </section>
    </div>
  );
}
