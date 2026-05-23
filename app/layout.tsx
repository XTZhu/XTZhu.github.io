import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    locale: "en_US",
    url: "https://xtzhou.com",
    title: "XTZhu | Full-Stack Developer & Creator",
    description: "Full-stack developer showcasing modern web projects",
    siteName: "XTZhu Portfolio",
    images: [
      {
        url: "https://xtzhou.com/og-image.jpg",
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
    creator: "@xtzhou",
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
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://xtzhou.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

