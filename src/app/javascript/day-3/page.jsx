import { jsDays } from "@/app/javascript/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = jsDays.find((d) => d.slug === "day-3");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/javascript/day-3",
});

export default function JsDay3() {
  return <DayIndex day={day} baseHref="/javascript" baseLabel="JavaScript" />;
}
