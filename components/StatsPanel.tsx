import { Student } from "@/data/students";
 
// ---------- Props ----------
interface StatsPanelProps {
  students: Student[];
}
 
const StatsPanel = ({ students }: StatsPanelProps) => {
  // ---------- Derived values: worked out fresh from the list every render ----------
  const totalStudents = students.length;
  const honourRollCount = students.filter((student) => student.average >= 80).length;
  const graduatingCount = students.filter((student) => student.grade === 12).length;
 
  // ---------- The three stats, so one card layout can be drawn with .map() ----------
  const stats = [
    { id: 1, label: "Students", value: totalStudents },
    { id: 2, label: "Honour roll", value: honourRollCount },
    { id: 3, label: "Graduating", value: graduatingCount },
  ];
 
  return (
    // ---------- Mobile-first: stacked on a phone, three across from md and up ----------
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white border border-amber-200 rounded-xl shadow-md p-6"
        >
          <p className="text-sm font-semibold text-amber-600">{stat.label}</p>
          <p className="text-4xl font-bold text-violet-900 mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};
 
export default StatsPanel;