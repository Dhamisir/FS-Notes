import { ReduxLesson } from "@/app/redux/components/ReduxLesson";
import { Callout } from "@/components/notes/Callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Redux",
  description:
    "Explains when to reach for Redux over Context and useReducer, covering DevTools time-travel debugging, middleware, and multi-team scale, and closes with a comparison table tracing useState through useContext, useReducer, and Redux.",
  path: "/redux/day-2/why-redux",
});

export default function WhyRedux() {
  return (
    <ReduxLesson backHref="/redux/day-2" title="🏢 STEP 3 — Why Redux Exists">
      <Callout variant="reduxIntro">
        <p className="text-sm text-[#2c3e50]">
          Redux is a professional architectural pattern for large-scale apps —
          not just “another way to do state”.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">When to use Redux?</h2>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground">
          <li>
            <strong>Many global states</strong> (domain data, not only auth)
          </li>
          <li>
            <strong>Many teams</strong> working on different parts of state
          </li>
          <li>
            <strong>Need DevTools</strong> (time-travel debugging, snapshots)
          </li>
          <li>
            <strong>Need middleware</strong> (logging, crash reporting, API flows)
          </li>
          <li>
            <strong>Large scale</strong> where context nesting becomes messy
          </li>
        </ul>
      </section>

      <Callout variant="reduxExample">
        <div className="text-sm text-[#2c3e50] font-semibold">
          🎓 Final teaching comparison
        </div>
        <div className="mt-3 overflow-x-auto rounded-lg border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#f7fcff] text-[#764abc]">
              <tr>
                <th className="px-3 py-2 text-left">Stage</th>
                <th className="px-3 py-2 text-left">Problem Solved</th>
                <th className="px-3 py-2 text-left">New Problem</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["useState", "Local state", "Prop drilling"],
                ["useContext", "Remove drilling", "Logic gets messy in provider"],
                ["useReducer", "Organized logic", "Multiple contexts / nesting"],
                ["Redux", "Large scale management", "More setup/boilerplate"],
              ].map((row) => (
                <tr key={row[0]} className="border-t">
                  {row.map((cell) => (
                    <td key={cell} className="px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Callout>

      <Callout variant="reduxExample" className="border-l-[#03a9f4] bg-[#e1f5fe]">
        <h3 className="text-base font-semibold text-[#2c3e50]">
          💡 Best teaching line
        </h3>
        <p className="mt-2 text-sm text-[#2c3e50]">
          “Context is for avoiding prop drilling. useReducer is for complex
          logic. Redux is for large-scale architecture.”
        </p>
      </Callout>
    </ReduxLesson>
  );
}

