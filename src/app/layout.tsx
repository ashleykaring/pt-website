import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peak Performance PT",
  description: "Physical therapy for high performance athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
