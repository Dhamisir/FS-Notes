export const SITE_URL = "https://fs-notes.netlify.app";
export const SITE_NAME = "FS Notes";

export function pageMetadata({ title, description, path, noindex = false }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
