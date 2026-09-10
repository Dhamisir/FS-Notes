import Link from "next/link";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 2 Assignments (Flex & Grid Projects)",
  description:
    "Ten layout challenges plus a bonus round asking learners to recreate reference UI designs — cards, navbars, sidebars, galleries, and a Holy Grail layout — using Flexbox and Grid.",
  path: "/css/day-2/assignment",
});

const challenges = [
  {
    id: "01",
    badge: { label: "Flexbox", className: "bg-[#e1f5fe] text-[#03a9f4]" },
    title: "Challenge 01",
    description: "Recreate this basic card layout using Flexbox properties.",
    img: "/css/day-2/1.png",
  },
  {
    id: "02",
    badge: { label: "Grid", className: "bg-[#f3e5f5] text-[#764abc]" },
    title: "Challenge 02",
    description: "Master the simple grid system using fr units.",
    img: "/css/day-2/2.png",
  },
  {
    id: "03",
    badge: { label: "Layout", className: "bg-[#e8f5e9] text-[#4caf50]" },
    title: "Challenge 03",
    description: "Complex spacing and alignment within a container.",
    img: "/css/day-2/3.png",
  },
  {
    id: "04",
    badge: { label: "Flexbox", className: "bg-[#e1f5fe] text-[#03a9f4]" },
    title: "Challenge 04",
    description: "A centered hero section or call-to-action block.",
    img: "/css/day-2/4.png",
  },
  {
    id: "05",
    badge: { label: "Grid", className: "bg-[#f3e5f5] text-[#764abc]" },
    title: "Challenge 05",
    description: "Using Grid areas to define a visual structure.",
    img: "/css/day-2/5.png",
  },
  {
    id: "06",
    badge: { label: "Layout", className: "bg-[#e8f5e9] text-[#4caf50]" },
    title: "Challenge 06",
    description: "Developing a sidebar and main content layout.",
    img: "/css/day-2/6.png",
  },
  {
    id: "07",
    badge: { label: "Flexbox", className: "bg-[#e1f5fe] text-[#03a9f4]" },
    title: "Challenge 07",
    description: "Navbar with split elements using space-between.",
    img: "/css/day-2/7.png",
  },
  {
    id: "08",
    badge: { label: "Grid", className: "bg-[#f3e5f5] text-[#764abc]" },
    title: "Challenge 08",
    description: "Responsive gallery using auto-fit and minmax.",
    img: "/css/day-2/8.png",
  },
  {
    id: "09",
    badge: { label: "Layout", className: "bg-[#e8f5e9] text-[#4caf50]" },
    title: "Challenge 09",
    description: "Complex header with nested flex containers.",
    img: "/css/day-2/9.png",
  },
  {
    id: "10",
    badge: { label: "Grid", className: "bg-[#f3e5f5] text-[#764abc]" },
    title: "Challenge 10",
    description: "The “Holy Grail” website layout with Grid.",
    img: "/css/day-2/10.png",
  },
  {
    id: "bonus",
    badge: { label: "Award Grade", className: "bg-[#f1c40f] text-black" },
    title: "Bonus Challenge",
    description: "The ultimate test of everything you’ve learned today.",
    img: "/css/day-2/bonus.png",
    isBonus: true,
  },
];

export default function Day2Assignment() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-2"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 2
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Day 2: Layout Challenges
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Use the <b>Flexbox</b> and <b>Grid</b> techniques you learned today to
          recreate UI designs. Don’t worry about exact pixel matching — focus on{" "}
          <b>structure</b> and <b>responsiveness</b>.
        </p>
      </Callout>

      <section>
        <h2 className="text-xl font-semibold text-[#2980b9]">Challenges</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {challenges.map((c) => (
            <div
              key={c.id}
              className={[
                "overflow-hidden rounded-2xl bg-white shadow-[0_10px_20px_rgba(0,0,0,0.10)] transition",
                "hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.14)]",
                c.isBonus ? "ring-2 ring-[#f1c40f]" : "",
              ].join(" ")}
            >
              <a
                href={c.img}
                target="_blank"
                rel="noreferrer"
                className="block border-b bg-[#eee]"
              >
                <div className="flex h-[250px] items-center justify-center">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-contain transition duration-500 hover:scale-[1.06]"
                  />
                </div>
              </a>

              <div className="p-5">
                <span
                  className={[
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase",
                    c.badge.className,
                  ].join(" ")}
                >
                  {c.badge.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#2c3e50]">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.description}
                </p>
              </div>

              <a
                href={c.img}
                target="_blank"
                rel="noreferrer"
                className={[
                  "block px-5 py-3 text-center text-sm font-bold",
                  c.isBonus
                    ? "bg-[#f1c40f] text-black hover:bg-[#e6b800]"
                    : "bg-[#2c3e50] text-white hover:bg-[#e67e22]",
                ].join(" ")}
              >
                {c.isBonus ? "View Final Boss" : "View Full Design"}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

