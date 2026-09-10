import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Loops",
  description:
    "Explains for loops and while loops for repeating code in JavaScript, with counting and multiplication-table examples plus practice printing sequences of numbers.",
  path: "/javascript/day-1/loops",
});

export default function Loops() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="🔄 Loops (Doing things repeatedly)"
    >
      <p className="text-muted-foreground">
        Loops are used to execute a block of code multiple times without writing
        it over and over.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. For Loop (Most Popular)
        </h2>
        <p className="mt-2 text-muted-foreground">
          Use this when you know exactly how many times you want to repeat.
        </p>
        <CodeBlock
          language="javascript"
          code={`// Print 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Value is: " + i);
}`}
        />
        <p className="text-sm text-muted-foreground">
          <b>Structure:</b> (Start; Condition; Step)
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">2. While Loop</h2>
        <p className="mt-2 text-muted-foreground">
          Repeats <b>while</b> a condition is true.
        </p>
        <CodeBlock
          language="javascript"
          code={`let count = 1;
while (count <= 5) {
  console.log("Count is: " + count);
  count++; // Don't forget this, or it will loop forever!
}`}
        />
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Assignment
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Write a loop that prints numbers from <b>10 down to 1</b>.
          </li>
          <li>
            Write a loop that prints the <b>Multiplication Table of 5</b>.
          </li>
          <li>
            Extra: Print only the <b>Even</b> numbers between 1 and 20.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

