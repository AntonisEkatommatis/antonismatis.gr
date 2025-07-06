import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Αντώνης Εκατομμάτης | Portfolio",
  description: "Προσωπικό portfolio του Αντώνη Εκατομμάτη - Software Engineer με εξειδίκευση σε React, Node.js, Python και JavaScript. Ανακαλύψτε τις δεξιότητες, την εμπειρία και τα έργα μου.",
  keywords: ["portfolio", "web developer", "react", "node.js", "javascript", "αντώνης εκατομμάτης", "antonis matis", "software engineer", "full stack developer", "frontend", "backend", "python", "java"],
  authors: [{ name: "Αντώνης Εκατομμάτης", url: "https://antonismatis.gr" }],
  creator: "Αντώνης Εκατομμάτης",
  publisher: "Αντώνης Εκατομμάτης",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL("https://antonismatis.gr"),
  alternates: {
    canonical: "/",
    languages: {
      'el': '/el',
      'en': '/en',
    },
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: "en_US",
    url: "https://antonismatis.gr",
    title: "Αντώνης Εκατομμάτης | Portfolio",
    description: "Προσωπικό portfolio του Αντώνη Εκατομμάτη - Software Engineer με εξειδίκευση σε React, Node.js, Python και JavaScript.",
    siteName: "Αντώνης Εκατομμάτης | Portfolio",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Αντώνης Εκατομμάτης - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Αντώνης Εκατομμάτης | Portfolio",
    description: "Προσωπικό portfolio του Αντώνη Εκατομμάτη - Software Engineer με εξειδίκευση σε React, Node.js, Python και JavaScript.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/icons/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon-16x16.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
