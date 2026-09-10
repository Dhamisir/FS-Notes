import { reactDays } from "@/app/react/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = reactDays.find((d) => d.slug === "day-2");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/react/day-2",
});

export default function ReactDay2() {
  return <DayIndex day={day} baseHref="/react" baseLabel="React" />;
}
