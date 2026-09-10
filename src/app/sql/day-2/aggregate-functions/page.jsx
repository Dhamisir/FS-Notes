import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aggregate Functions",
  description:
    "Explains SQL aggregate functions COUNT, SUM, AVG, MAX, and MIN for summarizing data across rows, including combining multiple aggregates and using them with GROUP BY.",
  path: "/sql/day-2/aggregate-functions",
});

export default function AggregateFunctions() {
  return (
    <SqlLesson
      backHref="/sql/day-2"
      title="🔟 Aggregate Functions (Summary Data)"
    >
      <Callout variant="sqlMini">
        <div className="text-sm text-[#195568]">
          <div className="font-semibold">📘 Definition</div>
          <div className="mt-1 text-[#2c3e50]">
            <strong>Aggregate functions</strong> calculate totals, averages, and
            counts from multiple rows.
          </div>
        </div>
      </Callout>

      <section>
        <Callout variant="sqlMini">
          <b>📊 Aggregate Functions Reference</b>
          <div className="mt-3 overflow-x-auto rounded-lg border bg-white">
            <table className="w-full text-sm">
              <thead className="bg-[#35baf6] text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Function</th>
                  <th className="px-3 py-2 text-left">Use</th>
                  <th className="px-3 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["COUNT()", "Number of rows", "COUNT(*)"],
                  ["SUM()", "Total", "SUM(salary)"],
                  ["AVG()", "Average", "AVG(age)"],
                  ["MAX()", "Highest value", "MAX(marks)"],
                  ["MIN()", "Lowest value", "MIN(age)"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t">
                    {r.map((c, i) => (
                      <td key={i} className="px-3 py-2">
                        <code>{c}</code>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>1. COUNT() — Count rows</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Count all students
SELECT COUNT(*) FROM students;

-- Count students with email
SELECT COUNT(email) FROM students;

-- Count with condition
SELECT COUNT(*) FROM students WHERE city = 'Delhi';`}
            />
          </Callout>
          <Callout variant="sqlPractice" className="mt-3">
            <b>📝 Real life usage</b>
            <ul className="mt-2 list-disc pl-6 text-sm">
              <li>Total number of users</li>
              <li>Number of orders today</li>
              <li>Count of active students</li>
            </ul>
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>2. SUM() — Total</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Total fees from courses
SELECT SUM(fees) FROM courses;

-- Total salary in company
SELECT SUM(salary) FROM employees;`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>3. AVG() — Average</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Average age of students
SELECT AVG(age) FROM students;

-- Average salary
SELECT AVG(salary) FROM employees;`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>4. MAX() — Maximum</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Highest age
SELECT MAX(age) FROM students;

-- Highest marks
SELECT MAX(marks) FROM students;`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>5. MIN() — Minimum</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Lowest age
SELECT MIN(age) FROM students;

-- Lowest price
SELECT MIN(price) FROM products;`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>✅ Multiple aggregates</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Get all statistics at once
SELECT 
  COUNT(*) AS total_students,
  AVG(age) AS avg_age,
  MAX(age) AS max_age,
  MIN(age) AS min_age
FROM students;`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>✅ Aggregates with GROUP BY</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`-- Count students per city
SELECT city, COUNT(*)
FROM students
GROUP BY city;

-- Average age per city
SELECT city, AVG(age)
FROM students
GROUP BY city;`}
            />
          </Callout>
          <Callout variant="sqlPractice" className="mt-3">
            <b>💡 Note:</b> with GROUP BY, aggregate functions calculate per
            group.
          </Callout>
        </Callout>
      </section>
    </SqlLesson>
  );
}

