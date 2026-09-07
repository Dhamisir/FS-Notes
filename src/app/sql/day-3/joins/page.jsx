import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "SQL JOIN – Complete Notes" };

const Result = ({ children }) => (
  <div className="mt-3 overflow-x-auto rounded-md bg-[#fff8e1] px-4 py-3 text-sm text-[#2c3e50]">
    <div className="mb-2 font-semibold text-[#195568]">Result</div>
    {children}
  </div>
);

export default function Joins() {
  return (
    <SqlLesson backHref="/sql/day-3" title="SQL JOIN – Complete Notes with Examples">
      <Callout variant="sqlMini">
        <div className="font-semibold text-[#195568]">📘 Definition</div>
        <p className="mt-1 text-sm text-[#2c3e50]">
          A <strong>JOIN</strong> combines rows from two or more tables using a
          related column. Here, <code>employees.dept_id</code> is matched with
          <code> departments.id</code>.
        </p>
      </Callout>

      <section>
        <Callout variant="sqlMini">
          <b>🗂️ Sample Tables Used in the Examples</b>
          <Callout variant="sqlExample" className="mt-3">
            <b>Create tables</b>
            <div className="mt-2">
              <CodeBlock language="sql" code={`CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  dept_id INT
);`} />
            </div>
          </Callout>
          <p className="mt-3 text-sm text-[#2c3e50]">
            <strong>Note:</strong> Department ID 4 is intentionally missing so
            the examples can show how unmatched rows appear in outer joins.
          </p>
          <Callout variant="sqlExample" className="mt-3">
            <b>Insert sample data</b>
            <div className="mt-2">
              <CodeBlock language="sql" code={`INSERT INTO departments (dept_name) VALUES
('Sales'),
('HR'),
('IT');

INSERT INTO employees (name, dept_id) VALUES
('Rahul', 1),
('Sita', 2),
('Imran', 4),
('Neha', NULL),
('Amit', 1);`} />
            </div>
          </Callout>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="overflow-x-auto rounded-md bg-white p-4">
              <b className="text-[#195568]">employees</b>
              <table className="mt-2 w-full text-left text-sm">
                <thead><tr><th>id</th><th>name</th><th>dept_id</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>Rahul</td><td>1</td></tr>
                  <tr><td>2</td><td>Sita</td><td>2</td></tr>
                  <tr><td>3</td><td>Imran</td><td>4</td></tr>
                  <tr><td>4</td><td>Neha</td><td>NULL</td></tr>
                  <tr><td>5</td><td>Amit</td><td>1</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto rounded-md bg-white p-4">
              <b className="text-[#195568]">departments</b>
              <table className="mt-2 w-full text-left text-sm">
                <thead><tr><th>id</th><th>dept_name</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>Sales</td></tr>
                  <tr><td>2</td><td>HR</td></tr>
                  <tr><td>3</td><td>IT</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Callout>
      </section>

      <section><Callout variant="sqlMini">
        <b>1️⃣ INNER JOIN</b>
        <p className="mt-2 text-sm">Returns only matching rows from both tables.</p>
        <Callout variant="sqlExample" className="mt-3"><CodeBlock language="sql" code={`SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.id;`} /></Callout>
        <Result><pre>{`Rahul | Sales
Sita  | HR
Amit  | Sales`}</pre></Result>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>2️⃣ LEFT JOIN</b>
        <p className="mt-2 text-sm">Returns all employees and their matching departments.</p>
        <Callout variant="sqlExample" className="mt-3"><CodeBlock language="sql" code={`SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d
ON e.dept_id = d.id;`} /></Callout>
        <Result><pre>{`Rahul | Sales
Sita  | HR
Imran | NULL
Neha  | NULL
Amit  | Sales`}</pre></Result>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>3️⃣ RIGHT JOIN</b>
        <p className="mt-2 text-sm">Returns all departments and their matching employees.</p>
        <Callout variant="sqlExample" className="mt-3"><CodeBlock language="sql" code={`SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d
ON e.dept_id = d.id;`} /></Callout>
        <Result><pre>{`Rahul | Sales
Amit  | Sales
Sita  | HR
NULL  | IT`}</pre></Result>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>4️⃣ FULL JOIN (MySQL Method)</b>
        <p className="mt-2 text-sm">MySQL has no FULL OUTER JOIN, so combine LEFT JOIN and RIGHT JOIN with UNION.</p>
        <Callout variant="sqlExample" className="mt-3"><CodeBlock language="sql" code={`SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id

UNION

SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;`} /></Callout>
        <Result><pre>{`Rahul | Sales
Sita  | HR
Imran | NULL
Neha  | NULL
Amit  | Sales
NULL  | IT`}</pre></Result>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>5️⃣ CROSS JOIN</b>
        <p className="mt-2 text-sm">Returns every possible employee and department combination.</p>
        <Callout variant="sqlExample" className="mt-3"><CodeBlock language="sql" code={`SELECT e.name, d.dept_name
FROM employees e
CROSS JOIN departments d;`} /></Callout>
        <Result>All 15 combinations: 5 employees × 3 departments.</Result>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>6️⃣ SELF JOIN</b>
        <p className="mt-2 text-sm">Finds different employees working in the same department.</p>
        <Callout variant="sqlExample" className="mt-3"><CodeBlock language="sql" code={`SELECT a.name AS employee_1, b.name AS employee_2
FROM employees a
JOIN employees b
ON a.dept_id = b.dept_id
AND a.id < b.id;`} /></Callout>
        <Result><pre>{`Rahul | Amit`}</pre></Result>
      </Callout></section>

      <Callout variant="sqlPractice">
        <b>🧠 JOIN Practice Questions</b>
        <ol className="mt-2 list-decimal space-y-2 pl-6 text-sm">
          <li>Show only employees who belong to an existing department.</li>
          <li>Show all employees, including employees without a matching department.</li>
          <li>Show all departments, including departments with no employees.</li>
          <li>Find employees whose department does not exist or is not assigned.</li>
          <li>Find departments that have no employees.</li>
          <li>Count the number of employees in each department.</li>
          <li>Display every possible employee and department combination.</li>
          <li>Find pairs of employees who work in the same department.</li>
        </ol>
      </Callout>

      <Callout variant="sqlPractice">
        <b>✅ Quick Summary</b>
        <ul className="mt-2 list-disc pl-6 text-sm">
          <li><strong>INNER JOIN:</strong> only matching rows</li>
          <li><strong>LEFT JOIN:</strong> all left rows plus matches</li>
          <li><strong>RIGHT JOIN:</strong> all right rows plus matches</li>
          <li><strong>FULL JOIN:</strong> all rows from both tables</li>
          <li><strong>CROSS JOIN:</strong> every possible combination</li>
          <li><strong>SELF JOIN:</strong> related rows in the same table</li>
        </ul>
      </Callout>
    </SqlLesson>
  );
}
