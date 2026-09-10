import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "React Routing",
  description:
    "Introduces the concept of client-side routing in React, comparing traditional full-page-reload navigation with the SPA approach and explaining why routing matters.",
  path: "/react/day-2/react-routing",
});

export default function ReactRouting() {
  return (
    <ReactLesson
      backHref="/react/day-2"
      title="🌍 React Routing (Multiple Pages in React)"
    >
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50]">🧠 Simple meaning</h2>
        <p className="mt-2 text-muted-foreground">
          Routing means showing different pages when the URL changes. In
          traditional websites, clicking a link reloads the browser and fetches
          a new HTML page.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">1️⃣ The React way (SPA)</h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            The page <strong>does not reload</strong>
          </li>
          <li>React switches components on the screen</li>
          <li>Feels fast like a mobile app</li>
        </ul>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold text-[#0174af]">Normal HTML Website</div>
            <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
              <li>Browser reloads</li>
              <li>New HTML file fetched</li>
              <li>State is lost</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold text-[#0174af]">React App (SPA)</div>
            <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
              <li>No reload</li>
              <li>Only components change</li>
              <li>State is preserved</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2️⃣ Why do we need routing?
        </h2>
        <Callout variant="reactMini">
          <ul className="list-disc pl-6 text-sm text-[#2c3e50]">
            <li>
              ✅ <strong>Different URLs</strong>: bookmark <code>/login</code>,{" "}
              <code>/about</code>
            </li>
            <li>
              ✅ <strong>Organization</strong>: separate code for pages
            </li>
            <li>
              ✅ <strong>Back/Forward</strong>: browser navigation works
            </li>
            <li>
              ✅ <strong>Testing</strong>: test pages individually
            </li>
          </ul>
        </Callout>
      </section>
    </ReactLesson>
  );
}

