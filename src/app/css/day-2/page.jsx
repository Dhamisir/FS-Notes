import { cssDays } from "@/app/css/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = cssDays.find((d) => d.slug === "day-2");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/css/day-2",
});

export default function CssDay2() {
  return <DayIndex day={day} baseHref="/css" baseLabel="CSS" />;
}
