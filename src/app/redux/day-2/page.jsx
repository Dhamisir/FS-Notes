import { reduxDays } from "@/app/redux/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = reduxDays.find((d) => d.slug === "day-2");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/redux/day-2",
});

export default function ReduxDay2() {
  return <DayIndex day={day} baseHref="/redux" baseLabel="Redux" />;
}
