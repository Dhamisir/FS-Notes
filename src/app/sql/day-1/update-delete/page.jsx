import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Update & Delete",
  description:
    "Learn how to modify existing rows with UPDATE and remove rows with DELETE, and why a WHERE clause is essential to avoid affecting the whole table.",
  path: "/sql/day-1/update-delete",
});

export default function UpdateDelete() {
  return (
    <SqlLesson backHref="/sql/day-1" title="✏️ Part 6: Update & Delete">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          Use <code>UPDATE</code> to modify rows and <code>DELETE</code> to
          remove rows. Always use a <b>WHERE</b> clause.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">UPDATE</h2>
        <CodeBlock
          language="sql"
          code={`-- Update one student
UPDATE students
SET city = 'Pune'
WHERE student_id = 1;

-- Update multiple columns
UPDATE students
SET status = 'inactive', city = 'Delhi'
WHERE student_id = 3;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">DELETE</h2>
        <CodeBlock
          language="sql"
          code={`-- Delete a row
DELETE FROM students
WHERE student_id = 7;`}
        />
      </section>

      <Callout variant="problem" className="bg-[#ffebee]">
        ⚠️ <strong>Danger:</strong> Running UPDATE/DELETE without WHERE can
        affect the whole table.
      </Callout>
    </SqlLesson>
  );
}

