import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPN TOYSEE",
  description: "Premium RC cars, aircraft, die-cast models and collectibles",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}