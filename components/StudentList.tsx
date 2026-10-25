/*
This StudentList.tsx of the project is prepared by: Millie Padua
Date: 24 October 2026

Description:
File StudentList.tsx is a component that draws the list of students given. It receives the
students array (students.ts) and an onRemove function as props. If the array is empty it
shows a "no students" message. Otherwise it draws one StudentCard for each student in a grid, which 
is one column on a phone and more columns on wider screens. It does not store anything itself,
it just passes the remove request up to its parent.

"use client" is not used as this file did not use state or events.

Disclaimer: Some of the comments are generated through the assistance of Claude Sonnet 5.5
*/


import { Student } from "@/data/students";
import StudentCard from "./StudentCard";

//The props this component receives
interface StudentListProps
{
    students: Student[];
    onRemove: ( id: number ) => void;
}

const StudentList = ( props: StudentListProps ) =>
{
    //this is used if there is no student/nothing to show
    if (props.students.length === 0)
    {
        return
        <p className="text-gray-600"> No students found... </p>;
    }

    //if student/s is/are found, will show in cards and appearance will depend on the device used
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {props.students.map((student) => (
                <StudentCard
                key={student.id}
                student={student}
                onRemove={props.onRemove}
                />
            ))}
        </div>
    );
};

export default StudentList;