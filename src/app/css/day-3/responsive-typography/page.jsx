import Link from "next/link";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "Responsive Typography" };

export default function ResponsiveTypography() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-3"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 3
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        Responsive Typography
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Text that&apos;s the right size on a phone is usually too small on
          a desktop monitor, and vice versa. Two tools fix this:{" "}
          <code>rem</code> units and <code>clamp()</code>.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        Every code block below is a <b>complete, standalone HTML file</b> —
        copy it into a <code>.html</code> file and open it.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) rem vs px
        </h2>
        <p className="text-sm text-muted-foreground">
          <code>px</code> is a fixed size. <code>rem</code> is relative to
          the root (<code>html</code>) font-size — if a visitor increases
          their browser&apos;s default text size for accessibility,{" "}
          <code>rem</code> text grows with it; <code>px</code> text
          doesn&apos;t.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>rem vs px</title>
<style>
  html { font-size: 16px; } /* 1rem = 16px, by default */
  body { font-family: sans-serif; padding: 40px; }
  .px-text { font-size: 24px; }    /* fixed, ignores the visitor's settings */
  .rem-text { font-size: 1.5rem; } /* scales with the visitor's base size */
</style>
</head>
<body>
  <p class="px-text">Sized with px (24px)</p>
  <p class="rem-text">Sized with rem (1.5rem = 24px here)</p>
</body>
</html>`}
        />
        <div className="rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <p style={{ fontSize: 24 }} className="text-[#2c3e50]">
            Sized with px (24px)
          </p>
          <p style={{ fontSize: "1.5rem" }} className="mt-2 text-[#2c3e50]">
            Sized with rem (1.5rem = 24px here)
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          <b>Rule of thumb</b>: use <code>rem</code> for font sizes and
          spacing, reach for <code>px</code> only for things that should
          truly never scale (like a 1px border).
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) Fluid sizing with clamp()
        </h2>
        <p className="text-sm text-muted-foreground">
          <code>clamp(min, preferred, max)</code> picks the preferred value,
          but never lets it go below the min or above the max. No media
          queries needed.
        </p>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>clamp() fluid typography</title>
<style>
  body { font-family: sans-serif; padding: 40px; }
  h1 {
    /* never smaller than 1.5rem, never bigger than 3rem,
       otherwise scales with the viewport width (5vw) */
    font-size: clamp(1.5rem, 5vw, 3rem);
  }
</style>
</head>
<body>
  <h1>Resize your browser — I scale smoothly</h1>
</body>
</html>`}
        />
        <div className="overflow-hidden rounded-md border border-black/10 bg-[#f7f9fb] p-4">
          <h3
            style={{ fontSize: "clamp(1.25rem, 5vw, 2rem)" }}
            className="font-semibold text-[#2c3e50]"
          >
            Resize your browser — I scale smoothly
          </h3>
        </div>
        <p className="text-xs text-muted-foreground">
          This preview is capped smaller (max 2rem) to fit this page&apos;s
          layout — copy the code above and resize a real browser window to
          see the full 1.5rem–3rem range.
        </p>
      </section>

      <Callout variant="solution">
        <h3 className="text-base font-semibold text-[#2c3e50]">
          Quick reference
        </h3>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
          <li>
            <code>rem</code> — relative to root font-size (accessibility +
            consistent scale)
          </li>
          <li>
            <code>vw</code> — relative to viewport width (pure fluid, but can
            get too small/large at extremes)
          </li>
          <li>
            <code>clamp(min, preferred, max)</code> — the best of both: fluid,
            but with safe limits
          </li>
        </ul>
      </Callout>
    </div>
  );
}
