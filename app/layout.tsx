import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "MineNepal Minecraft Tools - Server Status, Player Lookup & More",
  description: "Comprehensive Minecraft utility tools including server status checker, player UUID lookup, MOTD editor, skin viewer, enchantments guide, and more. Fast, free, and easy to use.",
  keywords: "minecraft, server status, player lookup, uuid, motd, skin viewer, enchantments, minecraft tools",
  authors: [{ name: "MineNepal" }],
  openGraph: {
    title: "MineNepal Minecraft Tools",
    description: "Your complete Minecraft server and player toolkit",
    type: "website",
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
