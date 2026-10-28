import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer2";
 
// ---------- Page title and description (shown in the browser tab) ----------
export const metadata: Metadata = {
  title: "New Generation High School",
  description: "Student portal for New Generation High School",
};
 
// ---------- Root layout: Navbar on top, page in the middle, Footer at the bottom ----------
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-amber-50 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
 
export default RootLayout;