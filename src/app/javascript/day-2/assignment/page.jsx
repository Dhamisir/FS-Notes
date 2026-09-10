import { LessonContainer } from "@/components/notes/LessonContainer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 2 Assignments",
  description:
    "Four-part challenge covering a multiplier function, shop inventory array operations, a user profile object, and filtering a numbers array with filter().",
  path: "/javascript/day-2/assignment",
});

export default function Day2Assignment() {
  return (
    <LessonContainer
      backHref="/javascript/day-2"
      backLabel="Back to Menu"
      title="🎯 Day 2 Challenge: Logic & Data"
    >
      <p className="text-muted-foreground">
        Complete these tasks to master Functions, Arrays, and Objects.
      </p>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 1: The Multiplier
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            Write a function <code>multi(a, b)</code> that returns product of
            two numbers.
          </li>
          <li>Call it 5 times with different numbers and log the results.</li>
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 2: Shop Inventory (Arrays)
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            Create an array <code>items = ["Milk", "Bread", "Eggs", "Butter"]</code>.
          </li>
          <li>Add "Cheese" to the end.</li>
          <li>Remove the first item ("Milk").</li>
          <li>
            Use <code>map()</code> to create a new array where each item is in
            UPPERCASE.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 3: User Profile (Objects)
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            Create an object <code>user</code> with <code>name</code>,{" "}
            <code>email</code>, and <code>isAdmin</code> (boolean).
          </li>
          <li>
            Print: "User [Name] is logged in with [Email]".
          </li>
          <li>
            Write a function that takes this object and changes{" "}
            <code>isAdmin</code> to <code>true</code>.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Task 4: The Filter King
        </h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            Create an array of numbers: <code>[10, 25, 45, 60, 75, 90]</code>.
          </li>
          <li>
            Use <code>filter()</code> to get only numbers greater than 50.
          </li>
          <li>Log the final resulting array.</li>
        </ul>
      </section>
    </LessonContainer>
  );
}

