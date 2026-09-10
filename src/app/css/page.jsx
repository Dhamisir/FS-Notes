import Link from "next/link";
import { cssDays } from "@/app/css/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CSS Notes",
  description:
    "Complete CSS learning path from selectors and the box model to Flexbox, Grid, and positioning, with a Monaco code viewer and a hands-on assignment for each day.",
  path: "/css",
});

export default function CssHome() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
          CSS
        </h1>
        <p className="text-muted-foreground">
          Complete CSS flow migrated to Next.js with reusable pages and Monaco
          code viewer.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cssDays.map((day) => (
          <Link
            key={day.slug}
            href={`/css/${day.slug}`}
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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

