import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SPA vs MPA",
  description:
    "Contrasts multi-page applications, which reload a new HTML page per route, with single-page applications, which swap views in the browser without a full reload.",
  path: "/react/day-1/spa-vs-mpa",
});

export default function SpaVsMpa() {
  return (
    <ReactLesson backHref="/react/day-1" title="4️⃣ SPA (Single Page Application)">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          <strong>MPA</strong> loads a new HTML page on each route.{" "}
          <strong>SPA</strong> loads once and swaps views/components without
          full reload.
        </div>
      </Callout>

      <div className="grid gap-4 sm:grid-cols-2">
        <Callout variant="reactPractice">
          <b>MPA</b>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>Full page reload per navigation</li>
            <li>Server renders new page</li>
            <li>Feels slower between pages</li>
          </ul>
        </Callout>
        <Callout variant="reactPractice" className="border-l-[#61dafb]">
          <b>SPA</b>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>No full reload</li>
            <li>UI updates by JS + components</li>
            <li>State can stay in memory</li>
          </ul>
        </Callout>
      </div>
    </ReactLesson>
  );
}

