import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FieldScout — Know when and where mushrooms are fruiting",
  description:
    "FieldScout forecasts mushroom fruiting conditions by species using weather, terrain, forest cover, and sightings. Joining the Bay Area winter 2026-27 beta waitlist.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
