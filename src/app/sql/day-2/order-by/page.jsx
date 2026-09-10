import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "ORDER BY",
  description:
    "Learn how to sort query results with ORDER BY in ascending or descending order, including sorting by multiple columns.",
  path: "/sql/day-2/order-by",
});

export default function OrderBy() {
  return (
    <SqlLesson backHref="/sql/day-2" title="5️⃣ Sorting – ORDER BY">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          <code>ORDER BY</code> sorts result rows by one or more columns.
        </div>
      </Callout>

      <CodeBlock
        language="sql"
        code={`-- Youngest to oldest
SELECT * FROM students ORDER BY age ASC;

-- Oldest to youngest
SELECT * FROM students ORDER BY age DESC;

-- Sort by city then name
SELECT * FROM students ORDER BY city ASC, name ASC;`}
      />
    </SqlLesson>
  );
}
