// app/layout.tsx
// Author: Micah Grace Ramos
// Date: October 27, 2026
// This root layout provides the foundational HTML structure for the application.
// It wraps the main content with the navigation bar and footer components.
// We apply a consistent background color to ensure visual cohesion across the page.
// Global CSS is imported here to initialize Tailwind styling.

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "New Generation High School Portal",
  description: "Student management portal for New Generation High School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        /* Added suppressHydrationWarning to prevent extension conflicts */
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-900">
        <Navbar />
        <main className="grow pt-8 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}