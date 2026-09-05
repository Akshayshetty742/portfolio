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
  title: "Akshaya B | AI & Frontend Developer | PES University",
  description: "Portfolio of Akshaya B, CSE (AI & ML) student at PES University. Front-End & AI Developer building full-stack web applications, AI agents, and networking systems.",
  keywords: ["Akshaya B", "Akshay Shetty", "PES University", "Portfolio", "Frontend Developer", "AI Developer"],
  authors: [{ name: "Akshaya B" }],
  openGraph: {
    title: "Akshaya B | Portfolio",
    description: "CSE (AI & ML) Student at PES University | AI & Frontend Developer",
    url: "https://v0-personal-portfolio-website-puce-iota.vercel.app",
    siteName: "Akshaya B Portfolio",
    type: "website",
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
