// components/StudentList.tsx
// Author: Millie Julianne Padua
// Date: October 27, 2026
// This component iterates over the provided array to render individual profiles.
// It passes removal functions downwards to link user actions with parent state.
// A fallback message is displayed conditionally when the array length reaches zero.
// We utilize CSS Grid to handle multi-column layouts dynamically based on screen width.

import { Student } from "../data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

export default function StudentList({ students, onRemove }: StudentListProps) {
  // Rendering an empty state prevents layout collapse and provides user feedback
  if (students.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-lg border border-slate-200">
        <p className="text-slate-500 font-medium">No students found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {students.map((student) => (
        <StudentCard 
          key={student.id} 
          student={student} 
          onRemove={onRemove} 
        />
      ))}
    </div>
  );
}