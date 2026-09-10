import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Database Operations",
  description:
    "Learn the core database-level commands CREATE DATABASE, USE, and DROP DATABASE, and the typical workflow for setting up a database before creating tables.",
  path: "/sql/day-1/database-operations",
});

export default function DatabaseOperations() {
  return (
    <SqlLesson backHref="/sql/day-1" title="🛠️ Part 2: Database Operations">
      <p className="text-muted-foreground">
        Before creating tables, we need to create and select a database to work
        in.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">
          1. CREATE DATABASE
        </h2>
        <p className="mt-2 text-muted-foreground">
          Creates a new empty database container.
        </p>
        <CodeBlock language="sql" code={`CREATE DATABASE school_db;`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">2. USE DATABASE</h2>
        <p className="mt-2 text-muted-foreground">
          Selects which database you want to work with. You must do this before
          creating tables.
        </p>
        <CodeBlock language="sql" code={`USE school_db;`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">3. DROP DATABASE</h2>
        <p className="mt-2 text-muted-foreground">
          Deletes the entire database and everything inside it.
        </p>
        <Callout variant="problem" className="bg-[#ffebee]">
          ⚠️ <strong>Danger:</strong> This deletes all data permanently and
          cannot be undone.
        </Callout>
        <CodeBlock
          language="sql"
          code={`DROP DATABASE school_db;

-- Safe way to drop
DROP DATABASE IF EXISTS school_db;`}
        />
      </section>

      <Callout variant="sqlHighlight">
        <div className="text-sm text-[#2c3e50]">
          <strong>Typical Workflow:</strong>
          <ol className="mt-2 list-decimal pl-6">
            <li>Create database</li>
            <li>Use database</li>
            <li>Create tables</li>
          </ol>
        </div>
      </Callout>
    </SqlLesson>
  );
}

