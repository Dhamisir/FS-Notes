import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FS Notes — Full-Stack Web Development Notes & Practice",
    template: "%s | FS Notes",
  },
  description:
    "Free full-stack developer notes and practice: CSS, JavaScript, SQL, React, Redux, and Node.js lessons organized day by day, plus a DSA interview roadmap, downloadable coding assignments, and mock interview questions.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "xgcVeleOLXKGZkJyqfGlK5q0ZGNjmzhnXgpA_o3icz4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-12H3BP8ZFR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-12H3BP8ZFR');
          `}
        </Script>
      </body>
    </html>
  );
}
