"use client";

/*
This StudentCard.tsx of the project is prepared by: Millie Padua
Date: 24 October 2026

Description:
File StudentCard.tsx is a component that holds the student's full name and grade level.
It receives a student object and an onRemove function as props. It keeps 
its own true/false state so each card can show or hid its details without affecting
any other card. When details are showing, it displays the average and an Honor Roll badge
if the average is 80 or more. The remove button callse onRemove with the student's id so the
parent can remove them.

Disclaimer: Some of the comments are generated through the assistance of Claude Sonnet 5.5
*/


import { useState } from "react";
import { Student, students } from "@/data/students";

//this interface is the props (input) this component receives
interface StudentCardProps
{
    student: Student;
    onRemove: (id: number) => void;
    
}

const StudentCard = (props: StudentCardProps) =>
{
    //for each student card, and it shouldn't affect the other cards
    const [ showDetails, setShowDetails ] = useState(false);

    const student = props.student;
    const isHonorRoll = student.average >= 80; //determines if a student is on the Honor Roll

    return(
        <div className="rounded-lg border border-gray-300 bg-gray-400 p-4 shadow">
            <h3 className="text-lg font-bold">
                {student.firstName}  {student.lastName}
            </h3>
            <p className="text-blue-900"> Student is in Grade {student.grade} </p>
            {showDetails && (
                <div className="mt-2">
                    <p> Average of the Student is: {student.average}</p>
                    {isHonorRoll && (
                        <span className="mt-1 inline-block rounded bg-green-300 px-2 py-2 text-sm font-semibold">
                            Honor Roll
                        </span>
                    )}
                </div>
            )}

            {/* clickable details button */}
            <div className="mt-4 flex gap-2">
                <button className="rounded bg-blue-600 px-3 py-1 text-gray-800"
                onClick={() => setShowDetails(!showDetails)}> 
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>

                {/* clickable remove button */}
                <button className="rounded bg-red-600 px-3 py-1 text-gray-800"
                onClick={() => props.onRemove(student.id)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default StudentCard;