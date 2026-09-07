import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "Props" };

export default function Props() {
  return (
    <ReactLesson backHref="/react/day-1" title="8️⃣ Props: Passing Data to Components">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          Props are inputs to components. They come from the parent and are
          read-only.
        </div>
      </Callout>

      <CodeBlock
        language="jsx"
        code={`function UserProfile({ name, age, city }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserProfile name="Rahul" age={25} city="Delhi" />
      <UserProfile name="Sanya" age={22} city="Mumbai" />
    </div>
  );
}`}
      />
    </ReactLesson>
  );
}
