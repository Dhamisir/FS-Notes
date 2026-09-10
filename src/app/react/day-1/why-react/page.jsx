import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why React",
  description:
    "Explains the pain points of manual DOM manipulation in growing JavaScript apps and how React's data-driven approach to updating the UI solves them.",
  path: "/react/day-1/why-react",
});

export default function WhyReact() {
  return (
    <ReactLesson backHref="/react/day-1" title="2️⃣ Why React? (Problems with JS)">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          As apps grow, plain DOM manipulation becomes repetitive and hard to
          maintain.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Problems in large apps</h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>Too much manual DOM update code</li>
          <li>UI state scattered everywhere</li>
          <li>Hard to reuse chunks consistently</li>
          <li>Small changes cause big bugs</li>
        </ul>
      </section>

      <Callout variant="reactPractice" className="border-l-[#1abc9c] bg-[#e8f8f5]">
        <div className="text-sm text-[#2c3e50]">
          <strong>Why React is powerful?</strong> Instead of creating and updating
          many DOM elements manually, you update data (arrays/state) and React
          updates the UI.
        </div>
      </Callout>
    </ReactLesson>
  );
}

