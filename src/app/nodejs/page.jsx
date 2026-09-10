import Link from "next/link";
import { nodeDays } from "@/app/nodejs/data";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Node.js Notes",
  description:
    "Backend fundamentals with the Node.js runtime and Express patterns: modules, the fs module, folder structure, and an intro to databases.",
  path: "/nodejs",
});

export default function NodeHome() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#333]">
          Node.js
        </h1>
        <Callout variant="nodeIntro">
          <p className="text-sm text-[#333]">
            Backend fundamentals with Node.js runtime + Express patterns.
          </p>
        </Callout>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {nodeDays.map((day) => (
          <Link
            key={day.slug}
            href={`/nodejs/${day.slug}`}
            className="rounded-xl border bg-white p-5 text-[#333] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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

