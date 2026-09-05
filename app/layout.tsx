import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Akshaya B | PES University | AI & Frontend Developer",
  description: "Official portfolio of Akshaya B, CSE (AI & ML) student at PES University Bangalore. Full-stack developer specializing in React, Next.js, AI Agents, and Web Applications.",
  keywords: [
    "Akshaya B",
    "Akshaya B PES University",
    "Akshaya B PES",
    "Akshaya B portfolio",
    "Akshay Shetty PES University",
    "Akshaya B Bangalore"
  ],
  authors: [{ name: "Akshaya B" }],
  openGraph: {
    title: "Akshaya B | PES University Portfolio",
    description: "CSE (AI & ML) student at PES University Bangalore.",
    url: "https://v0-personal-portfolio-website-puce-iota.vercel.app",
    siteName: "Akshaya B Portfolio",
    type: "website",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-slate-100 antialiased overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
