import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "WHERE",
  description:
    "Learn how to filter rows with the WHERE clause, including comparison conditions and checking for NULL values.",
  path: "/sql/day-2/where",
});

export default function Where() {
  return (
    <SqlLesson backHref="/sql/day-2" title="4️⃣ Filter Data – WHERE Clause">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          <code>WHERE</code> filters rows based on a condition.
        </div>
      </Callout>

      <CodeBlock
        language="sql"
        code={`-- Students from Delhi
SELECT * FROM students WHERE city = 'Delhi';

-- Students older than 21
SELECT * FROM students WHERE age > 21;

-- NULL checks
SELECT * FROM students WHERE email IS NULL;`}
      />
    </SqlLesson>
  );
}

