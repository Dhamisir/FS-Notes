import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "DSA Interview Roadmap",
  description:
    "A company-focused data structures and algorithms roadmap prioritizing the patterns that repeatedly show up in Amazon, Google, and Meta interview loops — arrays, hashing, trees, graphs, heaps, greedy, DP, and backtracking.",
  path: "/dsa",
});

const weightage = [
  ["Arrays + Strings", "⭐⭐⭐⭐⭐"],
  ["Hashing", "⭐⭐⭐⭐⭐"],
  ["Trees / Graphs", "⭐⭐⭐⭐"],
  ["Binary Search", "⭐⭐⭐⭐"],
  ["Heap", "⭐⭐⭐"],
  ["Greedy", "⭐⭐⭐"],
  ["DP", "⭐⭐⭐⭐ (for higher roles)"],
  ["Backtracking", "⭐⭐⭐"],
  ["Advanced DS", "⭐⭐"],
];

const modules = [
  {
    title: "Arrays + Hashing (Amazon-heavy)",
    href: "/dsa/module1",
  },
  { title: "Binary Search (Google-style thinking)" },
  { title: "Trees & Graphs (Meta-heavy)" },
  { title: "Heap + Greedy" },
  { title: "DP + Backtracking" },
  { title: "Advanced (Graph + Stack + Bit)" },
];

const interviewPatterns = [
  {
    icon: "🟢",
    title: "Arrays + Strings + Hashing",
    badge: "MOST ASKED",
    color: "from-emerald-500 to-teal-500",
    patterns: ["Two Pointers", "Sliding Window", "Prefix Sum"],
    algorithms: ["Kadane's Algorithm", "Subarray Sum (Prefix + HashMap)", "Longest Substring"],
    companies: ["Amazon (VERY heavy)", "Meta Platforms", "Google"],
    note: "This is your #1 priority module.",
  },
  {
    icon: "🔵",
    title: "Binary Search",
    color: "from-blue-500 to-cyan-500",
    patterns: ["Binary Search on array", "Binary Search on answer"],
    algorithms: ["Lower Bound / Upper Bound", "Search in Rotated Array"],
    companies: ["Google (very common)", "Amazon"],
  },
  {
    icon: "🟣",
    title: "Trees & Graphs",
    color: "from-violet-500 to-fuchsia-500",
    patterns: ["DFS", "BFS"],
    algorithms: ["Tree Traversals", "Lowest Common Ancestor", "Number of Islands"],
    companies: ["Meta Platforms (VERY heavy)", "Google"],
  },
  {
    icon: "🔴",
    title: "Heap / Priority Queue",
    color: "from-rose-500 to-orange-500",
    patterns: ["Top K problems"],
    algorithms: ["Kth Largest Element", "Merge K Sorted Lists"],
    companies: ["Amazon", "Google"],
  },
  {
    icon: "🟡",
    title: "Greedy",
    color: "from-amber-400 to-yellow-500",
    patterns: ["Interval / scheduling"],
    algorithms: ["Merge Intervals", "Activity Selection"],
    companies: ["Google", "Meta Platforms"],
  },
  {
    icon: "⚫",
    title: "Dynamic Programming",
    badge: "HIGH VALUE",
    color: "from-slate-700 to-slate-950",
    patterns: ["1D DP", "2D DP"],
    algorithms: ["Kadane's", "Knapsack", "LIS"],
    companies: ["Google (common in strong rounds)", "Amazon"],
  },
  {
    icon: "🟤",
    title: "Backtracking",
    color: "from-orange-700 to-stone-600",
    patterns: ["Try all combinations"],
    algorithms: ["Subsets", "Permutations", "Combination Sum"],
    companies: ["Google", "Meta Platforms"],
  },
  {
    icon: "⚪",
    title: "Stack / Monotonic Stack",
    color: "from-zinc-300 to-slate-500",
    patterns: ["Next greater / smaller"],
    algorithms: ["Next Greater Element", "Largest Rectangle"],
    companies: ["Amazon", "Google"],
  },
  {
    icon: "🔘",
    title: "Graph Advanced",
    color: "from-indigo-500 to-sky-500",
    patterns: ["Connectivity / ordering"],
    algorithms: ["Topological Sort", "Union-Find"],
    companies: ["Google", "Meta Platforms"],
  },
  {
    icon: "⚙️",
    title: "Bit Manipulation",
    color: "from-gray-600 to-gray-900",
    patterns: ["XOR thinking", "Bit checks"],
    algorithms: ["XOR tricks", "Power of 2"],
    companies: ["Google (sometimes tricky rounds)"],
  },
];

function PillList({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DsaPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10">
      <Link
        href="/"
        className="w-fit text-sm text-muted-foreground hover:text-foreground"
      >
        ← Home
      </Link>

      <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-sm">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              DSA Interview Roadmap
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Company-focused DSA preparation
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Prioritize the patterns that repeatedly show up in Amazon, Google,
              Meta, and higher-level interview rounds.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="text-sm text-slate-300">Top priority</div>
            <div className="mt-2 text-3xl font-semibold">Arrays + Hashing</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Start here first. It gives the best return for most interview
              loops and unlocks sliding window, prefix sum, and hashmap rounds.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">
            📊 Real Interview Weightage
          </h2>
          <div className="mt-5 overflow-hidden rounded-2xl border">
            {weightage.map(([topic, importance], index) => (
              <div
                key={topic}
                className={`grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <span className="font-medium text-slate-800">{topic}</span>
                <span className="text-right text-amber-500">{importance}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">
            📊 Final Course Structure
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {modules.map((module, index) => {
              const className = [
                "rounded-2xl border bg-white p-4 shadow-sm",
                module.href
                  ? "transition hover:-translate-y-0.5 hover:shadow-md"
                  : "",
              ].join(" ");

              const content = (
                <>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                    {index + 1}
                  </div>
                  <div className="mt-3 font-semibold text-slate-800">
                    Module {index + 1}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {module.title}
                  </p>
                  {module.href ? (
                    <p className="mt-2 text-sm font-medium text-cyan-700">
                      Open roadmap →
                    </p>
                  ) : null}
                </>
              );

              if (module.href) {
                return (
                  <Link key={module.title} href={module.href} className={className}>
                    {content}
                  </Link>
                );
              }

              return (
                <div key={module.title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            🔥 Interview Patterns + Algo + Company Mapping
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Learn by repeatable patterns
          </h2>
        </div>

        <div className="mt-6 grid gap-5">
          {interviewPatterns.map((topic, index) => (
            <article
              key={topic.title}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm"
            >
              <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
              <div className="grid gap-6 p-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {index + 1}
                    </span>
                    {topic.badge ? (
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                        {topic.badge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                    {topic.title}
                  </h3>
                  {topic.note ? (
                    <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                      👉 {topic.note}
                    </p>
                  ) : null}
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <PillList title="Patterns" items={topic.patterns} />
                  <PillList title="Algorithms" items={topic.algorithms} />
                  <PillList title="Companies" items={topic.companies} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
