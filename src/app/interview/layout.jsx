import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Interview Mocks",
    description:
      "Browse mock interview questions pulled live from Notion, organized by category, to help you prepare for technical interviews.",
    path: "/interview",
  }),
  // Re-declare the template here — a plain string title on this layout would
  // otherwise stop it from cascading down to /interview/[id] pages.
  title: {
    default: "Interview Mocks",
    template: "%s | FS Notes",
  },
};

export default function InterviewLayout({ children }) {
  return children;
}
