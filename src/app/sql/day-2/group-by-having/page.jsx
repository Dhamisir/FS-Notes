import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GROUP BY & HAVING",
  description:
    "Explains how GROUP BY groups rows for aggregation and how HAVING filters those groups, with examples counting and ordering students per city.",
  path: "/sql/day-2/group-by-having",
});

export default function GroupByHaving() {
  return (
    <SqlLesson backHref="/sql/day-2" title="9️⃣ GROUP BY & HAVING">
      <Callout variant="sqlMini">
        <div className="text-sm text-[#2c3e50]">
          <code>GROUP BY</code> groups rows; <code>HAVING</code> filters groups
          (use it with aggregates).
        </div>
      </Callout>

      <CodeBlock
        language="sql"
        code={`-- Count students per city
SELECT city, COUNT(*) AS total
FROM students
GROUP BY city;

-- Only cities with more than 2 students
SELECT city, COUNT(*) AS total
FROM students
GROUP BY city
HAVING COUNT(*) > 2;

-- Order groups
SELECT city, COUNT(*) AS total
FROM students
GROUP BY city
ORDER BY total DESC;`}
      />
    </SqlLesson>
  );
}

