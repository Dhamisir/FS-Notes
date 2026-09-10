import { reactDays } from "@/app/react/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = reactDays.find((d) => d.slug === "day-4");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/react/day-4",
});

export default function ReactDay4() {
  return <DayIndex day={day} baseHref="/react" baseLabel="React" />;
}
