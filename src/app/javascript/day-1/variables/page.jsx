import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Variables (var, let, const)",
  description:
    "Compares var, let, and const for declaring JavaScript variables and lays out naming rules and best practices like camelCase and descriptive names.",
  path: "/javascript/day-1/variables",
});

export default function Variables() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="📦 Variables (var, let, const)"
    >
      <p className="text-muted-foreground">
        A <strong>Variable</strong> is a container for storing data values.
        Imagine it’s a box with a label on it.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. Three ways to declare variables
        </h2>

        <Callout variant="jsExample" className="mt-3">
          <div className="text-sm text-[#2c3e50]">
            <strong>
              <code>var</code> (The OLD Way):
            </strong>
            <p className="mt-1 text-muted-foreground">
              Not recommended nowadays because it has scope issues.
            </p>
            <CodeBlock language="javascript" code={`var name = "Rahul";`} />

            <strong className="mt-4 block">
              <code>let</code> (The NEW Standard):
            </strong>
            <p className="mt-1 text-muted-foreground">
              Used for values that <b>change</b>.
            </p>
            <CodeBlock
              language="javascript"
              code={`let score = 10;
score = 11; // OK`}
            />

            <strong className="mt-4 block">
              <code>const</code> (For CONSTANTS):
            </strong>
            <p className="mt-1 text-muted-foreground">
              Used for values that <b>NEVER change</b>.
            </p>
            <CodeBlock
              language="javascript"
              code={`const pi = 3.14;
pi = 3.15; // ERROR!`}
            />
          </div>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Naming Rules (Best Practices)
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            Must start with <b>letter</b>, <b>$</b> or <b>_</b>
          </li>
          <li>
            Cannot start with a <b>number</b>
          </li>
          <li>
            Use <b>camelCase</b> (firstName, myScore)
          </li>
          <li>
            Be <b>descriptive</b> (use <code>let age = 20</code> instead of{" "}
            <code>let a = 20</code>)
          </li>
        </ul>
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Assignment
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Create a variable for your <code>fullName</code>.
          </li>
          <li>
            Create a variable for your <code>currentCity</code>.
          </li>
          <li>
            Try adding two numbers using variables and print them in the
            console.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

