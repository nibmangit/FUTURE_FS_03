import {Home, Library, Search, Gem} from 'lucide-react' 

const navItems = [
  { id: 'home', label: 'Discover', icon: Home },
  { id: 'library', label: 'My Library', icon: Library},
  { id: 'search', label: 'Explore Sounds', icon: Search},
  { id: 'premium', label: 'Cyber Pro', icon: Gem},
];


function SideNav() { 
    return ( 
    <div className={`hidden lg:block w-64 h-screen p-6 sticky top-0  rounded-none`}>
       <div className="flex items-center gap-3 mb-10">
            <img 
                src="/logo.png" 
                alt="CYBERBEAT Logo" 
                className="w-10 h-10 rounded-full object-contain" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/111827/ffffff?text=C" }}
            />
            <h2 className="text-2xl font-bold text-[#00E5FF]">CYBERBEAT</h2>
        </div>
      <nav className="space-y-4">
        {navItems.map(item => { 
          return (
            <button
              key={item.id} 
              className={`flex items-center w-full p-3 rounded-xl font-medium transition-all duration-200
                            text-white/70 hover:bg-white/5 hover:text-[#00E5FF] cursor-pointer
                          `}
            >
              <item.icon size={20} className="mr-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav> 
      <div className="mt-10 pt-4 border-t border-white/5">
        <div className="text-white/60 text-sm">Now Playing</div>
        <div className="text-md font-semibold mt-1">Starlight Drive</div>
      </div>
    </div>
  );
}

export default SideNav
