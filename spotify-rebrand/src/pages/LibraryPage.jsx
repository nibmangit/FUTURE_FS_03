import { useMemo } from "react";
import { useState } from "react"
import {useNavigate } from 'react-router-dom'; 
import LibraryItem from "../components/Cards/LibraryItem";
import { getLibraryContent } from "../data/libraryContent";

function LibraryPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('Playlists');
  const filters = ['Playlists', 'Artists', 'Albums', 'Tracks', 'Genres', 'Recents'];

  const content = useMemo(() => getLibraryContent(), []);
  const currentItems = content[activeFilter] || [];
  
  const isListLayout = activeFilter === 'Tracks' || activeFilter === 'Recents';
  const gridClass = isListLayout 
    ? 'space-y-3'
    : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-white lg:hidden">Your Library</h2>

      <div className="flex space-x-3 overflow-x-scroll pb-4 mb-8 no-scrollbar">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-semibold rounded-full shrink-0 transition-all duration-300 cursor-pointer
                         
                        ${activeFilter === filter
                          ? 'text-[#22FF88] border-[#22FF88] shadow-[0_0_10px_#22FF8855]'
                          : 'text-white/80 hover:border-[#00E5FF]'
                        }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={gridClass}>
        {currentItems.map((item) => (
          <LibraryItem
            key={`${item.type}-${item.id}`} 
            {...item} 
            onClick={['Playlist', 'Album', 'Artist'].includes(item.type) 
              ? () => navigate(`/playlist/${item.id}`) 
              : null} 
          />
        ))}
      </div>
    </div>
  );
}

export default LibraryPage
