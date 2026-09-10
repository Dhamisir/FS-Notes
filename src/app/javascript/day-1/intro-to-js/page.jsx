import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Introduction to JavaScript",
  description:
    "Beginner-friendly intro covering what a programming language is, what JavaScript does alongside HTML and CSS, and how to include JS in a page with the script tag.",
  path: "/javascript/day-1/intro-to-js",
});

export default function IntroToJs() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="🚀 Introduction to JavaScript"
    >
      <section>
        <strong className="text-[#2c3e50]">✅ 1) What is a Programming Language?</strong>
        <p className="mt-2 text-muted-foreground">
          A programming language is a set of instructions we give to a computer
          to perform specific tasks.
        </p>
        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>Real-life analogy:</strong>
            <br />
            📌 Think like giving instructions to a robot:
            <br />
            <em>“Go forward, stop, turn right, pick up book.”</em>
            <br />
            That’s programming!
          </div>
        </Callout>
      </section>

      <section>
        <strong className="text-[#2c3e50]">✅ 2) What is JavaScript?</strong>
        <p className="mt-2 text-muted-foreground">
          JavaScript (JS) is the “Brain” of the web. It makes websites
          interactive and dynamic.
        </p>
        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>The Web Trinity:</strong>
            <br />
            🦴 <strong>HTML:</strong> Structure (Skeleton)
            <br />
            🎨 <strong>CSS:</strong> Presentation (Skin/Clothes)
            <br />
            🧠 <strong>JS:</strong> Behavior (Brain/Engine)
          </div>
        </Callout>
      </section>

      <section>
        <strong className="text-[#2c3e50]">✅ 3) The &lt;script&gt; Tag</strong>
        <p className="mt-2 text-muted-foreground">
          We use the <code>&lt;script&gt;</code> tag to include JavaScript in
          our HTML files.
        </p>
        <CodeBlock
          language="html"
          code={`<script>
  alert("Welcome to JS Day 1!");
</script>`}
        />
        <p className="text-sm text-muted-foreground">
          <em>
            Pro Tip: Place your script tags at the end of the body for better
            performance.
          </em>
        </p>
      </section>
    </LessonContainer>
  );
}

