import { LessonContainer } from "@/components/notes/LessonContainer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 1 Assignment",
  description:
    "Capstone assignment combining Day 1 topics: a math/logic task, a dynamic welcome message built with DOM updates, an even-number loop generator, and an age eligibility checker using if/else.",
  path: "/javascript/day-1/assignment",
});

export default function Day1Assignment() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="🎯 Day 1 Graduation Assignment"
    >
      <p className="text-muted-foreground">
        Combine everything you learned today into one mini-project!
      </p>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 1: Basic Math & Logic
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>Create two variables and find their product.</li>
          <li>
            Check if the product is greater than 100. If yes, log “Big Number”,
            else “Small Number”.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 2: Dynamic Welcome
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>Create an input field for the user’s name.</li>
          <li>Add a button “Welcome Me”.</li>
          <li>
            When clicked, change an <code>&lt;h2&gt;</code> to say “Welcome,
            [Name]!” and change the background color of the page.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 3: Even Number Generator
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>Write a loop that prints only even numbers from 1 to 50.</li>
          <li>
            Extra: Print them on the page using <code>innerHTML += ...</code>.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 4: Simple Age Checker
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>Create a variable <code>myAge</code>.</li>
          <li>
            Use an <code>if/else</code> statement to check if you are eligible
            for a driving license (age &gt;= 18).
          </li>
          <li>
            Display the result on your webpage using{" "}
            <code>document.getElementById()</code>.
          </li>
        </ul>
      </section>
    </LessonContainer>
  );
}

