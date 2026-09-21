import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MeshBackground from "@/components/MeshBackground";

export const metadata: Metadata = {
  title: "Luke Mbogo — Full-stack developer",
  description:
    "Full-stack developer building SaaS platforms, ERPs, and data systems. Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <MeshBackground />
        <div className="light-glow" aria-hidden="true" />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
