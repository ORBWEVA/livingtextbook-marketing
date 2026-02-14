import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "The Living Textbook | AI-Powered Language Learning",
    template: "%s | The Living Textbook",
  },
  description: "A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.",
  keywords: ["language learning", "EdTech", "AI curriculum", "language teaching", "CIP", "The Living Textbook", "LokaLingo", "BYOK"],
  authors: [{ name: "LokaLingo" }],
  creator: "LokaLingo",
  metadataBase: new URL("https://thelivingtextbook.lokalingo.com"),
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thelivingtextbook.lokalingo.com",
    siteName: "The Living Textbook",
    title: "The Living Textbook | AI-Powered Language Learning",
    description: "A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Living Textbook | AI-Powered Language Learning",
    description: "A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
