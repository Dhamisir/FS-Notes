import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "MySQL Assignment: GROUP BY and HAVING" };

export default function GroupByAssignment() {
  return (
    <SqlLesson backHref="/sql/day-2" title="📝 MySQL Assignment: GROUP BY and HAVING">
      <Callout variant="sqlMini">
        <b>Instructions</b>
        <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm">
          <li>Write SQL queries for all the questions.</li>
          <li>Use GROUP BY and HAVING wherever required.</li>
          <li>Do not write explanations—only queries.</li>
          <li>Use table aliases and column aliases for readability.</li>
        </ol>
      </Callout>

      <section><Callout variant="sqlMini">
        <b>Section A: Employees &amp; Departments</b>
        <Callout variant="sqlExample" className="mt-3">
          <CodeBlock language="sql" code={`CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  emp_name VARCHAR(50) NOT NULL,
  dept_id INT NOT NULL,
  salary INT NOT NULL,
  status VARCHAR(10) NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES departments(id)
);

INSERT INTO departments (dept_name) VALUES
('Sales'), ('HR'), ('IT'), ('Finance');

INSERT INTO employees (emp_name, dept_id, salary, status) VALUES
('Asha', 1, 45000, 'active'),
('Ravi', 1, 52000, 'active'),
('Neha', 1, 61000, 'inactive'),
('Amit', 2, 38000, 'active'),
('Divya', 2, 42000, 'active'),
('Sanjay', 3, 75000, 'active'),
('Meera', 3, 68000, 'active'),
('Kabir', 3, 82000, 'active'),
('Ishaan', 4, 90000, 'active'),
('Pooja', 4, 88000, 'inactive');`} />
        </Callout>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>Section B: Customers &amp; Orders</b>
        <Callout variant="sqlExample" className="mt-3">
          <CodeBlock language="sql" code={`CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  order_date DATE NOT NULL,
  amount INT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

INSERT INTO customers (customer_name, city) VALUES
('Rahul', 'Mumbai'), ('Sita', 'Pune'), ('Imran', 'Delhi'),
('Kiran', 'Mumbai'), ('Leena', 'Bengaluru');

INSERT INTO orders (customer_id, order_date, amount) VALUES
(1, '2025-01-05', 1200), (1, '2025-01-15', 2500),
(1, '2025-02-01', 1800), (2, '2025-01-10', 900),
(2, '2025-02-12', 1100), (3, '2025-01-20', 5000),
(3, '2025-02-02', 2200), (3, '2025-02-18', 3300),
(4, '2025-01-25', 1500), (4, '2025-02-05', 1700),
(4, '2025-02-20', 1600), (5, '2025-02-14', 2100);`} />
        </Callout>
      </Callout></section>

      <section><Callout variant="sqlMini">
        <b>Section C: Products, Categories &amp; Sales</b>
        <Callout variant="sqlExample" className="mt-3">
          <CodeBlock language="sql" code={`CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(50) NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  category_id INT NOT NULL,
  price INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE sales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  sale_date DATE NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO categories (category_name) VALUES
('Electronics'), ('Grocery'), ('Stationery');

INSERT INTO products (product_name, category_id, price) VALUES
('Mouse', 1, 700), ('Keyboard', 1, 1500),
('Headphones', 1, 2200), ('Rice', 2, 60),
('Tea', 2, 120), ('Notebook', 3, 50), ('Pen', 3, 10);

INSERT INTO sales (product_id, sale_date, quantity) VALUES
(1, '2025-01-03', 40), (1, '2025-02-03', 30),
(2, '2025-01-08', 25), (2, '2025-02-10', 35),
(3, '2025-02-12', 20), (4, '2025-01-10', 80),
(4, '2025-02-15', 60), (5, '2025-02-18', 55),
(6, '2025-01-20', 90), (6, '2025-02-25', 30),
(7, '2025-02-05', 120);`} />
        </Callout>
      </Callout></section>

      <Callout variant="sqlPractice">
        <b>Section 1: Questions</b>
        <p className="mt-2 text-sm">Complete all questions before opening the solutions.</p>
        <ol className="mt-3 list-decimal space-y-3 pl-6 text-sm">
          <li>Display the total number of employees in each department.</li>
          <li>Calculate the total salary paid in each department.</li>
          <li>Display departments where the total salary is greater than 150000.</li>
          <li>Show the average salary of employees in each department.</li>
          <li>Display departments having more than 2 employees.</li>
          <li>Find the maximum salary in each department.</li>
          <li>Display customers and the total amount they have spent.</li>
          <li>Display customers who have placed more than 2 orders.</li>
          <li>Show products and the total quantity sold for each product.</li>
          <li>Display products where total quantity sold is greater than 60.</li>
          <li>Find the minimum order amount for each customer.</li>
          <li>Display categories having more than 2 products.</li>
        </ol>
      </Callout>

      <Callout variant="sqlMini">
        <b>Section 2: Solutions</b>
        <details className="mt-3 rounded-lg bg-white p-3">
          <summary className="cursor-pointer font-semibold text-[#195568]">Show all solutions</summary>
          <div className="mt-3">
            <CodeBlock language="sql" code={`-- 1. Solution
SELECT d.dept_name, COUNT(e.id) AS employee_count
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.dept_name;

-- 2. Solution
SELECT d.dept_name, SUM(e.salary) AS total_salary
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.dept_name;

-- 3. Solution
SELECT d.dept_name, SUM(e.salary) AS total_salary
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.dept_name
HAVING SUM(e.salary) > 150000;

-- 4. Solution
SELECT d.dept_name, AVG(e.salary) AS average_salary
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.dept_name;

-- 5. Solution
SELECT d.dept_name, COUNT(e.id) AS employee_count
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.dept_name
HAVING COUNT(e.id) > 2;

-- 6. Solution
SELECT d.dept_name, MAX(e.salary) AS maximum_salary
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.dept_name;

-- 7. Solution
SELECT c.customer_name, SUM(o.amount) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.customer_name;

-- 8. Solution
SELECT c.customer_name, COUNT(o.id) AS order_count
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.customer_name
HAVING COUNT(o.id) > 2;

-- 9. Solution
SELECT p.product_name, SUM(s.quantity) AS total_quantity
FROM products p
JOIN sales s ON p.id = s.product_id
GROUP BY p.id, p.product_name;

-- 10. Solution
SELECT p.product_name, SUM(s.quantity) AS total_quantity
FROM products p
JOIN sales s ON p.id = s.product_id
GROUP BY p.id, p.product_name
HAVING SUM(s.quantity) > 60;

-- 11. Solution
SELECT c.customer_name, MIN(o.amount) AS minimum_order_amount
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.customer_name;

-- 12. Solution
SELECT c.category_name, COUNT(p.id) AS product_count
FROM categories c
JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.category_name
HAVING COUNT(p.id) > 2;`} />
          </div>
        </details>
      </Callout>
    </SqlLesson>
  );
}
