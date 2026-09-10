import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bulk Insert",
  description:
    "Learn how to insert multiple rows in a single INSERT statement and why bulk inserts outperform inserting one row at a time.",
  path: "/sql/day-1/bulk-insert",
});

export default function BulkInsert() {
  return (
    <SqlLesson backHref="/sql/day-1" title="⚡ Part 7: Bulk Insert (Efficiency)">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          Bulk insert means inserting many rows in a single query for better
          performance.
        </div>
      </Callout>

      <CodeBlock
        language="sql"
        code={`INSERT INTO students (student_id, name, age, email, city, status) VALUES
(10, 'Sana', 20, 'sana@gmail.com', 'Delhi', 'active'),
(11, 'Vikas', 22, 'vikas@gmail.com', 'Pune', 'active'),
(12, 'Meera', 21, NULL, 'Mumbai', 'active');`}
      />

      <Callout variant="sqlPractice">
        <div className="text-sm text-[#2c3e50]">
          <b>Why it’s faster:</b> fewer network round trips and fewer transaction
          overheads compared to inserting one row at a time.
        </div>
      </Callout>
    </SqlLesson>
  );
}

