import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://tools.minenepal.xyz'),
  title: {
    default: "MineNepal Tools - Minecraft Server Status, Player Lookup & More",
    template: "%s | MineNepal Tools"
  },
  description: "Comprehensive Minecraft utility tools including server status checker, player UUID lookup, MOTD editor, skin viewer, enchantments guide, and more. Fast, free, and easy to use for players and server admins.",
  keywords: ["minecraft", "server status", "player lookup", "uuid", "motd", "skin viewer", "enchantments", "minecraft tools", "server tools", "minecraft utilities"],
  authors: [{ name: "MineNepal Tools", url: "https://tools.minenepal.xyz" }],
  creator: "MineNepal Tools",
  publisher: "MineNepal Tools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tools.minenepal.xyz",
    siteName: "MineNepal Tools",
    title: "MineNepal Tools - Minecraft Server Status, Player Lookup & More",
    description: "Your complete Minecraft server and player toolkit. Check server status, lookup players, edit MOTDs, view skins, and access 25+ powerful tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MineNepal Tools - Minecraft Utilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MineNepal Tools - Minecraft Server Status, Player Lookup & More",
    description: "Your complete Minecraft server and player toolkit with 25+ powerful tools.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tools.minenepal.xyz",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code after submission
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
