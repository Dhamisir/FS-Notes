import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Create & Alter Tables",
  description:
    "Learn how to create tables with CREATE TABLE and modify existing ones with ALTER TABLE, including adding, renaming, modifying, and dropping columns.",
  path: "/sql/day-1/create-alter-tables",
});

export default function CreateAlterTables() {
  return (
    <SqlLesson backHref="/sql/day-1" title="🏗️ Part 4: Create & Alter Tables">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          <b>Create tables</b> using <code>CREATE TABLE</code>, and modify them
          later using <code>ALTER TABLE</code>.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">CREATE TABLE</h2>
        <CodeBlock
          language="sql"
          code={`CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 18),
  email VARCHAR(100) UNIQUE,
  city VARCHAR(30),
  status VARCHAR(20) DEFAULT 'active'
);`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">ALTER TABLE</h2>
        <Callout variant="sqlPractice" className="mt-3">
          <div className="text-sm text-[#2c3e50]">
            Common operations: add column, modify column, drop column, rename
            column.
          </div>
        </Callout>
        <CodeBlock
          language="sql"
          code={`-- Add a column
ALTER TABLE students ADD COLUMN phone VARCHAR(20);

-- Modify a column type/size
ALTER TABLE students MODIFY COLUMN name VARCHAR(80);

-- Rename a column (MySQL 8+)
ALTER TABLE students RENAME COLUMN phone TO mobile;

-- Drop a column
ALTER TABLE students DROP COLUMN mobile;`}
        />
      </section>
    </SqlLesson>
  );
}

