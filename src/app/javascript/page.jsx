import Link from "next/link";
import { jsDays } from "@/app/javascript/data";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "JavaScript Notes",
  description:
    "Core JavaScript fundamentals for building interactive web pages: variables, data types, operators, loops, DOM manipulation, arrays, objects, and functions, organized day by day.",
  path: "/javascript",
});

export default function JavaScriptHome() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
          JavaScript
        </h1>
        <Callout variant="jsIntro">
          <p className="text-sm text-[#2c3e50]">
            Master core fundamentals and learn to build interactive web pages.
          </p>
        </Callout>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {jsDays.map((day) => (
          <Link
            key={day.slug}
            href={`/javascript/${day.slug}`}
            className="rounded-xl border bg-white p-5 text-[#2c3e50] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">
              {day.title}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {day.description}
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {day.lessons.length} lesson{day.lessons.length === 1 ? "" : "s"} →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

