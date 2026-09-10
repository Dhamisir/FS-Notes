import { sqlDays } from "@/app/sql/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = sqlDays.find((d) => d.slug === "day-2");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/sql/day-2",
});

export default function SqlDay2() {
  return <DayIndex day={day} baseHref="/sql" baseLabel="SQL" />;
}
