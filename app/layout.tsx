import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XTZhu | Full-Stack Developer & Creator",
  description:
    "Explore my portfolio showcasing full-stack development projects, from React and Next.js to Firebase and AI integration.",
  keywords: [
    "full-stack developer",
    "React developer",
    "Next.js",
    "TypeScript",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "XTZhu" }],
  creator: "XTZhu",
  publisher: "XTZhu",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://xtzhu.cc",
    title: "XTZhu | Full-Stack Developer & Creator",
    description: "Full-stack developer showcasing modern web projects",
    siteName: "XTZhu Portfolio",
    images: [
      {
        url: "https://xtzhu.cc/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XTZhu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XTZhu | Full-Stack Developer & Creator",
    description: "Full-stack developer showcasing modern web projects",
    creator: "@xtzhu_cc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://xtzhu.cc" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors`}>
        {children}
      </body>
    </html>
  );
}


