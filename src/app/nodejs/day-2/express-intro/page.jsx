import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Express Intro",
  description:
    "Sets up Express.js from scratch: installing the package, starting a server with app.listen, and building a /user JSON endpoint, plus an activity to add /health and /user routes on port 5000.",
  path: "/nodejs/day-2/express-intro",
});

export default function ExpressIntro() {
  return (
    <NodeLesson backHref="/nodejs/day-2" title="🛠 Express.js Setup & Your First API">
      <p className="text-muted-foreground">
        Express is a fast and minimal framework for Node.js. It simplifies HTTP
        handling and routing.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">1. Installation</h2>
        <CodeBlock language="bash" code={`npm install express`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">2. Your first server</h2>
        <CodeBlock
          language="js"
          code={`const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Backend World!");
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. API endpoint for testing (/user)
        </h2>
        <Callout variant="nodeExample">
          <CodeBlock
            language="js"
            code={`app.get("/user", (req, res) => {
  res.json({
    id: 1,
    name: "John Doe",
    role: "Developer",
  });
});`}
          />
        </Callout>
      </section>

      <Callout variant="nodeAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">🎯 Minute Activity</h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>Install express and create a server on PORT 5000.</li>
          <li>
            Create a <code>/health</code> route that returns <code>"Server is OK"</code>.
          </li>
          <li>
            Create a <code>/user</code> route that returns your name and city.
          </li>
        </ol>
      </Callout>
    </NodeLesson>
  );
}

