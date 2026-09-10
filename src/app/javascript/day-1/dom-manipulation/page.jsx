import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "DOM Manipulation",
  description:
    "Introduction to the document object: selecting elements by ID or selector, changing their text/HTML content and inline styles, and responding to button clicks.",
  path: "/javascript/day-1/dom-manipulation",
});

export default function DomManipulation() {
  return (
    <LessonContainer
      backHref="/javascript/day-1"
      backLabel="Back to Menu"
      title="🌐 DOM Manipulation (The document Object)"
    >
      <p className="text-muted-foreground">
        The <strong>document</strong> object is our gateway to the HTML page. It
        allows JavaScript to “talk” to the browser.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1. Selecting Elements
        </h2>
        <p className="mt-2 text-muted-foreground">
          To change something on the page, we first need to <b>find</b> it.
        </p>
        <CodeBlock
          language="javascript"
          code={`// Find element by its ID
let myTitle = document.getElementById("main-title");

// Find element using CSS-like selection
let myBtn = document.querySelector(".my-button");`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2. Changing Content
        </h2>
        <p className="mt-2 text-muted-foreground">
          Once we have an element, we can change what’s inside it.
        </p>
        <CodeBlock
          language="javascript"
          code={`// Changes just the text
myTitle.innerText = "Hello JavaScript!";

// Changes HTML (allows tags like <b>)
myTitle.innerHTML = "<i>Welcome to the Course</i>";`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3. Changing Style
        </h2>
        <p className="mt-2 text-muted-foreground">
          We can change the look and feel directly from JS.
        </p>
        <CodeBlock
          language="javascript"
          code={`myTitle.style.color = "red";
myTitle.style.backgroundColor = "yellow";
myTitle.style.fontSize = "40px";`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          4. Handling User Interaction
        </h2>
        <p className="mt-2 text-muted-foreground">
          We can make things happen when a user clicks a button.
        </p>

        <Callout variant="jsInfo">
          <div className="text-sm text-[#2c3e50]">
            <strong>HTML:</strong>
            <div className="mt-2">
              <CodeBlock
                language="html"
                code={`<button onclick="changeMe()">Click Me</button>`}
              />
            </div>
            <strong className="mt-3 block">JS:</strong>
            <div className="mt-2">
              <CodeBlock
                language="javascript"
                code={`function changeMe() {
  document.body.style.backgroundColor = "lightblue";
  alert("Page color changed!");
}`}
              />
            </div>
          </div>
        </Callout>
      </section>

      <Callout variant="jsAssignment">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Minute Activity
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Create an input field:{" "}
            <code>&lt;input type="text" id="userInput"&gt;</code>.
          </li>
          <li>
            Write a function that gets the value of the input using{" "}
            <code>.value</code> and shows it in an alert.
          </li>
          <li>
            Change the font color of every <code>&lt;h1&gt;</code> to your
            favorite color.
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

