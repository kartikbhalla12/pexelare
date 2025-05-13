import type { Metadata } from "next";
import { Inter } from "next/font/google";

import LoadingBar from "@/components/LoadingBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_NAME = "Pexelare";
const SITE_URL = "https://pexelare.info";
const SITE_TITLE = "Design & Development Agency | Pexelare";
const SITE_DESCRIPTION =
  "A modern design and development agency crafting extraordinary digital experiences.";
const SITE_KEYWORDS = [
  "design agency",
  "development agency",
  "web design",
  "web development",
  "digital experiences",
  "UI/UX design",
  "software development",
  "creative agency",
  "digital transformation",
  "custom software",
  "web design agency",
  "web development agency",
  "digital marketing agency",
  "SEO agency",
  "social media marketing",
  "content marketing",
  "Kartik Bhalla",
  "Kartik Bhalla's Portfolio",
  "kartikbhalla.dev",
  "deposits.live",
  "diamond printers",
  "deposits",
  "kartik",
  "bhalla",
];

const META_IMAGE = {
  url: "https://pexelare.info/logo-meta.webp",
  width: 1920,
  height: 1080,
  alt: "Pexelare Logo",
  type: "image/webp",
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS.join(", "),
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [META_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@pexelare",
    images: [META_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingBar />
        {children}
      </body>
    </html>
  );
}
