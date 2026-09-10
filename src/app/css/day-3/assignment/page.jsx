import Link from "next/link";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Day 3 Assignments (Animations & UI Challenges)",
  description:
    "Five advanced challenges plus a bonus asking learners to build animated cards, responsive typography, hover transitions, a dark-mode dashboard UI, and a loading screen using CSS animations and custom properties.",
  path: "/css/day-3/assignment",
});

const challenges = [
  {
    id: "01",
    title: "Challenge 01",
    description: "Build an interactive card with entrance animations.",
    img: "/css/day-3/1.png",
  },
  {
    id: "02",
    title: "Challenge 02",
    description: "Mastering complex spacing and responsive typography.",
    img: "/css/day-3/2.png",
  },
  {
    id: "03",
    title: "Challenge 03",
    description: "Creating smooth hover effects and transitions.",
    img: "/css/day-3/3.png",
  },
  {
    id: "04",
    title: "Challenge 04",
    description: "Modern Dashboard UI with dark mode themes.",
    img: "/css/day-3/4.png",
  },
  {
    id: "05",
    title: "Challenge 05",
    description: "Building a dynamic loading screen or progress bar.",
    img: "/css/day-3/5.png",
  },
  {
    id: "bonus",
    title: "Bonus Challenge",
    description: "The final boss of CSS mastery.",
    img: "/css/day-3/bonus.png",
    isBonus: true,
  },
];

export default function Day3Assignment() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/css/day-3"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 3
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-[#2c3e50]">
        CSS Day 3: Advanced Challenges
      </h1>

      <Callout variant="intro">
        <p className="text-sm text-[#2c3e50]">
          Apply advanced CSS concepts like <b>animations</b>, <b>transitions</b>,
          and <b>custom properties</b> to build dynamic interfaces.
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
                {c.isBonus ? (
                  <span className="inline-flex items-center rounded-full bg-[#f1c40f] px-3 py-1 text-xs font-bold uppercase text-black">
                    Expert Grade
                  </span>
                ) : null}
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
                    : "bg-[#2c3e50] text-white hover:bg-[#9b59b6]",
                ].join(" ")}
              >
                {c.isBonus ? "View Final Challenge" : "View Full Design"}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

