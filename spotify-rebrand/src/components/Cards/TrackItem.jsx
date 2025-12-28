import { useState, useEffect } from "react";
import { Play, MoreVertical } from 'lucide-react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function TrackItem({ track, index, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [artistName, setArtistName] = useState("");
  
  const trackGlow = isHovered ? 'bg-[#22FF88]/10 shadow-[0_0_8px_0_rgba(34,255,136,0.2)]' : '';
 
  useEffect(() => { 
      const fetchArtist = async () => {
        if (track?.artistName) {
        setArtistName(track.artistName);
        return;
      }
      if (!track?.artistId) return;
      try {
        const artistSnap = await getDoc(doc(db, "artists", track.artistId));
        if (artistSnap.exists()) {
          setArtistName(artistSnap.data().name);
        }
      } catch (error) {
        console.error("Error fetching artist for track:", error);
      }
    };

    fetchArtist();
  }, [track]);

  if (!track) return null;

  return (
    <div 
      onClick={() => onSelect(track.id)}
      style={{ contentVisibility: 'auto' }}
      className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-200 ${trackGlow}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="w-8 text-center text-sm font-mono text-white/50 relative">
        {isHovered ? (
          <Play size={16} className="text-[#22FF88] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        ) : (
          index
        ) }
      </div>
      
      <div className="flex-1 min-w-0 mx-4">
        <p className="text-white font-medium truncate">{track.title}</p> 
        <p className="text-xs text-white/60 truncate group-hover:text-[#22FF88]">
          {artistName || 'Loading...'}
        </p>
      </div>

      <div className="text-sm text-white/50 font-mono">{track.duration}</div>
      
      <button className="p-2 ml-4 text-white/50 hover:text-white transition-colors">
        <MoreVertical size={18} />
      </button>
    </div>
  );
}

export default TrackItem;