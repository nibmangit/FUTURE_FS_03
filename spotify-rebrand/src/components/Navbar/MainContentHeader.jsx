import {Bell, ChevronDown, ChevronLeft, Menu, Settings, User } from 'lucide-react'
import { getGlassClass } from '../globalStyle';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MainContentHeader({toggleMobileMenu}) { 
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname.split('/')[1] || 'home';
  const titleMap = useMemo(() => ({
    home: 'Discovery Hub',
    library: 'Your Library', 
    search: 'Global Rhythms',
    premium: 'Upgrade Your Experience',
  }), []);
 
  const glassInputClass = `w-full px-4 py-2 text-sm bg-white/5 backdrop-blur-sm border border-white/5 
                           rounded-full text-white placeholder-white/50 focus:outline-none 
                           focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all duration-300`;

  return (
   <div className={`sticky top-0 z-30 w-full p-4 ${getGlassClass()} rounded-none`}>

    <div className="flex items-center justify-between lg:hidden"> 
        {location.pathname !== '/' && location.pathname !== '/home' ? (
          <button onClick={() => navigate(-1)} className="text-white/80 p-2 hover:text-[#22FF88]">
            <ChevronLeft size={24} />
          </button>
        ) : (
          <button onClick={toggleMobileMenu} className="text-white/80 p-2 hover:text-[#22FF88]">
            <Menu size={24} />
          </button>
        )}

        <h1 className="text-lg font-bold text-white tracking-tight">
          {titleMap[currentPage] || 'CyberBeat'}
        </h1>

        <div className="flex items-center gap-2">
           <User size={22} className="text-white/80" />
        </div>
      </div>
 
      <div className="hidden lg:flex items-center justify-between space-x-6">
        <div className="flex items-center space-x-2 w-full max-w-sm">
          <input
            type="search"
            placeholder="Search all content, artists, and tracks..."
            className={glassInputClass}
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-white/70 hover:text-[#00E5FF] transition-colors duration-200">
            <Bell size={20} />
          </button>
          <button className="p-2 text-white/70 hover:text-[#22FF88] transition-colors duration-200">
            <Settings size={20} />
          </button>

          <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-white/10 transition-colors duration-200">
            <div className="w-8 h-8 rounded-full bg-[#00E5FF] flex items-center justify-center text-sm font-bold text-black">
              <User size={16} />
            </div>
            <span className="text-sm font-medium text-white/90 hidden xl:inline">
              Nib Man
            </span>
            <ChevronDown size={16} className="text-white/70 hidden xl:inline" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentHeader
