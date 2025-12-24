import {Heart, Music, Play } from 'lucide-react'
import { getGlassClass, getNeonGlowClass } from '../globalStyle';

const LibraryItem = ({ type, title, subtitle, image, onClick, gradient }) => {
  const isArtist = type === 'Artist';
  const shapeClass = isArtist ? 'rounded-full' : 'rounded-xl';
 
  if (type === 'Track') {
      return (
          <div className={`p-4 ${getGlassClass()} flex items-center justify-between group cursor-pointer 
                          hover:shadow-[0_0_12px_0_rgba(34,255,136,0.3)] min-w-full`}
               onClick={onClick}
          >
              <div className="flex items-center space-x-4 min-w-0">
                  <Music size={20} className="text-[#22FF88] shrink-0" />
                  <div className="min-w-0 flex-1">
                      <h4 className="text-base font-semibold truncate">{title}</h4>
                      <p className="text-xs text-white/60 truncate">{subtitle}</p>
                  </div>
              </div>
              <Heart size={18} className="text-white/50 hover:text-red-500 transition-colors" />
          </div>
      );
  } 
  if (type === 'Genre') {
      return (
          <div 
              className={`p-4 h-32 flex items-end rounded-3xl relative overflow-hidden cursor-pointer 
                          bg-linear-to-br ${gradient} hover:scale-[1.02] transition-transform duration-300 shadow-xl 
                          hover:shadow-[0_0_15px_0_rgba(0,229,255,0.5)]`}
              onClick={onClick}
          >
              <div className="absolute inset-0 opacity-20 bg-black/20" />
              <h3 className="text-xl font-extrabold relative z-10">{title}</h3>
          </div>
      );
  }
   
  return (
    <div 
      className={`p-4 ${getGlassClass()} overflow-hidden relative group cursor-pointer 
                  hover:shadow-[0_0_12px_0_rgba(0,229,255,0.5)]`}
      onClick={onClick}
    >
      <div className={`aspect-square w-full mb-3 overflow-hidden ${shapeClass}`}>
        <img 
            src={image} 
            alt={title} 
            className={`object-cover w-full h-full transition-transform duration-300 
                ${isArtist ? 'rounded-full' : 'rounded-xl'} transition-transform duration-300 group-hover:scale-105`} 
            
            /> 
      </div>
      <h4 className="text-base font-bold truncate">{title}</h4>
      <p className="text-xs text-white/60">{type} • {subtitle}</p>
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`w-10 h-10 rounded-full bg-[#22FF88] text-black flex items-center justify-center ${getNeonGlowClass()} `}>
          <Play size={20} fill="#050505" />
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;