import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VJ Darsh | Digital Performance & Visual Alchemy",
  description: "Official portfolio of VJ Darsh. Immersive visual experiences, live performance visuals, 3D motion graphics, and stage design for festivals and events.",
  keywords: ["VJ", "Visual Jockey", "Live Visuals", "Motion Graphics", "Festival Visuals", "Stage Design", "Projection Mapping", "TouchDesigner"],
  authors: [{ name: "VJ Darsh" }],
  openGraph: {
    title: "VJ Darsh | Digital Performance",
    description: "Transforming sound into sight. Immersive visual experiences for the world's biggest stages.",
    url: "https://vjdarsh.com",
    siteName: "VJ Darsh Portfolio",
    images: [
      {
        url: "https://vjdarsh.com/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VJ Darsh | Digital Performance",
    description: "Transforming sound into sight. Immersive visual experiences.",
    creator: "@vjdarsh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
