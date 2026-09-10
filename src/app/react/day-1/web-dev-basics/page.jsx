import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Dev Basics",
  description:
    "Covers the web fundamentals behind React: client-server communication, HTTP requests and responses, the roles of HTML/CSS/JavaScript, and the request-render-interact cycle.",
  path: "/react/day-1/web-dev-basics",
});

export default function WebDevBasics() {
  return (
    <ReactLesson
      backHref="/react/day-1"
      title="1️⃣ Web Development Basics & How Web Works"
    >
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          React is built on top of core web concepts. Before React, make sure you
          understand:
          <ul className="mt-2 list-disc pl-6">
            <li>Client vs server</li>
            <li>HTTP request/response</li>
            <li>HTML, CSS, JavaScript roles</li>
            <li>DOM and events</li>
          </ul>
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">How the web works</h2>
        <ol className="mt-2 list-decimal pl-6 text-muted-foreground">
          <li>Browser requests a URL</li>
          <li>Server responds with HTML/CSS/JS (and data)</li>
          <li>Browser renders UI and runs JS</li>
          <li>User interacts → events → updates UI</li>
        </ol>
      </section>
    </ReactLesson>
  );
}

