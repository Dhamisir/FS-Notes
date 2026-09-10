import { sqlDays } from "@/app/sql/data";
import { DayIndex } from "@/components/notes/DayIndex";
import { pageMetadata } from "@/lib/seo";

const day = sqlDays.find((d) => d.slug === "day-3");

export const metadata = pageMetadata({
  title: day.title,
  description: day.description,
  path: "/sql/day-3",
});

export default function SqlDay3() {
  return <DayIndex day={day} baseHref="/sql" baseLabel="SQL" />;
}
