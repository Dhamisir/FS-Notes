import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "React Router Basic Setup",
  description:
    "Shows how to install react-router-dom and define your first routes using BrowserRouter, Routes, and Route.",
  path: "/react/day-2/basic-setup",
});

export default function BasicSetup() {
  return (
    <ReactLesson backHref="/react/day-2" title="2️⃣ Basic Setup & Defining Routes">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          We use <code>react-router-dom</code> to add routing in React apps.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Install</h2>
        <CodeBlock language="bash" code={`npm i react-router-dom`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Define routes</h2>
        <CodeBlock
          language="jsx"
          code={`import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
        />
      </section>
    </ReactLesson>
  );
}

