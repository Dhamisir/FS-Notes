import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SQL Assignment: JOINS",
  description:
    "A practice assignment using employees, departments, and projects tables requiring 10 queries across INNER, LEFT, RIGHT, CROSS, and SELF joins, with worked solutions.",
  path: "/sql/day-3/assignment",
});

export default function JoinAssignment() {
  return (
    <SqlLesson backHref="/sql/day-3" title="📝 SQL Assignment: JOINS">
      <Callout variant="sqlMini">
        <b>Instructions</b>
        <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm">
          <li>Write SQL queries for all the questions.</li>
          <li>Use appropriate JOIN types: INNER, LEFT, RIGHT, CROSS, and SELF.</li>
          <li>Do not write explanations.</li>
          <li>Use table aliases.</li>
        </ol>
      </Callout>

      <section>
        <Callout variant="sqlMini">
          <b>Table 1: employees</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  emp_name VARCHAR(50),
  dept_id INT,
  salary INT
);

INSERT INTO employees (emp_name, dept_id, salary) VALUES
('Rahul', 1, 50000),
('Sita', 2, 60000),
('Imran', 4, 55000),
('Neha', NULL, 45000),
('Aman', 1, 52000);`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>Table 2: departments</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(50)
);

INSERT INTO departments (dept_name) VALUES
('Sales'),
('HR'),
('IT');`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>Table 3: projects</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`CREATE TABLE projects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  project_name VARCHAR(50),
  dept_id INT
);

INSERT INTO projects (project_name, dept_id) VALUES
('Website', 1),
('Recruitment', 2),
('Security', 3),
('Marketing', 1);`}
            />
          </Callout>
        </Callout>
      </section>

      <Callout variant="sqlPractice">
        <b>Section 1: Questions</b>
        <p className="mt-2 text-sm">Try every question before checking the solutions.</p>
        <ol className="mt-3 list-decimal space-y-3 pl-6 text-sm">
          <li>Display employee name with department name (only matching records).</li>
          <li>Display all employees with department names, including employees without a department.</li>
          <li>Display all departments with employee names, including departments without employees.</li>
          <li>Display employee name, department name, and project name using multiple joins.</li>
          <li>Display employees who are not assigned to any department.</li>
          <li>Display departments that have no employees.</li>
          <li>Display all possible combinations of employees and departments.</li>
          <li>Find employees working in the same department using a SELF JOIN.</li>
          <li>Display project name with department name.</li>
          <li>Display employees and their department names where salary is greater than 50000.</li>
        </ol>
      </Callout>

      <Callout variant="sqlMini">
        <b>Section 2: Solutions</b>
        <p className="mt-2 text-sm">Open the answer block only after attempting all questions.</p>
        <details className="mt-3 rounded-lg bg-white p-3">
          <summary className="cursor-pointer font-semibold text-[#195568]">
            Show all solutions
          </summary>
          <div className="mt-3">
            <CodeBlock language="sql" code={`-- 1. Solution
SELECT e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- Data preview
-- Rahul | Sales
-- Sita  | HR
-- Aman  | Sales


-- 2. Solution
SELECT e.emp_name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;

-- Data preview
-- Rahul | Sales
-- Sita  | HR
-- Imran | NULL
-- Neha  | NULL
-- Aman  | Sales


-- 3. Solution
SELECT e.emp_name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;

-- Data preview
-- Rahul | Sales
-- Aman  | Sales
-- Sita  | HR
-- NULL  | IT


-- 4. Solution
SELECT e.emp_name, d.dept_name, p.project_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
INNER JOIN projects p ON d.id = p.dept_id;

-- Data preview
-- Rahul | Sales | Website
-- Rahul | Sales | Marketing
-- Sita  | HR    | Recruitment
-- Aman  | Sales | Website
-- Aman  | Sales | Marketing


-- 5. Solution
SELECT e.emp_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id
WHERE d.id IS NULL;

-- Data preview
-- Imran
-- Neha


-- 6. Solution
SELECT d.dept_name
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
WHERE e.id IS NULL;

-- Data preview
-- IT


-- 7. Solution
SELECT e.emp_name, d.dept_name
FROM employees e
CROSS JOIN departments d;

-- Data preview
-- 15 rows: 5 employees × 3 departments


-- 8. Solution
SELECT a.emp_name AS employee_1, b.emp_name AS employee_2
FROM employees a
INNER JOIN employees b ON a.dept_id = b.dept_id
AND a.id < b.id;

-- Data preview
-- Rahul | Aman


-- 9. Solution
SELECT p.project_name, d.dept_name
FROM projects p
INNER JOIN departments d ON p.dept_id = d.id;

-- Data preview
-- Website     | Sales
-- Recruitment | HR
-- Security    | IT
-- Marketing   | Sales


-- 10. Solution
SELECT e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
WHERE e.salary > 50000;

-- Data preview
-- Sita | HR
-- Aman | Sales`} />
          </div>
        </details>
      </Callout>
    </SqlLesson>
  );
}
