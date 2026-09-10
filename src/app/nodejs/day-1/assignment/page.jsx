import { NodeLesson } from "@/app/nodejs/components/NodeLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Node Day 1 Assignment",
  description:
    "Graduation assignment for Node.js Day 1: build a calculator module with module.exports, log timestamped activity to a file with fs.appendFile, and read free RAM and home directory with the os module.",
  path: "/nodejs/day-1/assignment",
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

export default function NodeDay1Assignment() {
  return (
    <NodeLesson
      backHref="/nodejs/day-1"
      title="🎯 Day 1 Graduation Assignment: Node Essentials"
    >
      <Callout variant="nodeIntro">
        <p className="text-sm text-[#333]">Execute these tasks using your terminal.</p>
      </Callout>

      <Task
        title="Task 1: The Calculator Module"
        items={[
          "Create math.js with add, sub, and mul functions.",
          "Export them using module.exports.",
          "Import them into app.js and show some results.",
        ]}
      />

      <Task
        title="Task 2: File Logger"
        items={[
          "Create a log file activity.txt.",
          "Use fs.appendFile to add a timestamp when the script runs.",
        ]}
      />

      <Task
        title="Task 3: OS info"
        items={[
          "Use the os module to find Free RAM and Home Directory.",
        ]}
      />
    </NodeLesson>
  );
}

