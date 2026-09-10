import { reactDays } from "@/app/react/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = reactDays.find((d) => d.slug === "day-1");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/react/day-1",
});

export default function ReactDay1() {
  return <DayIndex day={day} baseHref="/react" baseLabel="React" />;
}
