import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./portfolio-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090c0e",
};

const siteTitle =
  "Akshaya B | CSE (AI & ML) at PES University | AI/ML & Frontend Developer";
const siteDescription =
  "Akshaya B is a Computer Science and Engineering (CSE) student specializing in Artificial Intelligence and Machine Learning at PES University, Bengaluru, with frontend development as an additional skill.";
export const metadata: Metadata = {
  metadataBase: new URL(profile.productionUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Akshaya B",
    "Computer Science and Engineering AI and ML student",
    "Artificial Intelligence and Machine Learning",
    "frontend developer",
    "PES University",
    "Bengaluru",
  ],
  authors: [{ name: "Akshaya B" }],
  alternates: {
    canonical: profile.productionUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: profile.productionUrl,
    siteName: "Akshaya B Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: "Yz6Jl2NxPxbZiRBtDZLNVMZerzh6sIxOaKh4suLdces",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
