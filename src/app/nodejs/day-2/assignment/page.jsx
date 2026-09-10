import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Node Day 2 Assignment",
  description:
    "Day 2 project: build a User Management API with Express using an MVC folder structure, including a /profile route, POST /login and GET /all endpoints, and a bonus request-logging middleware.",
  path: "/nodejs/day-2/assignment",
});

function Task({ title, items }) {
  return (
    <section className="rounded-xl border bg-white p-5">
      <h2 className="text-lg font-semibold text-[#2c3e50]">{title}</h2>
      <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}

export default function NodeDay2Assignment() {
  return (
    <NodeLesson
      backHref="/nodejs/day-2"
      title="🎯 Day 2 Project: The User Management API"
    >
      <Callout variant="nodeIntro">
        <p className="text-sm text-[#333]">
          Combine Express, folder structure, and logic.
        </p>
      </Callout>

      <Task
        title="Task 1: Basic Server Setup"
        items={[
          "Initialize npm init -y.",
          "Install express.",
          "Create index.js as the main file.",
        ]}
      />

      <Task
        title="Task 2: API Architecture (MVC)"
        items={[
          "Create routes/user.routes.js.",
          "Create controllers/user.controller.js.",
          "Build a /profile route returning a hardcoded user object.",
        ]}
      />

      <Task
        title="Task 3: Multiple Routes"
        items={[
          'Add POST /login endpoint (even if it returns "Logged in").',
          "Add GET /all endpoint to list users.",
          "Test routes using Postman or the browser.",
        ]}
      />

      <Task
        title="Task 4: Bonus Challenge"
        items={[
          "Add middleware that logs current time on every request.",
        ]}
      />
    </NodeLesson>
  );
}

