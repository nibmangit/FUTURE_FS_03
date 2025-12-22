import { Music, Shuffle, ChevronLeft, Repeat, Volume2, Heart, Play, Pause } from "lucide-react"
import { useState } from "react";

function BottomPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-3 lg:p-4 rounded-none lg:rounded-t-3xl`}>
              <div className="flex items-center justify-between gap-4">
                 
                <div className="flex items-center space-x-3 w-1/4 min-w-30 lg:w-48">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center text-lg text-[#00E5FF]">
                    <Music size={20} />
                  </div>
                  <div className="hidden sm:block truncate">
                    <p className="text-sm font-semibold truncate">Title</p>
                    <p className="text-xs text-white/60 truncate">artist</p>
                  </div>
                </div>
         
                <div className="flex-1 max-w-xl flex flex-col items-center">
                  <div className="flex items-center space-x-6 mb-1">
                    <Shuffle size={20} className="text-white/50 hover:text-[#00E5FF] cursor-pointer" />
                    <ChevronLeft size={30} className="text-white/80 hover:text-white cursor-pointer" />
                    <button 
                      className={`w-12 h-12 rounded-full bg-white text-[#050505] flex items-center justify-center 
                                  hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg 
                                  `}
                    >
                      {isPlaying ? <Pause fill="#050505" size={20} /> : <Play fill="#050505" size={20} />}
                    </button>
                    <ChevronLeft size={30} className="transform rotate-180 text-white/80 hover:text-white cursor-pointer" />
                    <Repeat size={20} className="text-white/50 hover:text-[#00E5FF] cursor-pointer" />
                  </div>
         
                  <div className="hidden lg:flex items-center w-full text-xs text-white/60 mt-1">
                    <span>0:30</span>
                    <div className="flex-1 h-1 mx-3 rounded-full bg-white/10 relative cursor-pointer group">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-[#22FF88] to-[#00E5FF] transition-all duration-100" 
                      ></div>
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#22FF88] 
                                   -mt-1 transition-all duration-100 `} 
                      ></div>
                    </div>
                    <span>2:45</span>
                  </div>
                </div>
         
                <div className="hidden lg:flex items-center space-x-2 w-48 justify-end">
                  <Volume2 size={20} className="text-white/70" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="70"
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer range-sm" 
                    style={{
                        '--tw-progress-color': '#22FF88',
                        '--tw-track-color': '#111827',
                    }}
                  />
                </div>
         
                <div className="sm:hidden w-1/4 flex justify-end">
                     <Heart size={20} className="text-white/50" />
                </div>
              </div>
            </div>
    )
}

export default BottomPlayer
