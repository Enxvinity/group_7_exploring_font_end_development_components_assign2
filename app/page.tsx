// app/page.tsx
// Author: Micah Grace Ramos
// Date: October 27, 2026
// This serves as the primary entry point for the single-page application.
// It delegates the heavy lifting of state and user interaction to the portal component.
// We keep this server component lean to improve initial load performance.
// No extra markup is needed here since the layout handles structural wrapping.

import StudentPortal from "../components/StudentPortal";

export default function Home() {
  return <StudentPortal />;
}