import { starterAssignments } from "@/app/assignments/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Coding Assignments",
  description:
    "Download starter React, Node.js, Express, and MySQL projects and complete real backend challenges — from connecting a frontend to live data through to authentication, authorization, and validation.",
  path: "/assignments",
});

export default function AssignmentsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#0174af]">
          📋 Assignments
        </h1>
        <p className="text-sm text-muted-foreground">
          Download a starter project, complete its challenge, and test your
          result locally.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <div className="grid gap-4">
          {starterAssignments.map((assignment) => (
            <article
              key={assignment.number}
              className="group flex flex-col gap-4 rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#e6f5fb] text-sm font-bold text-[#0174af]">
                  {assignment.number}
                </div>
                <div>
                  <h3 className="font-semibold text-[#195568]">
                    {assignment.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {assignment.description}
                  </p>
                  <p className="mt-2 text-xs font-medium text-[#517481]">
                    {assignment.stack}
                  </p>
                </div>
              </div>

              <a
                href={assignment.download}
                download
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#0174af] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#005f91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0174af] focus-visible:ring-offset-2"
              >
                Download ZIP ↓
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
