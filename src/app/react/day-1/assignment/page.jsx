import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "React Day 1 Assignment" };

function Task({ badge, title, children }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[#e74c3c] px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
        <div className="text-base font-semibold text-[#2c3e50]">{title}</div>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export default function ReactDay1Assignment() {
  return (
    <ReactLesson backHref="/react/day-1" title="🎯 Day 1 Assignment: Getting Started">
      <Callout variant="reactIntro">
        <p className="text-sm text-[#2c3e50]">
          These tasks help you practice the core concepts from Day 1.
        </p>
      </Callout>

      <Task badge="Task 1" title="Build Your First React App">
        Use Vite to create <code>my-first-react-app</code>. Clear <code>App.jsx</code> and display:{" "}
        <i>Hello, I am [Your Name], and I am learning React!</i>
        <details className="mt-3 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock
              language="jsx"
              code={`function App() {
  return (
    <div>
      <h1>Hello, I am [Your Name], and I am learning React!</h1>
    </div>
  );
}

export default App;`}
            />
          </div>
        </details>
      </Task>

      <Task badge="Task 2" title="Component Practice">
        Create <code>components/</code> folder. Add <code>Header.jsx</code> and{" "}
        <code>Footer.jsx</code>. Import and render them in <code>App.jsx</code>.
        <details className="mt-3 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 grid gap-3">
            <CodeBlock
              language="jsx"
              code={`// Header.jsx
export default function Header() {
  return <header><h2>My Awesome Page</h2></header>;
}`}
            />
            <CodeBlock
              language="jsx"
              code={`// Footer.jsx
export default function Footer() {
  return <footer><p>© 2024 My Portfolio</p></footer>;
}`}
            />
            <CodeBlock
              language="jsx"
              code={`// App.jsx
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to My Site</h1>
      <Footer />
    </div>
  );
}

export default App;`}
            />
          </div>
        </details>
      </Task>

      <Task badge="Task 3" title="Profile Props Challenge">
        Create a <code>UserProfile</code> component that accepts <code>name</code>,{" "}
        <code>age</code>, and <code>city</code> props, then render five users.
        <details className="mt-3 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock
              language="jsx"
              code={`function UserProfile({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserProfile name="Rahul" age={25} city="Delhi" />
      <UserProfile name="Sanya" age={22} city="Mumbai" />
      <UserProfile name="Amit" age={24} city="Pune" />
      <UserProfile name="Neha" age={23} city="Jaipur" />
      <UserProfile name="Kabir" age={26} city="Bengaluru" />
    </div>
  );
}

export default App;`}
            />
          </div>
        </details>
      </Task>

      <Task badge="Task 4" title="JSX Challenge">
        Create <code>currentTime</code> using <code>new Date().toLocaleTimeString()</code> and display it via {"{ }"}.
        <details className="mt-3 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock
              language="jsx"
              code={`function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Current Time: {currentTime}</h1>
      <p>Refresh the page to see the time update!</p>
    </div>
  );
}

export default App;`}
            />
          </div>
        </details>
      </Task>

      <Task badge="Task 5 (Theoretical)" title='The "Why React" Summary'>
        Write 3 differences between MPA and SPA in your own words.
      </Task>

      <Callout variant="reactPractice" className="border-l-[#1abc9c] bg-[#e8f8f5]">
        <h3 className="text-base font-semibold text-[#16a085]">
          🚀 Why React is powerful?
        </h3>
        <p className="mt-2 text-sm text-[#2c3e50]">
          In traditional JS, building UI often means creating many DOM elements
          manually. In React, you update data and React updates the UI.
        </p>
      </Callout>
    </ReactLesson>
  );
}
