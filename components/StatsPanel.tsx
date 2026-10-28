// components/StatsPanel.tsx
// Author: Micah Grace Ramos
// Date: October 27, 2026
// This panel aggregates numerical metrics based on the current roster of students.
// It calculates the data freshly on each render using array reduce and filter functions.
// We avoid managing these numbers in state to prevent synchronization errors.
// The display is formatted as a responsive grid of distinct metric cards.

import { Student } from "../data/students";

interface StatsPanelProps {
  students: Student[];
}

export default function StatsPanel({ students }: StatsPanelProps) {
  // We derive the metrics sequentially to avoid traversing the array more than necessary
  const totalStudents = students.length;
  const honourRollCount = students.filter(s => s.average >= 80).length;
  const grade12Count = students.filter(s => s.grade === 12).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Students</p>
        <p className="text-3xl font-bold text-slate-900 mt-2">{totalStudents}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-600">
        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Honour Roll</p>
        <p className="text-3xl font-bold text-slate-900 mt-2">{honourRollCount}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-600">
        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Graduating</p>
        <p className="text-3xl font-bold text-slate-900 mt-2">{grade12Count}</p>
      </div>
    </div>
  );
}