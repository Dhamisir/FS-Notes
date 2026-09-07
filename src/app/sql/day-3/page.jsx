import { sqlDays } from "@/app/sql/data";
import { DayIndex } from "@/components/notes/DayIndex";

export default function SqlDay3() {
  const day = sqlDays.find((d) => d.slug === "day-3");
  return <DayIndex day={day} baseHref="/sql" baseLabel="SQL" />;
}
