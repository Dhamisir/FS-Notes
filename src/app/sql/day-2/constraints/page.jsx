import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Constraints",
  description:
    "Covers common table constraints — PRIMARY KEY, AUTO_INCREMENT, NOT NULL, CHECK, UNIQUE, and DEFAULT — used to enforce valid, clean data in columns.",
  path: "/sql/day-2/constraints",
});

export default function Constraints() {
  return (
    <SqlLesson backHref="/sql/day-2" title="1️⃣ Constraints (Rules on Table Columns)">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          Constraints enforce rules on columns to keep your data clean and valid.
        </div>
      </Callout>

      <section>
        <Callout variant="sqlExample">
          <b>Common constraints</b>
          <div className="mt-2">
            <CodeBlock
              language="sql"
              code={`CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT, -- PRIMARY KEY + AUTO_INCREMENT
  name VARCHAR(50) NOT NULL,       -- NOT NULL
  age INT CHECK (age >= 18),       -- CHECK
  email VARCHAR(100) UNIQUE,       -- UNIQUE
  status VARCHAR(20) DEFAULT 'active' -- DEFAULT
);`}
            />
          </div>
        </Callout>
      </section>

      <Callout variant="sqlPractice">
        <div className="text-sm text-[#2c3e50]">
          <b>Practice:</b> add a <code>fees</code> column to a courses table with{" "}
          <code>CHECK (fees &gt; 0)</code>.
        </div>
      </Callout>
    </SqlLesson>
  );
}
