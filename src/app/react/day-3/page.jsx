import { reactDays } from "@/app/react/data";
import { DayIndex } from "@/components/notes/DayIndex";

export default function ReactDay3() {
  const day = reactDays.find((d) => d.slug === "day-3");
  return <DayIndex day={day} baseHref="/react" baseLabel="React" />;
}
