import { useMemo } from "react";
import { useState } from "react"
import {useNavigate } from 'react-router-dom';
import { mockAlbums, mockArtists, mockGenres, mockPlaylists, mockRecents, mockTracks } from "../data/mock";
import LibraryItem from "../components/Cards/LibraryItem";

function LibraryPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('Playlists');
  const filters = ['Playlists', 'Artists', 'Albums', 'Tracks', 'Genres', 'Recents'];

  const content = useMemo(() => ({
    Playlists: mockPlaylists.filter(p => p).map(p => ({
        ...p, type: 'Playlist', subtitle: p.description
    })),
    Artists: mockArtists.map(a => ({
        ...a, type: 'Artist', subtitle: a.genre
    })),
    Albums: mockAlbums.map(a => ({
        ...a, type: 'Album',
    })),
    Tracks: mockTracks.map(t => ({
        ...t, type: 'Track', subtitle: `${t.artist} • ${t.album}`
    })),
    // Genres use the Global Rhythms genres for variety
    Genres: mockGenres.filter(g => g.id.startsWith('g_00')).map(g => ({
        title: g.name, type: 'Genre', gradient: g.gradient
    })),
    Recents: mockRecents.map(r => {
        if (r.type === 'Track') return r; // Track items don't have images
        // For visual items, use the image field
        return { ...r, image: r.image }; 
    }),
  }), []);

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
        {currentItems.map((item, i) => (
          <LibraryItem
            key={i} 
            {...item} 
            // Only set onClick for detailed pages (Playlist, Album, Artist)
            onClick={item.type === 'Playlist' || item.type === 'Album' || item.type === 'Artist' ? () => navigate('/playlist') : null} 
          />
        ))}
        {currentItems.length === 0 && (
            <p className="text-white/50 text-center col-span-full py-12">
                No items found in {activeFilter}. Start adding music to your library!
            </p>
        )}
      </div>
    </div>
  );
}

export default LibraryPage
