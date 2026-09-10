import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Arrays",
  description:
    "Covers creating JavaScript arrays, core methods like push, pop, shift, and unshift, and the functional methods map and filter for transforming and filtering lists.",
  path: "/javascript/day-2/arrays",
});

export default function Arrays() {
  return (
    <LessonContainer
      backHref="/javascript/day-2"
      backLabel="Back to Menu"
      title="📚 Arrays (Storing Lists)"
    >
      <p className="text-muted-foreground">
        An <strong>Array</strong> is a special variable which can hold more than
        one value at a time.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. Creating an Array
        </h2>
        <CodeBlock
          language="javascript"
          code={`let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple (Index starts at 0)`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Array Methods (Power Tools)
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <code>push()</code>: adds item to the <b>end</b>
          </li>
          <li>
            <code>pop()</code>: removes item from the <b>end</b>
          </li>
          <li>
            <code>unshift()</code>: adds item to the <b>beginning</b>
          </li>
          <li>
            <code>shift()</code>: removes item from the <b>beginning</b>
          </li>
        </ul>
        <Callout variant="jsInfo" className="mt-4">
          <CodeBlock
            language="javascript"
            code={`let colors = ["Red", "Blue"];
colors.push("Green"); // ["Red", "Blue", "Green"]
colors.pop(); // ["Red", "Blue"]`}
          />
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Advanced Methods (Functional)
        </h2>
        <p className="mt-2 text-muted-foreground">
          These methods help you transform and filter data easily.
        </p>
        <CodeBlock
          language="javascript"
          code={`let nums = [1, 2, 3, 4, 5];

// Map: Transform every item
let doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]

// Filter: Keep only items that match a condition
let evens = nums.filter(n => n % 2 === 0); // [2, 4]`}
        />
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Activity
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Create an array <code>myFriends</code> with 3 names.
          </li>
          <li>
            Add a new friend using <code>push()</code>.
          </li>
          <li>
            Use <code>map()</code> to convert an array of numbers into their
            squares.
          </li>
          <li>
            Use <code>filter()</code> to find all numbers greater than 50 from{" "}
            <code>[10, 60, 30, 80]</code>.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

