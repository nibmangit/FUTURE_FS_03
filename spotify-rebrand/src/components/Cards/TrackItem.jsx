import { useState } from "react";
import { Play, MoreVertical } from 'lucide-react';
import {mockArtists} from '../../data/mockdata'

function TrackItem({track, index, onSelect}) {
  const [isHovered, setIsHovered] = useState(false);
  const trackGlow = isHovered ? 'bg-[#22FF88]/10 shadow-[0_0_8px_0_rgba(34,255,136,0.2)]' : '';

  return (
    <div 
      onClick={()=>onSelect(track.id)}
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
        )}
      </div>
      <div className="flex-1 min-w-0 mx-4">
        <p className="text-white font-medium truncate">{track.title}</p> 
        <p className="text-xs text-white/60 truncate">
          {mockArtists[track.artistId]?.name || 'Unknown Artist'}
        </p>
      </div>
      <div className="text-sm text-white/50">{track.duration}</div>
      <MoreVertical size={18} className="ml-4 text-white/50 hover:text-white" />
    </div>
  );
}

export default TrackItem
