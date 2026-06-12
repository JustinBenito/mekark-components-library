import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mekark Components Library",
  description: "UI component library for Mekark branded Next.js applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
