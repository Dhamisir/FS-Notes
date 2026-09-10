import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

const title = "FS Notes — Full-Stack Web Development Notes & Practice";

export const metadata = {
  ...pageMetadata({
    title,
    description:
      "Full-stack developer notes and practice: CSS, JavaScript, SQL, React, Redux, and Node.js lessons organized day by day, plus a DSA interview roadmap, downloadable coding assignments, and mock interview questions.",
    path: "/",
  }),
  // Bypass the layout's title template on the homepage — this *is* the
  // brand title, so appending "| FS Notes" again would duplicate it.
  title: { absolute: title },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">FS Notes</h1>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/css"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">CSS</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Day 1 → Day 3 complete flow
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/javascript"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">JavaScript</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Day 1 → Day 2 fundamentals
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/sql"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">SQL</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Day 1 → Day 2 query mastery
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/react"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">React</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Day 1 → Day 2 foundation + routing
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/redux"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">Redux</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Day 1 → Day 2 state management path
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/nodejs"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">Node.js</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Day 1 → Day 2 backend fundamentals
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/assignments"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">
              Assignments
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Download starter projects and complete the challenges
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              View assignments →
            </div>
          </Link>

          <Link
            href="/interview"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">Interview</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Preparation notes and questions
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>

          <Link
            href="/dsa"
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">DSA</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Data structures and algorithms
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Open →</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
