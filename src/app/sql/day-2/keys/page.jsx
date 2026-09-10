import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Keys",
  description:
    "Introduces primary keys, foreign keys, and unique keys, explaining how they identify rows uniquely and link related tables together.",
  path: "/sql/day-2/keys",
});

export default function Keys() {
  return (
    <SqlLesson backHref="/sql/day-2" title="2️⃣ Keys in Database (Uniqueness & Relationships)">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          Keys help identify rows uniquely and connect related tables.
        </div>
      </Callout>

      <Callout variant="sqlPractice">
        <ul className="list-disc pl-6 text-sm text-[#2c3e50]">
          <li>
            <b>Primary Key (PK)</b>: unique identifier for each row
          </li>
          <li>
            <b>Foreign Key (FK)</b>: references PK in another table
          </li>
          <li>
            <b>Unique Key</b>: ensures values are unique (like email)
          </li>
        </ul>
      </Callout>

      <section>
        <Callout variant="sqlExample">
          <b>Example (PK + FK)</b>
          <div className="mt-2">
            <CodeBlock
              language="sql"
              code={`CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE enrollments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);`}
            />
          </div>
        </Callout>
      </section>
    </SqlLesson>
  );
}
