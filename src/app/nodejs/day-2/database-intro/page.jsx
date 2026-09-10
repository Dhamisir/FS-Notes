import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Database Intro",
  description:
    "Compares SQL and NoSQL databases, shows how to connect to MySQL with a promise-based connection pool, and how to run queries inside an Express controller, with an activity to create a test_db users table.",
  path: "/nodejs/day-2/database-intro",
});

export default function DatabaseIntro() {
  return (
    <NodeLesson backHref="/nodejs/day-2" title="🗄️ Database: SQL vs NoSQL">
      <p className="text-muted-foreground">
        A database is where your app “remembers” things. Variables reset when
        the server restarts.
      </p>

      <Callout variant="nodeExample" className="border-l-[#3498db] bg-[#e8f4fd]">
        🚀 For this course, we focus on <b>SQL databases (relational)</b>.
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. SQL vs NoSQL
        </h2>
        <div className="mt-3 overflow-x-auto rounded-lg border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">SQL (Relational)</th>
                <th className="px-3 py-2 text-left">NoSQL (Non-Relational)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Structure", "Table-based", "Document-based (JSON/Key-Value)"],
                ["Schema", "Strict", "Flexible"],
                ["Relationships", "Excellent (joins)", "Hard (embedding/linking)"],
                ["Examples", "MySQL, PostgreSQL, SQLite", "MongoDB, Firebase, Redis"],
              ].map((r) => (
                <tr key={r[0]} className="border-t">
                  {r.map((c) => (
                    <td key={c} className="px-3 py-2">
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
          2. Connecting to SQL (MySQL example)
        </h2>
        <CodeBlock
          language="js"
          code={`const mysql = require("mysql2");

// 1. Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_app",
  connectionLimit: 10,
});

// 2. Promise-based version (for async/await)
const db = pool.promise();

console.log("MySQL Connection Pool Created with Promises");`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Running queries in controllers
        </h2>
        <CodeBlock
          language="js"
          code={`// user.controller.js
exports.getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [results] = await db.query(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};`}
        />
      </section>

      <Callout variant="nodeAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">🎯 Activity</h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>Install MySQL Workbench or XAMPP.</li>
          <li>
            Create a database named <code>test_db</code>.
          </li>
          <li>
            Write SQL to create a <code>users</code> table with <code>id</code>,{" "}
            <code>name</code>, <code>email</code>.
          </li>
        </ol>
      </Callout>
    </NodeLesson>
  );
}

