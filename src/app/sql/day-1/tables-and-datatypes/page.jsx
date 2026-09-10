import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tables & Data Types",
  description:
    "Covers table terminology (rows, columns, primary keys) and the common MySQL data types such as INT, VARCHAR, TEXT, DATE, DATETIME, DECIMAL, and BOOLEAN.",
  path: "/sql/day-1/tables-and-datatypes",
});

export default function TablesAndDatatypes() {
  return (
    <SqlLesson backHref="/sql/day-1" title="📋 Part 3: Tables & Data Types">
      <p className="text-muted-foreground">
        In relational databases, data is stored in <b>tables</b>. A table has
        <b> rows</b> (records) and <b>columns</b> (fields).
      </p>

      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          <b>Table terminology</b>
          <ul className="mt-2 list-disc pl-6">
            <li>
              <b>Row</b> = one record (one student)
            </li>
            <li>
              <b>Column</b> = one field (name, age)
            </li>
            <li>
              <b>Primary key</b> = unique identifier per row
            </li>
          </ul>
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">
          Common MySQL data types
        </h2>
        <Callout variant="sqlPractice" className="mt-3">
          <ul className="list-disc pl-6 text-sm text-[#2c3e50]">
            <li>
              <code>INT</code> — whole numbers
            </li>
            <li>
              <code>VARCHAR(n)</code> — text up to n characters
            </li>
            <li>
              <code>TEXT</code> — long text
            </li>
            <li>
              <code>DATE</code> — date (YYYY-MM-DD)
            </li>
            <li>
              <code>DATETIME</code> — date + time
            </li>
            <li>
              <code>DECIMAL(p,s)</code> — exact numbers (money)
            </li>
            <li>
              <code>BOOLEAN</code> — true/false (stored as 0/1)
            </li>
          </ul>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">
          Example table structure
        </h2>
        <CodeBlock
          language="sql"
          code={`CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT,
  email VARCHAR(100),
  city VARCHAR(30)
);`}
        />
      </section>
    </SqlLesson>
  );
}

