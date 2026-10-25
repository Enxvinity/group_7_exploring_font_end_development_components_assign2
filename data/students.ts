/*
This students.ts of the project is prepared by: Millie Padua
Date: 24 October 2026

Description:
File students.ts holds the student data for the app. It has the description
of a student using the Student interface (which contains the id, firstname, lastname,
grade, and average). It shows an array of 10 students and exports it. The other files
in the project uses this array as a starting list (as an import). This file only
stores the data.
*/

//This contains the attributes connected to a Student (what each student must have)
export interface Student 
{
    id: number; //unique for every student
    firstName: string; 
    lastName: string;
    grade: number; //from the instructions, must be between 9 and 12
    average: number; //from the instructions, a mark out of 100
}

//The preliminary list of students
export const students: Student[]  = [
    { id: 1, firstName: "Caleb", lastName: "Sterling", grade: 12, average: 80 },
    { id: 2, firstName: "Gabriel", lastName: "Vans", grade: 9, average: 95 },
    { id: 3, firstName: "Raphael", lastName: "Johnson", grade: 10, average: 90 },
    { id: 4, firstName: "Michael", lastName: "Fernandez", grade: 11, average: 90 },
    { id: 5, firstName: "Seraphina", lastName: "Nixon", grade: 12, average: 82 },
    { id: 6, firstName: "Maria", lastName: "Ahmed", grade: 11, average: 85 },
    { id: 7, firstName: "Alexandra", lastName: "Townsende", grade: 12, average: 100 },
    { id: 8, firstName: "Aragorn", lastName: "Kincaid", grade: 9, average: 99 },
    { id: 9, firstName: "Margaux", lastName: "Thornton", grade: 10, average: 80 },
    { id: 10, firstName: "Celine", lastName: "Houston", grade: 12, average: 88 },
];
