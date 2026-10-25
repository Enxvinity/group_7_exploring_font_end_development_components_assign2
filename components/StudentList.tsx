import { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps
{
    students: Student[];
    onRemove: ( id: number ) => void;
}

const StudentList = ( props: StudentListProps ) =>
{
    if (props.students.length === 0)
    {
        return
        <p className="text-gray-600"> No students found... </p>;
    }

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