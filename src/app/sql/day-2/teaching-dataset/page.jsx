import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Teaching Dataset",
  description:
    "Sets up the shared students, courses, and enrollments tables with sample data used throughout the Day 2 lessons to demonstrate constraints, filtering, and joins.",
  path: "/sql/day-2/teaching-dataset",
});

export default function TeachingDataset() {
  return (
    <SqlLesson
      backHref="/sql/day-2"
      title="📊 Teaching Dataset (Create Tables & Sample Data)"
    >
      <Callout
        variant="problem"
        className="bg-[#ffe5e5] border-l-[#e74c3c]"
      >
        <div className="text-sm text-[#2c3e50]">
          <strong>🎓 Teaching approach</strong>
          <p className="mt-2">
            We’ll use 3 tables: <strong>students</strong>,{" "}
            <strong>courses</strong>, and <strong>enrollments</strong>. This is
            enough to cover all SQL topics.
          </p>
          <p className="mt-2">
            <strong>Tip:</strong> create these tables first before teaching any
            SQL topic.
          </p>
        </div>
      </Callout>

      <section>
        <Callout variant="sqlMini">
          <b>1️⃣ STUDENTS TABLE (Main Table)</b>
          <Callout variant="sqlExample" className="mt-3">
            <b>🧠 CREATE TABLE</b>
            <div className="mt-2">
              <CodeBlock
                language="sql"
                code={`CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 18),
  email VARCHAR(100) UNIQUE,
  city VARCHAR(30),
  status VARCHAR(20) DEFAULT 'active'
);`}
              />
            </div>
          </Callout>

          <div className="mt-4 font-semibold text-[#195568]">
            💡 What you can teach using this table
          </div>
          <Callout variant="sqlPractice" className="mt-2">
            <ul className="list-disc pl-6 text-sm">
              <li>
                <strong>NOT NULL</strong> → name
              </li>
              <li>
                <strong>CHECK</strong> → age &gt;= 18
              </li>
              <li>
                <strong>DEFAULT</strong> → status
              </li>
              <li>
                <strong>PRIMARY KEY</strong> → id (AUTO_INCREMENT)
              </li>
              <li>
                <strong>UNIQUE</strong> → email
              </li>
              <li>WHERE, ORDER BY, DISTINCT, LIKE, IS NULL</li>
            </ul>
          </Callout>

          <Callout variant="sqlExample" className="mt-3">
            <b>📝 INSERT DUMMY DATA</b>
            <div className="mt-2">
              <CodeBlock
                language="sql"
                code={`INSERT INTO students (name, age, email, city, status) VALUES
('Amit', 20, 'amit@gmail.com', 'Delhi', 'active'),
('Neha', 22, 'neha@gmail.com', 'Mumbai', 'active'),
('Ravi', 19, 'ravi@gmail.com', 'Delhi', 'inactive'),
('Priya', 21, 'priya@gmail.com', 'Pune', 'active'),
('Karan', 23, NULL, 'Mumbai', 'active'),
('Anjali', 20, 'anjali@gmail.com', 'Delhi', 'active'),
('Rahul', 24, 'rahul@gmail.com', 'Pune', 'inactive');`}
              />
            </div>
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>2️⃣ COURSES TABLE</b>
          <Callout variant="sqlExample" className="mt-3">
            <b>🧠 CREATE TABLE</b>
            <div className="mt-2">
              <CodeBlock
                language="sql"
                code={`CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(50) NOT NULL,
  fees INT CHECK (fees > 0)
);`}
              />
            </div>
          </Callout>
          <Callout variant="sqlExample" className="mt-3">
            <b>📝 INSERT DATA</b>
            <div className="mt-2">
              <CodeBlock
                language="sql"
                code={`INSERT INTO courses (course_name, fees) VALUES
('Web Development', 15000),
('Data Science', 25000),
('Python', 12000),
('SQL Basics', 8000);`}
              />
            </div>
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>3️⃣ ENROLLMENTS TABLE (Foreign Key + Joins)</b>
          <Callout variant="sqlExample" className="mt-3">
            <b>🧠 CREATE TABLE</b>
            <div className="mt-2">
              <CodeBlock
                language="sql"
                code={`CREATE TABLE enrollments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  course_id INT,
  enroll_date DATE,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);`}
              />
            </div>
          </Callout>
          <Callout variant="sqlExample" className="mt-3">
            <b>📝 INSERT DATA</b>
            <div className="mt-2">
              <CodeBlock
                language="sql"
                code={`INSERT INTO enrollments (student_id, course_id, enroll_date) VALUES
(1, 1, '2024-01-10'),
(1, 4, '2024-01-12'),
(2, 2, '2024-01-15'),
(3, 3, '2024-01-18'),
(4, 1, '2024-01-20'),
(5, 4, '2024-01-22'),
(6, 3, '2024-01-25'),
(6, 1, '2024-01-28'),
(7, 2, '2024-01-30');`}
              />
            </div>
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>✅ Verify data</b>
          <Callout variant="sqlExample" className="mt-3">
            <CodeBlock
              language="sql"
              code={`SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollments;`}
            />
          </Callout>
        </Callout>
      </section>

      <section>
        <Callout variant="sqlMini">
          <b>📋 Data summary</b>
          <Callout variant="sqlPractice" className="mt-3">
            <ul className="list-disc pl-6 text-sm">
              <li>7 students across 3 cities (Delhi, Mumbai, Pune)</li>
              <li>4 courses with different fees</li>
              <li>9 enrollments (student ↔ course)</li>
              <li>One student has NULL email (IS NULL examples)</li>
              <li>Some students have multiple enrollments (GROUP BY examples)</li>
            </ul>
          </Callout>
        </Callout>
      </section>
    </SqlLesson>
  );
}
