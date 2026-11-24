import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";

import { profile } from "@/lib/portfolio";
import "./globals.css";

const title = `${profile.name} — ${profile.role}`;
const siteUrl = process.env.SITE_URL;
const basePath = process.env.SITE_BASE_PATH ?? "";
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const socialImage = metadataBase
  ? new URL(`${basePath}/social-card.png`, metadataBase.origin)
  : undefined;

export const metadata: Metadata = {
  title,
  description: profile.description,
  authors: [{ name: profile.name }],
  icons: {
    icon: [
      { url: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" },
      { url: `${basePath}/favicon-32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180" },
  },
  ...(siteUrl && {
    metadataBase,
    alternates: { canonical: siteUrl },
  }),
  openGraph: {
    title,
    description: profile.description,
    type: "website",
    locale: "en_US",
    ...(siteUrl && { url: siteUrl }),
    ...(socialImage && { images: [{ url: socialImage, width: 1200, height: 630, alt: title }] }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
    ...(socialImage && { images: [socialImage] }),
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
