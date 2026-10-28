// data/students.ts
// Author: Millie Julianne Padua
// Date: October 27, 2026
// This file establishes the core data structure and initial mock data for the application.
// We define the TypeScript interface to enforce typing on all student objects.
// An array of at least eight baseline records is exported to seed the initial dashboard state.
// The data satisfies specific assignment requirements including grade diversity and high achievers.

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

export const students: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 92 },
  { id: 2, firstName: "Caleb", lastName: "Sterling", grade: 12, average: 85 },
  { id: 3, firstName: "Gabriel", lastName: "Vans", grade: 9, average: 95 },
  { id: 4, firstName: "Raphael", lastName: "Johnson", grade: 10, average: 74 },
  { id: 5, firstName: "Michael", lastName: "Fernandez", grade: 11, average: 81 },
  { id: 6, firstName: "Seraphina", lastName: "Elison", grade: 12, average: 79 },
  { id: 7, firstName: "Alexander", lastName: "Townsend", grade: 9, average: 65 },
  { id: 8, firstName: "Aragon", lastName: "Rüssel", grade: 10, average: 88 },
];