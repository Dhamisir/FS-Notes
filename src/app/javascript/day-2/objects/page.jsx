import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Objects",
  description:
    "Explains creating, reading, and updating JavaScript objects with dot and bracket notation, adding object methods, and building arrays of objects.",
  path: "/javascript/day-2/objects",
});

export default function Objects() {
  return (
    <LessonContainer
      backHref="/javascript/day-2"
      backLabel="Back to Menu"
      title="🗃 Objects (Key-Value Pairs)"
    >
      <p className="text-muted-foreground">
        An <strong>Object</strong> is a collection of related data. It stores
        information as <code>key: value</code> pairs.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. Creating an Object
        </h2>
        <CodeBlock
          language="javascript"
          code={`let student = {
  name: "Rajesh",
  age: 21,
  city: "Mumbai",
  isEnrolled: true
};

console.log(student.name); // Using Dot notation
console.log(student["city"]); // Using Bracket notation`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Updating Objects
        </h2>
        <CodeBlock
          language="javascript"
          code={`student.age = 22; // Update
student.course = "React"; // Add new property
delete student.isEnrolled; // Remove property`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Objects + Functions (Methods)
        </h2>
        <p className="mt-2 text-muted-foreground">
          Objects can also contain functions.
        </p>
        <CodeBlock
          language="javascript"
          code={`let car = {
  brand: "Tesla",
  model: "S",
  start: function() {
    console.log("The car is starting...");
  }
};

car.start(); // Calling the method`}
        />
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Activity
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Create an object <code>myLaptop</code> with brand, ram, and ssd
            properties.
          </li>
          <li>
            Add a method <code>showSpecs()</code> that logs all the details.
          </li>
          <li>
            Try creating an <b>array of objects</b> (e.g., a list of students).
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

