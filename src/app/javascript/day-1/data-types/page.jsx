import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Data Types",
  description:
    "Overview of JavaScript's core data types - string, number, boolean, undefined, and null - plus how to check a variable's type with the typeof operator.",
  path: "/javascript/day-1/data-types",
});

export default function DataTypes() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="📂 Data Types in JS"
    >
      <p className="text-muted-foreground">
        JavaScript variables can hold different types of data. JavaScript is{" "}
        <b>dynamic</b>, meaning you don’t need to specify the type.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Common Data Types
        </h2>
        <dl className="mt-3 space-y-3 text-muted-foreground">
          <div>
            <dt className="font-semibold text-[#2980b9]">1. String (Text)</dt>
            <dd>
              Always wrapped in quotes: <code>"Hello"</code> or{" "}
              <code>'World'</code>.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#2980b9]">2. Number (Digits)</dt>
            <dd>
              Integers or decimals: <code>25</code> or <code>99.99</code>.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#2980b9]">
              3. Boolean (True/False)
            </dt>
            <dd>
              Logical values: <code>true</code> or <code>false</code>.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#2980b9]">4. Undefined</dt>
            <dd>When a variable is declared but not assigned a value.</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#2980b9]">5. Null</dt>
            <dd>Represents “nothing” or “empty”.</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Check the Type
        </h2>
        <p className="mt-2 text-muted-foreground">
          Use the <b>typeof</b> operator to find out what data is inside a
          variable.
        </p>
        <CodeBlock
          language="javascript"
          code={`let age = 20;
console.log(typeof age); // "number"

let myName = "Rahul";
console.log(typeof myName); // "string"`}
        />
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Assignment
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Declare a variable <code>isStudent</code> and assign it a boolean
            value.
          </li>
          <li>
            Declare a variable <code>price</code> and assign it a decimal
            number.
          </li>
          <li>
            Write <code>console.log(typeof price);</code> and check the result
            in your browser console.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

