import { getNotionData } from "@/utils/externalApi/notion";
import { pageMetadata } from "@/lib/seo";

function getInterviewId(url) {
  if (!url || typeof url !== "string") return "";
  const trimmedUrl = url.trim().replace(/\/+$/, "");
  const parts = trimmedUrl.split("/");
  return parts[parts.length - 1] ?? "";
}

async function resolveId(params) {
  const resolvedParams =
    params && typeof params.then === "function" ? await params : params;
  const rawId = Array.isArray(resolvedParams?.id)
    ? resolvedParams.id[0]
    : resolvedParams?.id;
  return decodeURIComponent(String(rawId ?? "")).trim();
}

// The mock's real title/description live in Notion, not in this route, so
// this looks the id up the same way the /interview list page does. These
// pages are iframe wrappers around an external Notion page with no
// crawlable content of their own, so they're always noindexed.
export async function generateMetadata({ params }) {
  const id = await resolveId(params);
  const mocks = await getNotionData();
  const mock = mocks.find((item) => getInterviewId(item?.url) === id);

  return pageMetadata({
    title: mock?.name?.trim() || "Interview Mock",
    description:
      mock?.description?.trim() || "A mock interview question hosted on Notion.",
    path: `/interview/${id}`,
    noindex: true,
  });
}

export default async function InterviewDetailPage({ params }) {
  const id = await resolveId(params);
  const iframeSrc = `https://organized-wrench-096.notion.site/ebd/${id}`;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
