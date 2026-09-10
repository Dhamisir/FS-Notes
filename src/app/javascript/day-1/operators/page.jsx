import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Operators",
  description:
    "Reference tables and examples for JavaScript arithmetic, comparison, and logical operators, including the difference between == and === equality checks.",
  path: "/javascript/day-1/operators",
});

export default function Operators() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="➕ Operators in JS"
    >
      <p className="text-muted-foreground">
        Operators perform operations on values (operands) and produce a result.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. Arithmetic Operators
        </h2>
        <div className="mt-3 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left">Operator</th>
                <th className="px-3 py-2 text-left">Meaning</th>
                <th className="px-3 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["+", "Addition", "10 + 5 = 15"],
                ["-", "Subtraction", "10 - 5 = 5"],
                ["*", "Multiplication", "10 * 2 = 20"],
                ["/", "Division", "10 / 2 = 5"],
                ["%", "Modulus (Remainder)", "10 % 3 = 1"],
              ].map((r) => (
                <tr key={r[0]} className="border-t">
                  {r.map((c, i) => (
                    <td key={i} className="px-3 py-2">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Comparison Operators
        </h2>
        <div className="mt-3 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left">Operator</th>
                <th className="px-3 py-2 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["==", "Equal to"],
                ["===", "Strict Equal (checks value + type)"],
                ["!=", "Not Equal to"],
                [">, <, >=, <=", "Greater/Less than"],
              ].map((r) => (
                <tr key={r[0]} className="border-t">
                  <td className="px-3 py-2">{r[0]}</td>
                  <td className="px-3 py-2">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Logical Operators
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <code>&amp;&amp;</code> (AND): True if both are true.
          </li>
          <li>
            <code>||</code> (OR): True if any one is true.
          </li>
          <li>
            <code>!</code> (NOT): Reverses the boolean value.
          </li>
        </ul>
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Assignment
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Calculate the area of a circle using{" "}
            <code>PI * radius * radius</code>.
          </li>
          <li>
            Compare <code>x = 10</code> and <code>y = "10"</code> using{" "}
            <code>==</code> and <code>===</code>. What’s the difference?
          </li>
          <li>
            Try: <code>console.log(10 &gt; 5 &amp;&amp; 5 &lt; 2);</code>
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

