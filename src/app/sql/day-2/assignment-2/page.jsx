import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SQL Assignment 2: Student Table",
  description:
    "A practice assignment where learners create and populate a students table, then write 20 SQL queries covering basic SELECT, aggregate functions, ORDER BY, and combined GROUP BY queries, with solutions included.",
  path: "/sql/day-2/assignment-2",
});

const QuestionSection = ({ title, start, children }) => (
  <div className="mt-4 rounded-lg bg-white p-4">
    <b className="text-[#195568]">{title}</b>
    <ol start={start} className="mt-2 list-decimal space-y-2 pl-6 text-sm">
      {children}
    </ol>
  </div>
);

export default function StudentTableAssignment() {
  return (
    <SqlLesson backHref="/sql/day-2" title="📝 SQL Assignment 2: Student Table">
      <Callout variant="sqlMini">
        <b>Part 1: Create Table</b>
        <Callout variant="sqlExample" className="mt-3">
          <CodeBlock language="sql" code={`CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  class VARCHAR(10),
  marks INT,
  city VARCHAR(50)
);`} />
        </Callout>
      </Callout>

      <Callout variant="sqlMini">
        <b>Part 2: Insert Data</b>
        <Callout variant="sqlExample" className="mt-3">
          <CodeBlock language="sql" code={`INSERT INTO students (name, class, marks, city) VALUES
('Ayaan', '10A', 85, 'Mumbai'),
('Riya', '10A', 92, 'Delhi'),
('Kabir', '10A', 76, 'Mumbai'),
('Meera', '10B', 88, 'Pune'),
('Arjun', '10B', 67, 'Delhi'),
('Sara', '10B', 95, 'Mumbai'),
('Vivaan', '10C', 72, 'Pune'),
('Isha', '10C', 89, 'Delhi');`} />
        </Callout>
      </Callout>

      <Callout variant="sqlPractice">
        <b>Section 1: Questions</b>
        <p className="mt-2 text-sm">Complete all questions before opening the solutions.</p>

        <QuestionSection title="Section A – Basic SELECT" start={1}>
          <li>Display all student records.</li>
          <li>Display only name and marks.</li>
          <li>Display students from Mumbai.</li>
        </QuestionSection>

        <QuestionSection title="Section B – Aggregate Functions (MAX, MIN, SUM)" start={4}>
          <li>Find the highest marks in the class.</li>
          <li>Find the lowest marks.</li>
          <li>Find the total marks of all students.</li>
          <li>Find total marks class-wise.</li>
          <li>Find the highest marks in each class.</li>
          <li>Find the lowest marks in each class.</li>
        </QuestionSection>

        <QuestionSection title="Section C – ORDER BY" start={10}>
          <li>Display students ordered by marks in ascending order.</li>
          <li>Display students ordered by marks in descending order.</li>
          <li>Display students ordered by class and then by marks, highest first.</li>
          <li>Display students ordered by name alphabetically.</li>
        </QuestionSection>

        <QuestionSection title="Section D – Combined Queries" start={14}>
          <li>Show class-wise total marks sorted by total marks, highest first.</li>
          <li>Show class-wise highest marks sorted by class name.</li>
          <li>Show city-wise total marks sorted from lowest to highest.</li>
        </QuestionSection>

        <QuestionSection title="Bonus Questions" start={17}>
          <li>Show the second-highest marks.</li>
          <li>Show the total marks of students from Delhi.</li>
          <li>Show the class having the highest total marks.</li>
          <li>Display the top three students based on marks.</li>
        </QuestionSection>
      </Callout>

      <Callout variant="sqlMini">
        <b>Section 2: Solutions</b>
        <details className="mt-3 rounded-lg bg-white p-3">
          <summary className="cursor-pointer font-semibold text-[#195568]">Show all solutions</summary>
          <div className="mt-3">
            <CodeBlock language="sql" code={`-- 1. Solution
SELECT * FROM students;

-- 2. Solution
SELECT name, marks FROM students;

-- 3. Solution
SELECT * FROM students
WHERE city = 'Mumbai';

-- 4. Solution
SELECT MAX(marks) AS highest_marks
FROM students;

-- 5. Solution
SELECT MIN(marks) AS lowest_marks
FROM students;

-- 6. Solution
SELECT SUM(marks) AS total_marks
FROM students;

-- 7. Solution
SELECT class, SUM(marks) AS total_marks
FROM students
GROUP BY class;

-- 8. Solution
SELECT class, MAX(marks) AS highest_marks
FROM students
GROUP BY class;

-- 9. Solution
SELECT class, MIN(marks) AS lowest_marks
FROM students
GROUP BY class;

-- 10. Solution
SELECT * FROM students
ORDER BY marks ASC;

-- 11. Solution
SELECT * FROM students
ORDER BY marks DESC;

-- 12. Solution
SELECT * FROM students
ORDER BY class ASC, marks DESC;

-- 13. Solution
SELECT * FROM students
ORDER BY name ASC;

-- 14. Solution
SELECT class, SUM(marks) AS total_marks
FROM students
GROUP BY class
ORDER BY total_marks DESC;

-- 15. Solution
SELECT class, MAX(marks) AS highest_marks
FROM students
GROUP BY class
ORDER BY class ASC;

-- 16. Solution
SELECT city, SUM(marks) AS total_marks
FROM students
GROUP BY city
ORDER BY total_marks ASC;

-- 17. Solution
SELECT MAX(marks) AS second_highest_marks
FROM students
WHERE marks < (SELECT MAX(marks) FROM students);

-- 18. Solution
SELECT SUM(marks) AS delhi_total_marks
FROM students
WHERE city = 'Delhi';

-- 19. Solution
SELECT class, SUM(marks) AS total_marks
FROM students
GROUP BY class
ORDER BY total_marks DESC
LIMIT 1;

-- 20. Solution
SELECT name, marks
FROM students
ORDER BY marks DESC
LIMIT 3;`} />
          </div>
        </details>
      </Callout>
    </SqlLesson>
  );
}
