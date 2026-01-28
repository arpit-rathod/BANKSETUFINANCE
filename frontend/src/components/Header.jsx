import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">

        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Bank Setu Finance" className="h-12" />
          <div>
            <div className="text-white text-xl font-bold">BANK SETU</div>
            <div className="text-amber-400 font-bold">FINANCE</div>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 text-white font-semibold">
          <a href="#home">Home</a>
          <a href="#loans">Loan Types</a>
          <a href="#banks">Partner Banks</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white shadow-xl">
          <a className="block px-6 py-3" href="#home">Home</a>
          <a className="block px-6 py-3" href="#loans">Loan Types</a>
          <a className="block px-6 py-3" href="#banks">Partner Banks</a>
          <a className="block px-6 py-3" href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;