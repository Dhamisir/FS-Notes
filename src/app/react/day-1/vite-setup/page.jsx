import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vite Setup",
  description:
    "Walks through scaffolding a React project with Vite's CLI and explains the roles of main.jsx, App.jsx, and the components folder in a typical project structure.",
  path: "/react/day-1/vite-setup",
});

export default function ViteSetup() {
  return (
    <ReactLesson backHref="/react/day-1" title="6️⃣ Vite Setup & Folder Structure">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          Vite is a fast build tool for modern React development.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Create a Vite app</h2>
        <CodeBlock
          language="bash"
          code={`npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Common structure</h2>
        <Callout variant="reactPractice">
          <ul className="list-disc pl-6 text-sm text-[#2c3e50]">
            <li>
              <code>src/main.jsx</code> mounts React to the DOM
            </li>
            <li>
              <code>src/App.jsx</code> is the root component
            </li>
            <li>
              <code>src/components/</code> reusable UI components
            </li>
          </ul>
        </Callout>
      </section>
    </ReactLesson>
  );
}

