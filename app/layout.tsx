import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedIntro from "@/components/AnimatedIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharyu Popat Patil | Full-Stack Developer",
  description:
    "Portfolio of Sharyu Popat Patil - Computer Engineering Student. Full-stack developer specializing in Next.js, React, Node.js, and AI/ML. View my projects, resume, and LeetCode stats.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Sharyu Popat Patil | Full-Stack Developer",
    description: "Portfolio showcasing projects and expertise in web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <AnimatedIntro />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

