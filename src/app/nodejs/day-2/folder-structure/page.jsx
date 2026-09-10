import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Folder Structure",
  description:
    "Shows how to organize an Express app into routes and controllers instead of one index.js file, with an activity to build product.routes.js and product.controller.js and test a /product/all endpoint.",
  path: "/nodejs/day-2/folder-structure",
});

export default function FolderStructure() {
  return (
    <NodeLesson
      backHref="/nodejs/day-2"
      title="📂 Project Structure (Routes & Controllers)"
    >
      <p className="text-muted-foreground">
        In real-world apps, we don’t write all code in one <code>index.js</code>.
        We separate it to keep things clean.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. The professional tree
        </h2>
        <Callout variant="nodeExample">
          <CodeBlock
            language="plaintext"
            code={`├── index.js (Entry Point)
├── routes/
│   └── user.routes.js (Entry to paths)
└── controllers/
    └── user.controller.js (Logic)`}
          />
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Controllers (the logic)
        </h2>
        <CodeBlock
          language="js"
          code={`// controllers/user.controller.js
exports.getUser = (req, res) => {
  res.send({ name: "Rahul", age: 25 });
};`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Routes (the paths)
        </h2>
        <CodeBlock
          language="js"
          code={`// routes/user.routes.js
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");

router.get("/profile", userCtrl.getUser);

module.exports = router;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          4. Integrating in main index.js
        </h2>
        <CodeBlock
          language="js"
          code={`const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes); // all user routes start with /user`}
        />
      </section>

      <Callout variant="nodeAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">🎯 Activity</h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Create <code>product.routes.js</code> and <code>product.controller.js</code>.
          </li>
          <li>
            Setup a <code>/all</code> route that returns a list of items.
          </li>
          <li>
            Test it at <code>localhost:PORT/product/all</code>.
          </li>
        </ol>
      </Callout>
    </NodeLesson>
  );
}

