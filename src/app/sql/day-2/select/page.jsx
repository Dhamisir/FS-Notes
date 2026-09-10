import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SELECT",
  description:
    "Learn how to read data from a table using SELECT, including selecting all columns versus specific columns, with a practice exercise.",
  path: "/sql/day-2/select",
});

export default function Select() {
  return (
    <SqlLesson backHref="/sql/day-2" title="3️⃣ SELECT Data">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          Use <code>SELECT</code> to read data from a table.
        </div>
      </Callout>

      <CodeBlock
        language="sql"
        code={`-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, city FROM students;`}
      />

      <Callout variant="sqlPractice">
        <div className="text-sm text-[#2c3e50]">
          <b>Practice:</b> select only <code>course_name</code> and <code>fees</code> from <code>courses</code>.
        </div>
      </Callout>
    </SqlLesson>
  );
}

