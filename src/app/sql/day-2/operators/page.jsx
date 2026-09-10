import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Operators",
  description:
    "Covers comparison and logical operators for building WHERE conditions, including AND, OR, IN, BETWEEN, and NOT.",
  path: "/sql/day-2/operators",
});

export default function Operators() {
  return (
    <SqlLesson backHref="/sql/day-2" title="7️⃣ Operators (Conditions)">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          Operators help create conditions: <code>=</code>, <code>&gt;</code>,{" "}
          <code>&lt;</code>, <code>AND</code>, <code>OR</code>, <code>IN</code>,{" "}
          <code>BETWEEN</code>, <code>NOT</code>.
        </div>
      </Callout>

      <CodeBlock
        language="sql"
        code={`-- AND / OR
SELECT * FROM students
WHERE status = 'active' AND city = 'Mumbai';

-- IN
SELECT * FROM students
WHERE city IN ('Delhi', 'Pune');

-- BETWEEN
SELECT * FROM students
WHERE age BETWEEN 20 AND 22;

-- NOT
SELECT * FROM students
WHERE NOT status = 'inactive';`}
      />
    </SqlLesson>
  );
}

