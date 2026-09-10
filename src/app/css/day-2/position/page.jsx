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
        What is <code>position</code>?
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Position controls: <b>where an element sits on the page</b>.
        </p>
      </Callout>

      <p className="text-muted-foreground">There are 5 main values:</p>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>
          <code>static</code>
        </li>
        <li>
          <code>relative</code>
        </li>
        <li>
          <code>absolute</code>
        </li>
        <li>
          <code>fixed</code>
        </li>
        <li>
          <code>sticky</code>
        </li>
      </ul>

      <hr className="my-2" />

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          1) position: static (default)
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Default normal flow</li>
          <li>
            <code>top/left/right/bottom</code> do not work
          </li>
        </ul>
        <CodeBlock language="css" code={`.box {\n  position: static;\n}`} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          2) position: relative
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Moves from its normal position</li>
          <li>
            <b>Original space stays reserved</b>
          </li>
          <li>Often used as the positioned parent for absolute children</li>
        </ul>
        <CodeBlock
          language="css"
          code={`.box {
  position: relative;
  top: 30px;
  left: 30px;
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          3) position: absolute
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>
            Removed from normal flow (<b>no space reserved</b>)
          </li>
          <li>Relative to nearest positioned parent</li>
          <li>If no positioned parent, it uses the page</li>
        </ul>
        <CodeBlock
          language="css"
          code={`.parent { position: relative; }
.child {
  position: absolute;
  top: 0;
  right: 0;
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          4) position: fixed
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Glued to viewport</li>
          <li>Doesn’t move on scroll</li>
          <li>Chat buttons, sticky help icons</li>
        </ul>
        <CodeBlock
          language="css"
          code={`.box {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          5) position: sticky
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Normal at first</li>
          <li>Sticks when it hits a scroll threshold</li>
          <li>Sticky navbars, table headers</li>
        </ul>
        <CodeBlock language="css" code={`.box {\n  position: sticky;\n  top: 0;\n}`} />
      </section>

      <hr className="my-2" />

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Quick comparison</h2>
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

