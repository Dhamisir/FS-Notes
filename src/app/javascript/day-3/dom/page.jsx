import { LessonContainer } from "@/components/notes/LessonContainer";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "DOM (Document Object Model)",
  description:
    "Deep dive into the DOM: nodes vs elements, all the ways to select and traverse elements, reading/writing content and attributes, classes and styles, event handling with bubbling and delegation, and creating or removing elements dynamically.",
  path: "/javascript/day-3/dom",
});

export default function DomDay3() {
  return (
    <LessonContainer
      backHref="/javascript/day-3"
      backLabel="Back to Menu"
      title="🧩 DOM (Deep Dive)"
    >
      <p className="text-muted-foreground">
        The <strong>DOM</strong> (Document Object Model) is the browser’s
        JavaScript-friendly representation of your HTML. When you select, change,
        create, or remove elements, you’re working with the DOM.
      </p>

      <Callout variant="jsInfo" className="mt-4">
        <div className="text-sm text-[#2c3e50]">
          <strong>Think of it like this:</strong> HTML is the page, DOM is the
          <em> tree of objects</em> the browser builds from that HTML, and
          JavaScript controls that tree.
        </div>
      </Callout>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1) DOM basics: nodes vs elements
        </h2>
        <p className="mt-2 text-muted-foreground">
          In the DOM, everything is a <strong>node</strong>. The most useful
          nodes are <strong>elements</strong> (HTML tags). This matters when you
          traverse the DOM (some APIs include text nodes like spaces/newlines).
        </p>

        <CodeBlock
          language="javascript"
          code={`// These return ELEMENT nodes
document.body; // <body>
document.documentElement; // <html>

// Node vs Element traversal
const el = document.querySelector("#container");
el.childNodes; // includes text nodes (spaces/newlines)
el.children; // elements only`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2) Selecting elements (all the main ways)
        </h2>
        <p className="mt-2 text-muted-foreground">
          Most DOM work starts with selecting elements.{" "}
          <code>querySelector</code> / <code>querySelectorAll</code> are the most
          flexible (CSS selectors). There are also older “getElement…” methods
          you’ll see in codebases.
        </p>

        <CodeBlock
          language="javascript"
          code={`// Modern (recommended)
const title = document.querySelector("#title"); // first match
const cards = document.querySelectorAll(".card"); // NodeList

// Classic (still common)
const byId = document.getElementById("title"); // element or null
const byClass = document.getElementsByClassName("card"); // HTMLCollection (live)
const byTag = document.getElementsByTagName("li"); // HTMLCollection (live)

// Scoped selection (search inside an element)
const list = document.querySelector("#todoList");
const buttonsInList = list.querySelectorAll("button");`}
        />

        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>NodeList vs HTMLCollection:</strong> both look “array-like”
            but are not arrays. <code>getElementsByClassName</code> returns a{" "}
            <em>live</em> collection (updates automatically as DOM changes),
            while <code>querySelectorAll</code> returns a <em>static</em>{" "}
            snapshot.
          </div>
        </Callout>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3) Traversing the DOM (parents, children, siblings)
        </h2>
        <p className="mt-2 text-muted-foreground">
          After you select one element, you often need to move around it. These
          APIs are your “DOM navigation”.
        </p>

        <CodeBlock
          language="javascript"
          code={`const item = document.querySelector(".item");

item.parentElement; // parent element
item.closest(".card"); // nearest ancestor that matches selector

item.children; // element children
item.firstElementChild;
item.lastElementChild;

item.previousElementSibling;
item.nextElementSibling;`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          4) Reading & changing content
        </h2>
        <p className="mt-2 text-muted-foreground">
          Use <code>textContent</code> for plain text and <code>innerHTML</code>{" "}
          only when you intentionally want to inject HTML.
        </p>

        <CodeBlock
          language="javascript"
          code={`const msg = document.querySelector("#message");

// Read
console.log(msg.textContent);

// Update text safely
msg.textContent = "Saved ✅";

// Insert HTML (be careful with user input)
msg.innerHTML = "<b>Saved</b> ✅";`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          5) Attributes vs properties + dataset
        </h2>
        <p className="mt-2 text-muted-foreground">
          Attributes live in HTML (<code>&lt;input value="x"&gt;</code>).
          Properties live on the DOM object (<code>input.value</code>). They are
          related but not always the same.
        </p>

        <CodeBlock
          language="javascript"
          code={`const input = document.querySelector("input");

// Property (current value)
console.log(input.value);
input.value = "Hello";

// Attribute (what's written in HTML)
console.log(input.getAttribute("value"));
input.setAttribute("value", "Default");

// data-* attributes → dataset
// <button data-id="42" data-action="delete">Delete</button>
const btn = document.querySelector("button");
console.log(btn.dataset.id); // "42"
console.log(btn.dataset.action); // "delete"`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          6) Classes and styles
        </h2>
        <p className="mt-2 text-muted-foreground">
          Prefer <code>classList</code> for CSS classes, and use{" "}
          <code>style</code> only for quick inline styling.
        </p>

        <CodeBlock
          language="javascript"
          code={`const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");
box.classList.contains("active"); // true/false

// Inline style (JS property names are camelCase)
box.style.backgroundColor = "gold";
box.style.padding = "12px";`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          7) Events (click, input, submit...) + event object
        </h2>
        <p className="mt-2 text-muted-foreground">
          Use <code>addEventListener</code> to react to user actions.
        </p>

        <CodeBlock
          language="html"
          code={`<form id="profileForm">
  <input id="nameInput" placeholder="Type your name..." />
  <button id="saveBtn" type="submit">Save</button>
</form>`}
        />

        <CodeBlock
          language="javascript"
          code={`const form = document.querySelector("#profileForm");
const saveBtn = document.querySelector("#saveBtn");
const nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("input", (event) => {
  console.log("Current value:", event.target.value);
});

saveBtn.addEventListener("click", (event) => {
  console.log("Clicked:", event.type);
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh
  console.log("Submitting name:", nameInput.value);
});`}
        />

        <Callout variant="jsInfo" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>Tip:</strong> if your script runs before the HTML exists,
            wrap your code:
            <div className="mt-2">
              <CodeBlock
                language="javascript"
                code={`document.addEventListener("DOMContentLoaded", () => {
  // all DOM selection & listeners here
});`}
              />
            </div>
          </div>
        </Callout>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          8) Bubbling, capturing, and stopping propagation
        </h2>
        <p className="mt-2 text-muted-foreground">
          Events usually <strong>bubble</strong> up (child → parent → document).
          That’s why event delegation works. Sometimes you’ll want to stop a
          click from reaching parent handlers.
        </p>

        <CodeBlock
          language="javascript"
          code={`const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => console.log("parent click"));

child.addEventListener("click", (event) => {
  console.log("child click");
  event.stopPropagation(); // prevents parent click handler
});

// Capturing (rare): set third argument to true
document.addEventListener("click", () => console.log("capturing"), true);`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          9) Creating, inserting, and removing elements
        </h2>
        <p className="mt-2 text-muted-foreground">
          This is how you build UI dynamically: create nodes, set content, then
          append them to the page.
        </p>

        <CodeBlock
          language="html"
          code={`<ul id="todoList"></ul>`}
        />

        <CodeBlock
          language="javascript"
          code={`const list = document.querySelector("#todoList");

function addTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => li.remove());

  li.append(" ", removeBtn);
  list.appendChild(li);
}

addTodo("Learn DOM");
addTodo("Practice events");`}
        />

        <Callout variant="jsExample" className="mt-4">
          <div className="text-sm text-[#2c3e50]">
            <strong>More insert options:</strong>{" "}
            <code>prepend</code>, <code>before</code>, <code>after</code>, and{" "}
            <code>insertAdjacentHTML</code>.
            <div className="mt-2">
              <CodeBlock
                language="javascript"
                code={`const box = document.querySelector("#box");
box.prepend("Start ");
box.append(" End");

// Insert HTML at a specific position
box.insertAdjacentHTML("beforeend", "<span>New</span>");`}
              />
            </div>
          </div>
        </Callout>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          10) Event delegation (handle many items efficiently)
        </h2>
        <p className="mt-2 text-muted-foreground">
          If you have many children (or children added later), attach one
          listener to the parent and check what was clicked.
        </p>

        <CodeBlock
          language="javascript"
          code={`const list = document.querySelector("#todoList");

list.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    event.target.closest("li")?.remove();
  }
});`}
        />
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          11) Size/position (very common in UI work)
        </h2>
        <p className="mt-2 text-muted-foreground">
          These help you read element dimensions and position (useful for
          dropdowns, tooltips, sticky headers, etc.).
        </p>

        <CodeBlock
          language="javascript"
          code={`const el = document.querySelector("#box");

el.getBoundingClientRect(); // size + position relative to viewport
el.offsetWidth; // includes borders
el.clientWidth; // excludes borders, includes padding

window.scrollY; // page scroll
window.addEventListener("scroll", () => {
  // react to scrolling
});`}
        />
      </section>

      <Callout variant="jsAssignment" className="mt-6">
        <h3 className="text-base font-semibold text-[#2e7d32]">
          🎯 Practice (10 minutes)
        </h3>
        <ol className="mt-2 list-decimal pl-6 text-sm text-[#2c3e50]">
          <li>
            Create an HTML page with <code>&lt;h1 id="title"&gt;</code>, a{" "}
            <code>&lt;button id="btn"&gt;</code>, and a{" "}
            <code>&lt;ul id="list"&gt;</code>.
          </li>
          <li>
            On button click, add a new <code>&lt;li&gt;</code> to the list with
            the current time.
          </li>
          <li>
            Clicking any list item should toggle a class{" "}
            <code>done</code> (use event delegation).
          </li>
        </ol>
      </Callout>
    </LessonContainer>
  );
}

