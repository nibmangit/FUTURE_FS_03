import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../data/navItems";
import { getGlassClass } from "../globalStyle";
import { ChevronLeft } from "lucide-react";

function MobileMenuOverlay({ isOpen, onClose }) {
    const location = useLocation();
    const navigate = useNavigate();
  if (!isOpen) return null;

  const handleNavClick = (id) => {
    navigate(`/${id}`);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-100 p-6 lg:hidden ${getGlassClass()} rounded-none flex flex-col bg-[#050505]/95`}>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[#00E5FF]">CYBERBEAT</h2>
        <button onClick={onClose} className="text-white/80 p-2 border border-white/10 rounded-full hover:bg-white/10 active:scale-90 transition-transform">
          <ChevronLeft size={28} className="transform rotate-90" />
        </button>
      </div>
      <nav className="flex-1 space-y-4">
        {navItems.map(item => {
          const path = `/${item.id}`
          const isActive = location.pathname === path || (location.pathname === '/' && item.id === 'home');
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center w-full p-4 rounded-xl font-medium transition-all duration-200 text-lg
                          ${isActive 
                            ? 'bg-[#22FF88]/20 text-[#22FF88] shadow-lg shadow-[#22FF88]/30'
                            : 'text-white/70 hover:bg-white/5 hover:text-[#00E5FF]'
                          }`}
            >
              <item.icon size={24} className="mr-6" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav> 
    </div>
  );
}

export default MobileMenuOverlay
