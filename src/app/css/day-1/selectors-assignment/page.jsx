import Link from "next/link";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "Day 1 Assignment 2: Selector Showdown" };

export default function SelectorsAssignment() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Link
        href="/css/day-1"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Day 1
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">
        Day 1 Assignment 2: Selector Showdown
      </h1>

      <section className="w-full max-w-3xl rounded-2xl bg-white p-8 text-left shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
        <h2 className="text-lg font-semibold text-foreground">
          Objective: Build a 3-Card Pricing Page using every selector type
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This assignment is about <b>selectors and specificity</b>, not just
          properties. You&apos;ll build three pricing cards (Basic, Pro,
          Premium) and style them so that element, class, and ID selectors
          are all doing real work — and one of them has to win a conflict.
        </p>

        <div className="mt-6">
          <div className="text-sm font-semibold text-muted-foreground">
            Preview — this is the target result
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            The colors/fonts below are just for reference. What matters is{" "}
            <i>which selector</i> is doing each job — see the labels under
            each card.
          </p>

          <div className="mt-4 grid gap-4 rounded-xl border border-black/10 bg-[#f7f9fb] p-5 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-[#2c3e50]">
                Basic
              </h3>
              <p className="text-2xl font-bold text-[#2c3e50]">$9/mo</p>
              <ul className="flex flex-col gap-1 text-sm text-[#555]">
                <li>1 project</li>
                <li>Community support</li>
              </ul>
              <span className="mt-auto text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                .card only
              </span>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border-2 border-[#2980b9] bg-[#eaf4fd] p-4 shadow-md sm:-translate-y-2">
              <h3 className="text-base font-semibold text-[#2c3e50]">Pro</h3>
              <p className="text-2xl font-bold text-[#e67e22]">$29/mo</p>
              <ul className="flex flex-col gap-1 text-sm text-[#555]">
                <li>Unlimited projects</li>
                <li>Priority support</li>
              </ul>
              <span className="mt-auto text-[11px] font-medium uppercase tracking-wide text-[#2980b9]">
                .card + .featured, price uses #best-value
              </span>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-[#2c3e50]">
                Premium
              </h3>
              <p className="text-2xl font-bold text-[#2c3e50]">$49/mo</p>
              <ul className="flex flex-col gap-1 text-sm text-[#555]">
                <li>Everything in Pro</li>
                <li>Dedicated manager</li>
              </ul>
              <span className="mt-auto text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                .card only
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-md bg-[#e3f2fd] p-5 text-foreground shadow-sm">
          <div className="font-semibold">Requirements:</div>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>
              Use <b>External CSS</b> only (a linked <code>style.css</code>{" "}
              file).
            </li>
            <li>
              Markup: three <code>&lt;div class=&quot;card&quot;&gt;</code>{" "}
              sections, each with a heading, a price, and a short list of
              features (<code>&lt;ul&gt;&lt;li&gt;</code>).
            </li>
            <li>
              <b>Element selector</b>: style all <code>p</code> and{" "}
              <code>li</code> tags once (e.g. font-size, color) so every card
              inherits the same base text style.
            </li>
            <li>
              <b>Class selector</b> (<code>.card</code>): give all three
              cards shared layout — border, padding, border-radius,
              box-shadow, margin.
            </li>
            <li>
              <b>Class selector</b> (<code>.featured</code>): add this
              second class to the &quot;Pro&quot; card only, giving it a
              different <code>background-color</code> and a thicker border
              so it stands out.
            </li>
            <li>
              <b>ID selector</b> (<code>#best-value</code>): put this ID on
              the &quot;Pro&quot; card&apos;s price element and give it a
              color that&apos;s different from what <code>.card p</code>{" "}
              or <code>.featured p</code> would normally give it. The ID
              rule must win.
            </li>
            <li>
              At the bottom of the page, add one sentence (in an{" "}
              <code>&lt;h3&gt;</code> or <code>&lt;p&gt;</code>) explaining{" "}
              <b>why</b> the ID-styled price shows the ID&apos;s color and
              not the class&apos;s color.
            </li>
          </ul>
        </div>

        <Callout variant="problem" className="mt-6">
          <h3 className="text-base font-semibold text-[#2c3e50]">
            Conflict to create on purpose
          </h3>
          <p className="mt-2 text-sm text-[#2c3e50]">
            In your CSS, write a rule for <code>.card p</code> AND a rule for{" "}
            <code>#best-value</code> that set different <code>color</code>{" "}
            values on the same element. Take a screenshot (or note in your
            README) of which color actually shows, and confirm it matches
            what the specificity order (ID &gt; Class &gt; Element)
            predicts.
          </p>
        </Callout>

        <Callout variant="solution" className="mt-4">
          <h3 className="text-base font-semibold text-[#2c3e50]">
            Stretch goal (optional)
          </h3>
          <p className="mt-2 text-sm text-[#2c3e50]">
            Give the &quot;Premium&quot; card&apos;s heading its own unique
            ID too, and style it with a different <code>font-family</code>{" "}
            and <code>border-radius</code> on its button — just using what
            you learned in Common CSS Properties.
          </p>
        </Callout>
      </section>
    </div>
  );
}
