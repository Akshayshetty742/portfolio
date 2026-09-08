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
  metadataBase: new URL("https://v0-personal-portfolio-website-puce-iota.vercel.app"),
  title: "Akshaya B | Aspiring AI/ML & Frontend Developer | PES University",
  description:
    "CSE (AI & ML) student at PES University, Bengaluru, aspiring AI/ML and frontend developer passionate about artificial intelligence, machine learning, frontend development, and building innovative digital experiences.",
  keywords: [
    "Akshaya B",
    "Akshaya B PES University",
    "Akshaya B PES",
    "Akshaya B portfolio",
    "Akshaya B Bangalore",
    "CSE AI ML PES University",
    "Akshaya B AI ML Developer",
  ],
  authors: [{ name: "Akshaya B" }],
  openGraph: {
    title: "Akshaya B | Aspiring AI/ML & Frontend Developer | PES University",
    description:
      "CSE (AI & ML) student at PES University, Bengaluru, aspiring AI/ML and frontend developer passionate about artificial intelligence, machine learning, frontend development, and building innovative digital experiences.",
    url: "https://v0-personal-portfolio-website-puce-iota.vercel.app",
    siteName: "Akshaya B Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshaya B | Aspiring AI/ML & Frontend Developer | PES University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaya B | Aspiring AI/ML & Frontend Developer | PES University",
    description:
      "CSE (AI & ML) student at PES University, Bengaluru, aspiring AI/ML and frontend developer passionate about artificial intelligence, machine learning, frontend development, and building innovative digital experiences.",
    images: ["/og-image.png"],
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
