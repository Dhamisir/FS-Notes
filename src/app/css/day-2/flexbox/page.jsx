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
          them one by one.
        </p>
      </Callout>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 2: Add display: flex
        </h2>
        <p className="text-muted-foreground">
          Add this to the <b>parent</b>. All children become flex items.
        </p>
        <CodeBlock language="css" code={`.container {\n  display: flex;\n}`} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 3: Main axis — justify-content
        </h2>
        <CodeBlock
          language="css"
          code={`justify-content: flex-start; /* default */
justify-content: center; /* center */
justify-content: flex-end; /* right */
justify-content: space-between; /* edges */
justify-content: space-around; /* space around */`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 4: Cross axis — align-items
        </h2>
        <CodeBlock
          language="css"
          code={`align-items: flex-start; /* top */
align-items: center; /* middle */
align-items: flex-end; /* bottom */
align-items: stretch; /* default */`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 5: flex-direction
        </h2>
        <CodeBlock
          language="css"
          code={`flex-direction: row; /* default */
flex-direction: column;`}
        />
        <Callout variant="problem">
          <p className="text-sm text-[#2c3e50]">
            <b>CRITICAL</b>: When you switch to <code>column</code>, the axes
            swap. <code>justify-content</code> now controls top/bottom, and{" "}
            <code>align-items</code> controls left/right.
          </p>
        </Callout>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-xl font-semibold text-[#2980b9]">
          Step 6: flex-wrap + gap
        </h2>
        <CodeBlock
          language="css"
          code={`flex-wrap: wrap; /* items can go to next line */
gap: 15px; /* spacing between wrapped items */`}
        />
      </section>

      <hr className="my-2" />

      <h2 className="text-2xl font-semibold tracking-tight text-[#2c3e50]">
        Live proofs
      </h2>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Proof 1 — flex-grow</h3>
        <CodeBlock
          language="css"
          code={`.container {
  display: flex;
  width: 900px;
}

.box {
  width: 200px;
  /* flex-grow: 0 by default */
}`}
        />
        <CodeBlock
          language="css"
          code={`.box {
  width: 200px;
  flex-grow: 1; /* remaining space divided equally */
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Proof 2 — flex-shrink</h3>
        <p className="text-muted-foreground">
          Default is <code>flex-shrink: 1</code>. To prevent shrinking:
        </p>
        <CodeBlock
          language="css"
          code={`.box {
  width: 200px;
  flex-shrink: 0; /* overflow instead of shrink */
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Proof 3 — flex-basis</h3>
        <CodeBlock
          language="css"
          code={`.box {
  flex-basis: 200px; /* starting size */
}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Pro trick: proportional grow</h3>
        <CodeBlock
          language="css"
          code={`.box { flex: 1; }
.box:nth-child(2) { flex: 2; }`}
        />
      </section>

      <hr className="my-2" />

      <h2 className="text-2xl font-semibold tracking-tight text-[#2c3e50]">
        Real world: responsive layout example
      </h2>

      <CodeBlock
        language="css"
        code={`.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.box {
  flex: 0 0 calc(33.33% - 20px); /* desktop: 3 per row */
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
}`}
      />
    </div>
  );
}

