const Navbar = () => {
  return (
    <header className="px-4 pt-6">
      <div className="max-w-5xl mx-auto bg-indigo-100 rounded-xl shadow-md px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">NGHS</h1>
          <p className="text-xs font-medium text-slate-500">New Generation High School</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          <a href="#overview" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            Overview
          </a>
          <a href="#students" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            Students
          </a>
          <a href="#add-student" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            Add a student
          </a>
        </nav>
      </div>
    </header>
  );
};
 
export default Navbar;