import { nodeDays } from "@/app/nodejs/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = nodeDays.find((d) => d.slug === "day-1");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/nodejs/day-1",
});

export default function NodeDay1() {
  return <DayIndex day={day} baseHref="/nodejs" baseLabel="Node.js" />;
}
