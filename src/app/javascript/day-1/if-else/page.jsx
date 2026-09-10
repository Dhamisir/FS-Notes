import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "If / Else",
  description:
    "Covers basic if/else and else-if branching in JavaScript, illustrated with a time-of-day greeting example and a numeric grade calculator.",
  path: "/javascript/day-1/if-else",
});

export default function IfElse() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="🤔 Conditionals (If / Else)"
    >
      <p className="text-muted-foreground">
        Conditionals allow our code to make decisions. “If this happens, do
        that; otherwise, do this.”
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Basic If Statement
        </h2>
        <CodeBlock
          language="javascript"
          code={`let hour = 14;

if (hour < 12) {
  console.log("Good Morning!");
} else {
  console.log("Good afternoon!");
}`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Else If (Multiple Choices)
        </h2>
        <CodeBlock
          language="javascript"
          code={`let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}`}
        />
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Assignment
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Write a program that checks if a number is <b>Even</b> or <b>Odd</b>
            . (Hint: use <code>% 2</code>)
          </li>
          <li>
            Write a program that takes an <code>age</code> variable and prints
            if the person is a <b>Minor</b> (under 18) or <b>Adult</b>.
          </li>
          <li>
            Extra: Check if a number is <b>Positive</b>, <b>Negative</b>, or{" "}
            <b>Zero</b>.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

