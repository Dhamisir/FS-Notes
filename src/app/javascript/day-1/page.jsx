import { jsDays } from "@/app/javascript/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = jsDays.find((d) => d.slug === "day-1");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/javascript/day-1",
});

export default function JsDay1() {
  return <DayIndex day={day} baseHref="/javascript" baseLabel="JavaScript" />;
}
