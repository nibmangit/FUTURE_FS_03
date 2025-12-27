import { Music, Shuffle, ChevronLeft, Repeat, Volume2, Heart, Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"; 
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { getGlassClass, getNeonGlowClass} from "../globalStyle";

function BottomPlayer({ currentTrackId }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackData, setTrackData] = useState({ track: null, artist: null, album: null });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!currentTrackId) return;

        const fetchFullTrackInfo = async () => {
            setLoading(true);
            try { 
                const trackRef = doc(db, "tracks", currentTrackId);
                const trackSnap = await getDoc(trackRef);

                if (trackSnap.exists()) {
                    const track = trackSnap.data();
                     
                    const [artistSnap, albumSnap] = await Promise.all([
                        getDoc(doc(db, "artists", track.artistId)),
                        getDoc(doc(db, "albums", track.albumId))
                    ]);

                    setTrackData({
                        track,
                        artist: artistSnap.exists() ? artistSnap.data() : null,
                        album: albumSnap.exists() ? albumSnap.data() : null
                    });
                     
                    setIsPlaying(true);
                }
            } catch (error) {
                console.error("Error loading player data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFullTrackInfo();
    }, [currentTrackId]);

    const { track, artist, album } = trackData;

    return (
        <section 
          aria-label="Music player controls"
          className={`fixed bottom-0 left-0 right-0 z-50 p-3 lg:p-4 ${getGlassClass()} rounded-none lg:rounded-t-3xl bg-[#050505]/95 backdrop-blur-xl border-t border-white/5`}>
            <div className="flex items-center justify-between gap-2">
                 
                <figure className="flex items-center space-x-3 w-1/4 min-w-30 lg:w-48">
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 ${loading ? 'animate-pulse' : ''}`}>
                    {album?.image ? (
                        <img src={album.image} alt={track?.title} className="w-full h-full object-cover" />
                    ) : (
                        <Music size={20} className="text-[#00E5FF]" />
                    )}
                  </div>
                  <figcaption className="hidden sm:block truncate">
                    <p className="text-sm font-semibold truncate text-white">
                        {track?.title || (loading ? "Loading..." : "Not Playing")}
                    </p>
                    <p className="text-xs text-white/60 truncate hover:text-[#22FF88] cursor-pointer">
                        {artist?.name || "Unknown Artist"}
                    </p>
                  </figcaption>
                </figure>
            
                <div className="flex-1 max-w-xl flex flex-col items-center">
                  <div className="flex items-center space-x-6 mb-1">
                    <Shuffle size={20} className="hidden sm:block text-white/50 hover:text-[#00E5FF] cursor-pointer transition-colors" />
                    <ChevronLeft size={30} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
                    
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-pressed={isPlaying}
                      aria-label={isPlaying ? `Pause ${track?.title}` : `Play ${track?.title}`}
                      className={`w-12 h-12 rounded-full bg-white text-[#050505] flex items-center justify-center 
                                  hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg
                                  ${getNeonGlowClass()}`}
                    >
                      {isPlaying ? <Pause fill="#050505" size={20} /> : <Play fill="#050505" size={20} />}
                    </button>

                    <ChevronLeft size={30} className="transform rotate-180 text-white/80 hover:text-white cursor-pointer transition-colors" />
                    <Repeat size={20} className="hidden sm:block text-white/50 hover:text-[#00E5FF] cursor-pointer transition-colors" />
                  </div>
            
                  <div className="hidden lg:flex items-center w-full text-xs text-white/60 mt-1">
                    <span>0:30</span>
                    <div className="flex-1 h-1 mx-3 rounded-full bg-white/10 relative cursor-pointer group">
                      <div className="h-full w-1/3 rounded-full bg-linear-to-r from-[#22FF88] to-[#00E5FF] transition-all duration-100" ></div>
                      <div className={`absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 rounded-full bg-[#22FF88] transition-all duration-100 shadow-[0_0_10px_#22FF88]`}></div>
                    </div>
                    <span>{track?.duration || "0:00"}</span>
                  </div>
                </div>
            
                <div className="hidden lg:flex items-center space-x-2 w-48 justify-end">
                  <Volume2 size={20} className="text-white/70" />
                  <input
                    type="range" min="0" max="100" aria-label="Volume control" defaultValue="70"
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#22FF88]"
                  />
                </div>
           
                <div className="sm:hidden w-1/4 flex justify-end">
                     <Heart size={20} className="text-white/50" role="button" aria-label="Add to favorites" />
                </div>
            </div>
        </section>
    )
}

export default BottomPlayer