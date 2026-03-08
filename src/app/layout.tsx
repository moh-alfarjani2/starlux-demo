import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "Starlux | Elite Luxury Hotel Booking",
    template: "%s | Starlux Luxury"
  },
  description: "Experience world-class hospitality in the most breathtaking destinations across the globe. Book your next luxury escape with Starlux.",
  keywords: ["luxury hotels", "resorts", "travel", "dubai luxury", "paris hotels", "starlux"],
  authors: [{ name: "Starlux Team" }],
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import { DemoWarningModal } from "@/components/layout/demo-warning-modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
      >
        {/* Hide Next.js Dev Tools Overlay in Demo */}
        <style dangerouslySetInnerHTML={{
          __html: `
          #next-logo, [data-next-mark="true"], [data-nextjs-dev-tools-button] { 
            display: none !important; 
            visibility: hidden !important; 
            pointer-events: none !important;
            opacity: 0 !important;
          }
        `}} />
        <DemoWarningModal />
        {children}
      </body>
    </html>
  );
}
