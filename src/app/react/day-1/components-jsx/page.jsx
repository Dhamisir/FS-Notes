import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Components & JSX",
  description:
    "Introduces React components as reusable UI building blocks, covers functional component syntax, and explains how JSX lets you write HTML-like markup inside JavaScript.",
  path: "/react/day-1/components-jsx",
});

export default function ComponentsJsx() {
  return (
    <ReactLesson backHref="/react/day-1" title="7️⃣ Components & JSX">
      <Callout variant="reactMini">
        <div className="text-sm text-[#195568]">
          <div className="font-semibold">🧩 What is a component?</div>
          <div className="mt-1 text-[#2c3e50]">
            A component is a <strong>reusable piece of UI</strong> — like LEGO
            blocks that build a full app.
          </div>
          <Callout variant="reactPractice" className="mt-3">
            <b>Examples:</b> Navbar, Button, Card, ProductList, Footer
          </Callout>
        </div>
      </Callout>

      <section>
        <Callout variant="reactMini">
          <div className="text-sm text-[#195568]">
            <div className="font-semibold">🔧 Functional component</div>
            <p className="mt-2 text-[#2c3e50]">
              A JavaScript function that returns UI.
            </p>
            <div className="mt-3">
              <CodeBlock
                language="jsx"
                code={`function Welcome() {
  return <h1>Hello Students!</h1>;
}

export default Welcome;`}
              />
            </div>
            <ul className="mt-3 list-disc pl-6 text-[#2c3e50]">
              <li>Simple and modern</li>
              <li>Uses hooks for state</li>
              <li>Most common in React today</li>
            </ul>
          </div>
        </Callout>
      </section>

      <section>
        <Callout variant="reactMini">
          <div className="text-sm text-[#195568]">
            <div className="font-semibold">✨ What is JSX?</div>
            <p className="mt-2 text-[#2c3e50]">
              JSX = JavaScript + XML (HTML-like syntax inside JS).
            </p>
            <Callout variant="reactExample" className="mt-3">
              <CodeBlock
                language="jsx"
                code={`const name = "Student";

function Greet() {
  return <h1>Hello {name}</h1>; // HTML-like syntax inside JS
}`}
              />
            </Callout>
            <ul className="mt-3 list-disc pl-6 text-[#2c3e50]">
              <li>
                <strong>Readable:</strong> looks like HTML
              </li>
              <li>
                <strong>Dynamic:</strong> use {"{ }"} to embed JS inside UI
              </li>
            </ul>
          </div>
        </Callout>
      </section>
    </ReactLesson>
  );
}

