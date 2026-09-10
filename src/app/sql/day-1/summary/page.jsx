import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 1 Summary & Exercises",
  description:
    "Recaps Day 1's database and table commands, then sets a hands-on exercise to create a practice database, build a students table, bulk insert records, and update or delete a row.",
  path: "/sql/day-1/summary",
});

export default function Summary() {
  return (
    <SqlLesson backHref="/sql/day-1" title="📝 Day 1 Summary & Exercises">
      <Callout variant="sqlIntro">
        <div className="text-sm text-[#2c3e50]">
          You now know: database basics, table structure, core CRUD operations,
          and safe ways to update/delete.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">Quick recap</h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <code>CREATE DATABASE</code>, <code>USE</code>, <code>DROP DATABASE</code>
          </li>
          <li>
            <code>CREATE TABLE</code>, <code>ALTER TABLE</code>
          </li>
          <li>
            <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>TRUNCATE</code>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">Exercises</h2>
        <Callout variant="sqlPractice">
          <ol className="list-decimal pl-6 text-sm text-[#2c3e50]">
            <li>Create a database named <code>practice_db</code>.</li>
            <li>Create a <code>students</code> table with 5 columns.</li>
            <li>Insert 5 records (use one bulk insert).</li>
            <li>Update one record (change city/status).</li>
            <li>Delete one record using <code>WHERE</code>.</li>
          </ol>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">Starter SQL</h2>
        <CodeBlock
          language="sql"
          code={`CREATE DATABASE practice_db;
USE practice_db;

CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  city VARCHAR(30),
  age INT,
  status VARCHAR(20) DEFAULT 'active'
);`}
        />
      </section>
    </SqlLesson>
  );
}

