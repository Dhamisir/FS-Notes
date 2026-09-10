import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 1 Assignment: Career Resume",
  description:
    "Assignment: recreate a career resume layout using external CSS, proper heading tags, a border-radius profile image, lists for skills and experience, and a professional color palette.",
  path: "/css/day-1/assignment",
});

export default function Day1Assignment() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Link
        href="/css/day-1"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 1
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">
        Day 1 Assignment: Career Resume
      </h1>

      <section className="w-full max-w-3xl rounded-2xl bg-white p-8 text-left shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
        <h2 className="text-lg font-semibold text-foreground">
          Objective: Recreate your Resume using pure CSS
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Using the properties we learned today (Fonts, Colors, Margins, Borders,
          and Selectors), recreate the layout shown in the image below.
        </p>

        <div className="mt-6 rounded-md bg-[#e3f2fd] p-5 text-foreground shadow-sm">
          <div className="font-semibold">Requirements:</div>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>
              Use <b>External CSS</b> for all styling.
            </li>
            <li>
              Use proper <b>Heading tags</b> (<code>h1</code>, <code>h2</code>)
              for sections.
            </li>
            <li>
              Implement a <b>Profile Image</b> using <code>border-radius</code>.
            </li>
            <li>
              Use <b>Lists</b> for skills and experience.
            </li>
            <li>Apply a professional color palette.</li>
          </ul>
        </div>

        <a
          href="/css/day-1/resume.png"
          target="_blank"
          rel="noreferrer"
          className="mt-6 block"
        >
          <img
            src="/css/day-1/resume.png"
            alt="Resume Assignment"
            className="mx-auto w-full max-w-2xl rounded-lg border border-black/10 shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
          />
        </a>
        <p className="mt-3 text-center text-sm italic text-muted-foreground">
          Sample Design Reference
        </p>
      </section>
    </div>
  );
}

