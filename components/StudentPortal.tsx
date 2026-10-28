// components/StudentPortal.tsx
// Author: Hardy Ahuja
// Date: October 27, 2026
// This acts as the main controller for the student dashboard.
// It holds the definitive state for the student array and search criteria.
// Child components receive data down via props and broadcast changes up via callbacks.
// The list displayed to the user is derived dynamically from state based on search parameters.

"use client";

import { useState } from "react";
import { students as initialStudents, Student } from "../data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

export default function StudentPortal() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  // Generating a new array prevents direct mutation of React state
  const handleAddStudent = (newStudent: Omit<Student, "id">) => {
    const nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents([...students, { ...newStudent, id: nextId }]);
  };

  const handleRemoveStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  // Processing string comparisons strictly in lowercase ensures case-insensitive matching
  const filteredStudents = students.filter(student => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-16">
      <section id="overview" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Overview</h2>
        <StatsPanel students={students} />
      </section>
      
      <section id="students" className="scroll-mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-slate-800">Students</h2>
          <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <StudentList students={filteredStudents} onRemove={handleRemoveStudent} />
        <div className="mt-6 flex justify-end">
          <button 
            onClick={handleClearAll}
            className="px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
          >
            Clear all
          </button>
        </div>
      </section>

      <section id="add-student" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Add a student</h2>
        <AddStudent onAdd={handleAddStudent} />
      </section>
    </div>
  );
}