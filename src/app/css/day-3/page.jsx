import { cssDays } from "@/app/css/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = cssDays.find((d) => d.slug === "day-3");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/css/day-3",
});

export default function CssDay3() {
  return <DayIndex day={day} baseHref="/css" baseLabel="CSS" />;
}
