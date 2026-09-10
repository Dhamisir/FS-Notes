import { SqlLesson } from "@/app/sql/components/SqlLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Database Introduction",
  description:
    "An introduction to what a database is, the difference between data and information, and the distinction between relational (SQL) and NoSQL databases.",
  path: "/sql/day-1/introduction",
});

export default function SqlIntro() {
  return (
    <SqlLesson backHref="/sql/day-1" title="🗄️ Part 1: Introduction to Databases">
      <p className="text-muted-foreground">
        A database is an organized collection of structured information (data),
        stored electronically so it can be searched and updated efficiently.
      </p>

      <Callout variant="sqlHighlight">
        <div className="text-sm text-[#2c3e50]">
          <strong>Why do we need Databases?</strong>
          <p className="mt-2">
            Imagine managing 1000 students’ info in a text file. It’s slow to
            search, hard to update, and easy to lose. Databases provide fast
            searching, security, and the ability to link related data.
          </p>
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">
          1. What is a Database?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Think of a database like a digital library:
        </p>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <strong>Database</strong> = the library
          </li>
          <li>
            <strong>Tables</strong> = bookshelves
          </li>
          <li>
            <strong>Rows</strong> = individual books
          </li>
          <li>
            <strong>Columns</strong> = information about each book
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">
          2. Data vs Information
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <strong>Data</strong>: raw facts (e.g., 25, "John")
          </li>
          <li>
            <strong>Information</strong>: data with context (e.g., Age: 25,
            Name: John)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#34495e]">
          3. Types of Databases
        </h2>
        <ol className="mt-2 list-decimal pl-6 text-muted-foreground">
          <li>
            <strong>Relational (SQL)</strong>: data in tables (MySQL,
            PostgreSQL).
          </li>
          <li>
            <strong>NoSQL</strong>: document or key-value (MongoDB, Redis).
          </li>
        </ol>
      </section>

      <Callout
        variant="sqlPractice"
        className="border-l-[#ffc107] bg-[#fff3cd]"
      >
        <div className="text-sm text-[#2c3e50]">
          🚀 <strong>Focus:</strong> we’ll master <strong>Relational Databases (SQL)</strong> using MySQL.
        </div>
      </Callout>
    </SqlLesson>
  );
}

