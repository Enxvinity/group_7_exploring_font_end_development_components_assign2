// components/Footer.tsx
// Author: Micah Grace Ramos
// Date: October 27, 2026
// This functional component renders static contact details at the bottom of the page.
// The information includes the physical location and electronic contact methods.
// We enclose it in a semantic footer tag for accessibility compliance.
// Styling matches the navbar to bookend the page layout visually.

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-bold text-slate-50 text-base mb-2">New Generation High School</p>
          <p>Student Portal</p>
        </div>
        <div className="sm:text-right space-y-1">
          <p>123 Study Ave NW, Calgary, AB T2E 0A1</p>
          <p>Phone: (403) 123-4567</p>
          <p>Email: office@newgenhigh.ca</p>
        </div>
      </div>
    </footer>
  );
}