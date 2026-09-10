import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "State (useState)",
  description:
    "Introduces the useState hook through a counter example, explains why state must be updated with its setter function rather than mutated directly, and compares props with state.",
  path: "/react/day-3/state",
});

export default function State() {
  return (
    <ReactLesson backHref="/react/day-3" title="1️⃣ State: Component Memory">
      <Callout variant="reactInfo" className="border-l-[#03a9f4] bg-[#e1f5fe]">
        <h3 className="text-base font-semibold text-[#2c3e50]">What is state?</h3>
        <p className="mt-2 text-sm text-[#2c3e50]">
          State is data that lives inside a component and can change over time.
          When state changes, React automatically updates the UI.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          🧠 useState syntax
        </h2>
        <CodeBlock
          language="jsx"
          code={`const [stateValue, updateFunction] = useState(initialValue);`}
        />
        <Callout variant="reactMini" className="mt-3">
          <div className="text-sm text-[#2c3e50]">
            <p>
              <code>useState</code> takes an <strong>initial value</strong> and
              returns an array containing two values:
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-6">
              <li>
                <strong>Current state value</strong> — the data used in the UI
              </li>
              <li>
                <strong>Update function</strong> — the function that changes the state
              </li>
            </ol>
          </div>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          🧩 The counter example
        </h2>
        <p className="mt-2 text-muted-foreground">
          We use the <code>useState</code> hook to create state variables.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}`}
        />
      </section>

      <section>
        <h3 className="text-base font-semibold text-[#2c3e50]">
          🔍 Breaking it down
        </h3>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <code>count</code>: current value (starts at 0)
          </li>
          <li>
            <code>setCount</code>: function used to update value
          </li>
          <li>
            <code>useState(0)</code>: initial value is 0
          </li>
          <li>
            <code>handleCount</code>: event handler that calls the update function
          </li>
          <li>
            <code>onClick={`{handleCount}`}</code>: passes the function to the button
          </li>
        </ul>
        <Callout variant="reactInfo" className="mt-3">
          <p className="text-sm text-[#2c3e50]">
            Pass <code>handleCount</code> to <code>onClick</code>. Writing
            <code> handleCount()</code> would call it immediately while rendering.
          </p>
        </Callout>
      </section>

      <Callout
        variant="problem"
        className="border-l-[#f44336] bg-[#ffebee]"
      >
        <h3 className="text-base font-semibold text-[#2c3e50]">
          ❌ Never update state directly
        </h3>
        <p className="mt-2 text-sm text-[#2c3e50]">
          Don’t do: <code>count = count + 1;</code>
        </p>
        <p className="mt-1 text-sm text-[#2c3e50]">
          Always do: <code>setCount(count + 1);</code>
        </p>
        <p className="mt-2 text-sm text-[#2c3e50]">
          React only knows it should re-render when you call the setter function.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">🔍 Props vs State</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Props 📦</th>
                <th className="px-3 py-2 text-left">State 🧠</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Source", "Passed from parent", "Created inside component"],
                ["Mutable?", "Read-only", "Can be updated"],
                ["Purpose", "Configure component", "Store changing data"],
              ].map((row) => (
                <tr key={row[0]} className="border-t">
                  {row.map((cell) => (
                    <td key={cell} className="px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </ReactLesson>
  );
}
