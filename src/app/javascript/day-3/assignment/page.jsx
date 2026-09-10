import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 3 Assignment (DOM Projects)",
  description:
    "Three DOM capstone projects to build - a TODO app, an expense tracker, and a student marks management system - using event listeners, dynamic element creation, and event delegation.",
  path: "/javascript/day-3/assignment",
});

export default function Day3Assignment() {
  return (
    <LessonContainer
      backHref="/javascript/day-3"
      backLabel="Back to Menu"
      title="🎯 Day 3 Assignment: DOM Projects"
    >
      <p className="text-muted-foreground">
        Build these mini projects using DOM, events, and dynamic UI updates.
        Use <code>addEventListener</code>, <code>createElement</code>,{" "}
        <code>append</code>, <code>remove</code>, and event delegation where
        needed.
      </p>

      <section className="mt-6 rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Project 1: TODO App
        </h2>

        <div className="mt-4 overflow-hidden rounded-lg border bg-white">
          <img
            src="/js/day-3/todo.png"
            alt="Todo app UI"
            className="h-auto w-full"
          />
        </div>

        <Callout variant="jsInfo" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>UI:</strong> 1 input + “Add” button. List shows tasks with{" "}
            <strong>Edit</strong> and <strong>Delete</strong>.
          </div>
        </Callout>

        <ul className="mt-4 list-disc pl-6 text-muted-foreground">
          <li>
            Create an input (task text) and an <strong>Add</strong> button.
          </li>
          <li>
            On Add click, validate input (no empty tasks), then add a new task
            row to the list.
          </li>
          <li>
            Each task row must show:
            <ul className="mt-2 list-disc pl-6">
              <li>Task text</li>
              <li>
                <strong>Edit</strong> button
              </li>
              <li>
                <strong>Delete</strong> button
              </li>
            </ul>
          </li>
          <li>
            <strong>Edit flow:</strong> on Edit click, open an edit state (input
            or modal) where you can update the task value, then save it back to
            the list.
          </li>
          <li>
            <strong>Delete flow:</strong> on Delete click, show a confirmation
            popup (“Are you sure?”). If confirmed, remove the task from the DOM.
          </li>
        </ul>

        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>Suggested approach:</strong> attach one click listener on
            the list container and use <code>data-action</code> +{" "}
            <code>event.target</code> to handle Edit/Delete (event delegation).
          </div>
        </Callout>
      </section>

      <section className="mt-6 rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Project 2: Expense Tracker
        </h2>

        <div className="mt-4 overflow-hidden rounded-lg border bg-white">
          <img
            src="/js/day-3/expense.png"
            alt="Expense tracker UI"
            className="h-auto w-full"
          />
        </div>

        <Callout variant="jsInfo" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>UI:</strong> Top shows total amount (start with{" "}
            <code>10000</code>). Two inputs: Expense name + Amount. “Add” button
            lists items with Edit/Delete and subtracts from total.
          </div>
        </Callout>

        <ul className="mt-4 list-disc pl-6 text-muted-foreground">
          <li>
            Show a <strong>Total</strong> amount at the top (initial:{" "}
            <code>10000</code>).
          </li>
          <li>
            Create 2 inputs:
            <ul className="mt-2 list-disc pl-6">
              <li>
                Expense title (example: <em>Groceries</em>)
              </li>
              <li>
                Amount (number, example: <em>250</em>)
              </li>
            </ul>
          </li>
          <li>
            On Add click:
            <ul className="mt-2 list-disc pl-6">
              <li>Validate: title not empty</li>
              <li>
                Validate: amount is a positive number and not more than current
                total
              </li>
              <li>Add a row in the list with title, amount, Edit, Delete</li>
              <li>
                Subtract amount from Total and update UI instantly
              </li>
            </ul>
          </li>
          <li>
            <strong>Edit flow:</strong> edit title/amount. If amount changes,
            adjust total correctly (return old amount, subtract new amount).
          </li>
          <li>
            <strong>Delete flow:</strong> confirm popup, then remove row and add
            the amount back into the total.
          </li>
        </ul>

        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>Important:</strong> keep your total consistent. Whenever you
            delete or edit an item, re-calculate the total update using the
            item’s previous amount.
          </div>
        </Callout>
      </section>

      <section className="mt-6 rounded-lg border p-5">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          Project 3: Student Marks Management System
        </h2>

        <p className="mt-2 text-muted-foreground">
          This system lets users enter student details and subject marks. On
          clicking <strong>Add</strong>, it adds a new row into the table with{" "}
          <strong>Total</strong> and <strong>Grade</strong> calculated
          automatically. Each row also supports <strong>Edit</strong> and{" "}
          <strong>Delete</strong>.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border bg-white">
            <img
              src="/js/day-3/marks-1.png"
              alt="Student marks system UI - form and table"
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg border bg-white">
            <img
              src="/js/day-3/marks-2.png"
              alt="Student marks system UI - table actions"
              className="h-auto w-full"
            />
          </div>
        </div>

        <Callout variant="jsInfo" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>Inputs:</strong> Name, Hindi, English, Math, Science.{" "}
            <strong>Output:</strong> Marks row + Total + Grade + Action
            (Edit/Delete).
          </div>
        </Callout>

        <ul className="mt-4 list-disc pl-6 text-muted-foreground">
          <li>
            Create a form with inputs:
            <ul className="mt-2 list-disc pl-6">
              <li>
                Student Name (text)
              </li>
              <li>
                Hindi, English, Math, Science (number, 0–100)
              </li>
            </ul>
          </li>
          <li>
            On Add click:
            <ul className="mt-2 list-disc pl-6">
              <li>Validate name is not empty</li>
              <li>
                Validate each subject is a number between <code>0</code> and{" "}
                <code>100</code>
              </li>
              <li>
                Add a new row to the table with: Name, each subject mark, Total,
                Grade
              </li>
              <li>Clear the inputs after adding</li>
            </ul>
          </li>
          <li>
            <strong>Total:</strong> sum of all 4 subjects.
          </li>
          <li>
            <strong>Grade:</strong> based on percentage (Total/400 * 100).
          </li>
          <li>
            <strong>Action column:</strong>
            <ul className="mt-2 list-disc pl-6">
              <li>
                ✏️ <strong>Edit</strong> → update marks and re-calculate Total &
                Grade
              </li>
              <li>
                🗑️ <strong>Delete</strong> → remove row (confirm popup is a
                bonus)
              </li>
            </ul>
          </li>
        </ul>

        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>Grade conditions:</strong>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-semibold">Total %</th>
                    <th className="py-2 font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b">
                  <tr>
                    <td className="py-2 pr-4">90 – 100</td>
                    <td className="py-2">A+</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">80 – 89</td>
                    <td className="py-2">A</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">70 – 79</td>
                    <td className="py-2">B+</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">60 – 69</td>
                    <td className="py-2">B</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">50 – 59</td>
                    <td className="py-2">C</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">40 – 49</td>
                    <td className="py-2">D</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Below 40</td>
                    <td className="py-2">F</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Callout>
      </section>

      <Callout variant="jsAssignment" className="mt-6">
        <h3 className="text-base font-semibold text-[#2e7d32]">✅ Submission</h3>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
          <li>Make all projects responsive (basic mobile friendly layout).</li>
          <li>
            Use clean DOM code: no inline <code>onclick</code> attributes.
          </li>
          <li>
            Bonus: store tasks/expenses/marks in <code>localStorage</code>.
          </li>
        </ul>
      </Callout>
    </LessonContainer>
  );
}

