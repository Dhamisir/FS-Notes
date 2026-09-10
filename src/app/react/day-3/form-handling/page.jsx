import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Form Handling",
  description:
    "Covers controlled form inputs in React, progressing from a single field without a name attribute to a multi-field form with one dynamic handleChange, then saving submissions to an array and rendering them with map.",
  path: "/react/day-3/form-handling",
});

export default function FormHandling() {
  return (
    <ReactLesson backHref="/react/day-3" title="2️⃣ Form Handling in React">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          In controlled forms, inputs take their value from state and update
          state on change.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1️⃣ One field without name
        </h2>
        <p className="mt-2 text-muted-foreground">
          Start with one comment field. Because there is only one field, we can
          update it directly and do not need a <code>name</code> attribute.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useState } from "react";

export default function CommentForm() {
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
        placeholder="Write your comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
        <Callout variant="reactInfo" className="mt-3">
          <ul className="list-disc pl-6 text-sm text-[#2c3e50]">
            <li><code>handleChange</code> runs whenever the user types.</li>
            <li><code>event.target.value</code> contains the current field value.</li>
            <li><code>handleSubmit</code> runs when the form is submitted.</li>
            <li><code>preventDefault()</code> prevents the page from refreshing.</li>
          </ul>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2️⃣ Five fields with one dynamic handleChange
        </h2>
        <p className="mt-2 text-muted-foreground">
          Store all fields in one object. Every input must have a <code>name</code>
          that matches a key in state.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useState } from "react";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    course: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
      <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
        <Callout variant="reactInfo" className="mt-3">
          <div className="text-sm text-[#2c3e50]">
            <p><code>[name]: value</code> dynamically updates the field that changed.</p>
            <p className="mt-2">
              If the user types in <code>name=&quot;city&quot;</code>, React updates
              <code> formData.city</code>. The spread operator preserves the other fields.
            </p>
          </div>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3️⃣ Save records in an array and display with map
        </h2>
        <p className="mt-2 text-muted-foreground">
          On submit, add a copy of the form object to an array, reset the form,
          and use <code>map()</code> to display every submitted student.
        </p>
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

export default function StudentForm() {
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

      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}`}
        />
        <Callout variant="reactPractice" className="mt-3">
          <b>Flow</b>
          <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm">
            <li>The user types and <code>handleChange</code> updates <code>formData</code>.</li>
            <li>The user submits and <code>handleSubmit</code> creates a student.</li>
            <li>The new student is added to the <code>students</code> array.</li>
            <li><code>map()</code> renders every student from the array.</li>
            <li>The form resets to empty values.</li>
          </ol>
        </Callout>
      </section>
    </ReactLesson>
  );
}
