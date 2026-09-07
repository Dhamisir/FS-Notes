import { ReactLesson } from "@/app/react/components/ReactLesson";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "React Day 3 useState Assignment" };

export default function ReactDay3Assignment() {
  return (
    <ReactLesson backHref="/react/day-3" title="🎯 Day 3 Assignment: useState">
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#e74c3c] px-3 py-1 text-xs font-semibold text-white">
            Task 1
          </span>
          <div className="text-base font-semibold text-[#2c3e50]">
            Dark Mode Toggle
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Create a Dark Mode toggle using <code>useState</code>. Toggle the
          background and text between morning and night modes.
        </p>

        <details className="mt-4 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock
              language="jsx"
              code={`import { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        minHeight: "200px",
        padding: "20px",
      }}
    >
      <h1>{isDarkMode ? "Good Night 🌙" : "Good Morning ☀️"}</h1>
      <button onClick={handleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;`}
            />
          </div>
        </details>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#e74c3c] px-3 py-1 text-xs font-semibold text-white">
            Task 2
          </span>
          <div className="text-base font-semibold text-[#2c3e50]">
            Feedback Comment Form
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Create a controlled comment field without a <code>name</code>
          attribute. Use separate <code>handleChange</code> and
          <code> handleSubmit</code> functions, then display the submitted comment.
        </p>

        <details className="mt-4 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock
              language="jsx"
              code={`import { useState } from "react";

function FeedbackForm() {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={handleChange}
        placeholder="Write your feedback"
      />
      <button type="submit">Send Feedback</button>
    </form>
  );
}

export default FeedbackForm;`}
            />
          </div>
        </details>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#e74c3c] px-3 py-1 text-xs font-semibold text-white">
            Task 3
          </span>
          <div className="text-base font-semibold text-[#2c3e50]">
            Student Registration Manager
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Create a form with name, email, age, city, and course fields. Use one
          dynamic <code>handleChange</code>, add submitted students to an array,
          reset the form, and display all students with <code>map()</code>.
        </p>

        <details className="mt-4 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock
              language="jsx"
              code={`import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  age: "",
  city: "",
  course: "",
};

function StudentManager() {
  const [formData, setFormData] = useState(emptyForm);
  const [students, setStudents] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      id: Date.now(),
      ...formData,
    };

    setStudents([...students, newStudent]);
    setFormData(emptyForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" />
        <button type="submit">Add Student</button>
      </form>

      {students.map((student) => (
        <article key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.email}</p>
          <p>{student.age} · {student.city} · {student.course}</p>
        </article>
      ))}
    </div>
  );
}

export default StudentManager;`}
            />
          </div>
        </details>
      </section>
    </ReactLesson>
  );
}
