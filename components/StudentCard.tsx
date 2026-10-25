"use client";

import { useState } from "react";
import { Student, students } from "@/data/students";

interface StudentCardProps
{
    student: Student;
    onRemove: (id: number) => void;
    
}

const StudentCard = (props: StudentCardProps) =>
{
    const [ showDetails, setShowDetails ] = useState(false);

    const student = props.student;
    const isHonorRoll = student.average >= 80;

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
            <div className="mt-4 flex gap-2">
                <button className="rounded bg-blue-600 px-3 py-1 text-gray-800"
                onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>

                <button className="rounded bg-red-600 px-3 py-1 text-gray-800"
                onClick={() => props.onRemove(student.id)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default StudentCard;