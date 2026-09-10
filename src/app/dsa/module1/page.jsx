import Link from "next/link";
import { module1Sections, neetcodeReference } from "@/app/dsa/data";
import { DsaTopicTable } from "@/app/dsa/components/DsaTopicTable";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "DSA Course Roadmap — Module 1 & 2",
  description:
    "Beginner-to-interview-ready DSA course structure: Box 1 covers arrays, complexity, and problem-solving fundamentals, Box 2 builds core interview patterns on top of them.",
  path: "/dsa/module1",
});

export default function DsaModule1Page() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <Link
          href="/dsa"
          className="w-fit text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to DSA Interview Guide
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50] sm:text-4xl">
          🚀 DSA Course Roadmap (Beginner to Interview Ready)
        </h1>
        <p className="max-w-3xl text-muted-foreground">
          Complete Box 1 first to build fundamentals, then move to Box 2 for
          core interview patterns.
        </p>
        <a
          href={neetcodeReference.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          📍 Main Roadmap Reference — {neetcodeReference.label}
        </a>
      </div>

      {module1Sections.map((section, index) => (
        <section
          key={section.id}
          className="overflow-hidden rounded-3xl border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-2xl">{section.emoji}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Box {index + 1}
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
            {section.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{section.subtitle}</p>
          <DsaTopicTable topics={section.topics} layout={section.layout} />
        </section>
      ))}
    </div>
  );
}
