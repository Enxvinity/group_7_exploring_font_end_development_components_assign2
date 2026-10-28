// components/StudentCard.tsx
// Author: Millie Julianne Padua
// Date: October 27, 2026
// This visual module handles the presentation of a singular student record.
// Local state dictates the visibility of detailed metrics like averages and badges.
// Emitting the removal event requires passing the specific student ID backward up the tree.
// The markup relies on Tailwind utility classes to shape the padding, colors, and layout.

"use client";

import { useState } from "react";
import { Student } from "../data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

export default function StudentCard({ student, onRemove }: StudentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Reversing the boolean locally allows each card to expand independently of its siblings
  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex flex-col">
      <div className="mb-4">
        <h3 className="font-bold text-lg text-slate-900 truncate">
          {student.firstName} {student.lastName}
        </h3>
        <p className="text-slate-500 text-sm font-medium">Grade {student.grade}</p>
      </div>

      {isExpanded && (
        <div className="mb-4 pt-4 border-t border-slate-100 flex-grow">
          <p className="text-slate-700 font-medium text-sm">Average: {student.average}%</p>
          {student.average >= 80 && (
            <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded uppercase tracking-wide">
              Honour Roll
            </span>
          )}
        </div>
      )}

      <div className="mt-auto pt-4 flex gap-3">
        <button
          onClick={toggleDetails}
          className="flex-1 py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded transition"
        >
          {isExpanded ? "Hide details" : "Show details"}
        </button>
        <button
          onClick={() => onRemove(student.id)}
          className="flex-1 py-1.5 px-3 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-sm font-medium rounded transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}