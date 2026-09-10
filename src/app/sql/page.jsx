import Link from "next/link";
import { sqlDays } from "@/app/sql/data";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SQL Notes",
  description:
    "Learn databases from fundamentals to joins and aggregation with ready-to-run SQL examples covering tables, constraints, filtering, grouping, and multi-table queries.",
  path: "/sql",
});

export default function SqlHome() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#333]">
          SQL
        </h1>
        <Callout variant="sqlIntro">
          <p className="text-sm text-[#333]">
            Learn databases from fundamentals to joins and aggregation with
            ready-to-run SQL examples.
          </p>
        </Callout>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sqlDays.map((day) => (
          <Link
            key={day.slug}
            href={`/sql/${day.slug}`}
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

