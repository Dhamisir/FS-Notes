import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Truncate vs Delete vs Drop",
  description:
    "Compares DELETE, TRUNCATE, and DROP for removing data, explaining how each behaves differently and when to use each one safely.",
  path: "/sql/day-1/truncate",
});

export default function Truncate() {
  return (
    <SqlLesson backHref="/sql/day-1" title="🧹 Part 8: Truncate vs Delete vs Drop">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          These commands remove data in different ways — learn when to use each.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">DELETE</h2>
        <p className="mt-2 text-muted-foreground">
          Removes rows (optionally with WHERE). Can be rolled back in
          transactions.
        </p>
        <CodeBlock language="sql" code={`DELETE FROM students WHERE city = 'Pune';`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">TRUNCATE</h2>
        <p className="mt-2 text-muted-foreground">
          Removes all rows quickly (no WHERE). Resets auto-increment in MySQL.
        </p>
        <CodeBlock language="sql" code={`TRUNCATE TABLE students;`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">DROP</h2>
        <p className="mt-2 text-muted-foreground">
          Deletes the table structure + data permanently.
        </p>
        <CodeBlock language="sql" code={`DROP TABLE students;`} />
      </section>

      <Callout variant="problem" className="bg-[#ffebee]">
        ⚠️ <strong>Reminder:</strong> <code>DROP</code> deletes the table itself. Use
        carefully.
      </Callout>
    </SqlLesson>
  );
}

