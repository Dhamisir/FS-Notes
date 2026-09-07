import Link from "next/link";
import { reactDays } from "@/app/react/data";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "React Notes" };

export default function ReactHome() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#0174af]">
          React
        </h1>
        <Callout variant="reactInfo">
          <p className="text-sm text-[#195568]">
            Learn React foundations, routing, props, state, and form handling
            with practical examples.
          </p>
        </Callout>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {reactDays.map((day) => (
          <Link
            key={day.slug}
            href={`/react/${day.slug}`}
            className="rounded-xl border bg-white p-5 text-[#195568] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight text-[#0174af]">
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

      <Link
        href="/react/final-assignment"
        className="rounded-xl border bg-white p-5 text-[#195568] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="text-lg font-semibold tracking-tight text-[#0174af]">
          🏁 Final Assignment: Product Store App
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          A capstone task covering components &amp; props, React Router,
          useState, and useEffect with a real API.
        </div>
      </Link>
    </div>
  );
}

