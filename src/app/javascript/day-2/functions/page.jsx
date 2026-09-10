import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Functions",
  description:
    "Covers defining JavaScript functions, passing parameters, and returning values, with practice writing square, isAdult, and Celsius-to-Fahrenheit functions.",
  path: "/javascript/day-2/functions",
});

export default function Functions() {
  return (
    <LessonContainer
      backHref="/javascript/day-2"
      backLabel="Back to Menu"
      title="🛠 Functions (Reusable Blocks of Code)"
    >
      <p className="text-muted-foreground">
        A <strong>Function</strong> is a block of code designed to perform a
        particular task. You can call it whenever you need it.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">1. Basic Function</h2>
        <CodeBlock
          language="javascript"
          code={`function sayHello() {
  console.log("Hello there!");
}

sayHello(); // This runs the function`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Functions with Parameters
        </h2>
        <p className="mt-2 text-muted-foreground">
          Parameters act like slots where you can pass data into a function.
        </p>
        <CodeBlock
          language="javascript"
          code={`function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Rahul"); // Hello, Rahul!
greetUser("Simran"); // Hello, Simran!`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Return Statement
        </h2>
        <p className="mt-2 text-muted-foreground">
          Functions can <b>return</b> a value back to where they were called.
        </p>
        <CodeBlock
          language="javascript"
          code={`function add(a, b) {
  return a + b;
}

let result = add(10, 5); // result will be 15
console.log(result);`}
        />
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Activity
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Write a function <code>square(n)</code> that returns the square of a
            number.
          </li>
          <li>
            Write a function <code>isAdult(age)</code> that returns{" "}
            <code>true</code> if age is 18 or above, and <code>false</code>{" "}
            otherwise.
          </li>
          <li>
            Create a function that takes <code>celsius</code> and converts it to{" "}
            <code>fahrenheit</code>.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

