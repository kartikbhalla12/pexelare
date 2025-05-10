import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design & Development Agency | Pexelare",
  description:
    "A modern design and development agency crafting extraordinary digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
    </html>
  );
}
