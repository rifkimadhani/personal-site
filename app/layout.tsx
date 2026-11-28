import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";

import { profile, siteUrl } from "@/lib/portfolio";
import "./globals.css";

const title = `${profile.name} — ${profile.role}`;
const basePath = process.env.SITE_BASE_PATH ?? "";
const faviconPath = `${basePath}/favicon`;
const socialImage = new URL(`${basePath}/social-card.png`, siteUrl);

export const metadata: Metadata = {
  title,
  description: profile.description,
  authors: [{ name: profile.name }],
  icons: {
    icon: [
      { url: `${faviconPath}/android-chrome-192x192.png`, sizes: "192x192", type: "image/png" },
      { url: `${faviconPath}/favicon.ico`, sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: `${faviconPath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${faviconPath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: { url: `${faviconPath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
  },
  manifest: `${faviconPath}/site.webmanifest`,
  metadataBase: siteUrl,
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description: profile.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: profile.name,
    images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1018",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
