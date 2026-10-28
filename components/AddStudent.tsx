// components/AddStudent.tsx
// Author: Hardy Ahuja
// Date: October 27, 2026
// This component collects user input to append a new student to the roster.
// It uses controlled inputs to track first name, last name, grade, and average locally.
// We avoid using form elements to comply with specific project constraints.
// Successful additions reset the local input states to their default baseline.

"use client";

import { useState } from "react";
import { Student } from "../data/students";

interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}

export default function AddStudent({ onAdd }: AddStudentProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState<number>(9);
  const [average, setAverage] = useState<number>(70);

  // We manually validate strings before calling the parent update function
  const handleAddClick = () => {
    if (!firstName.trim() || !lastName.trim()) {
      return;
    }

    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    // Resetting inputs to match the default starting state required for the next entry
    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
        />
        <label className="flex flex-col text-sm text-slate-600 font-medium">
          Grade
          <input
            type="number"
            min={9}
            max={12}
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-600 font-medium">
          Average
          <input
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(e) => setAverage(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
          />
        </label>
      </div>
      <button
        onClick={handleAddClick}
        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
      >
        Add student
      </button>
    </div>
  );
}