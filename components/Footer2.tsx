const Footer = () => {
  return (
    <footer className="px-4 pb-6 mt-16">
    
      <div className="max-w-5xl mx-auto bg-slate-700 rounded-xl shadow-md px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xl font-bold text-white">New Generation High School</p>
          <p className="text-sm font-medium text-amber-300">Student Portal</p>
        </div>

        <div className="text-sm text-amber-50">
          <p>123 Study Ave NW, Calgary, AB T2E 0A1</p>
          <p>Phone: (403) 123-4567</p>
          <p>Email: office@newgenhigh.ca</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;