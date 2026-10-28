// components/Navbar.tsx
// Author: Micah Grace Ramos
// Date: October 27, 2026
// This module provides global navigation links fixed at the top of the viewport.
// It relies on standard anchor tags rather than Next.js routing tools.
// The href attributes target specific DOM ids to enable smooth vertical scrolling.
// Contrast is maintained using a dark background with light text.

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-slate-50 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-bold text-xl tracking-wide">
          New Generation High School
        </div>
        <div className="flex gap-6 font-medium text-sm">
          <a href="#overview" className="hover:text-blue-300 transition">Overview</a>
          <a href="#students" className="hover:text-blue-300 transition">Students</a>
          <a href="#add-student" className="hover:text-blue-300 transition">Add a student</a>
        </div>
      </div>
    </nav>
  );
}