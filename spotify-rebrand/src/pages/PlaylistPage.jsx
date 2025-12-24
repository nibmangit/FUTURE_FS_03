import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Heart, MoreVertical } from 'lucide-react';
import TrackItem from '../components/Cards/TrackItem'; 
import { getGlassClass, getNeonGlowClass } from '../components/globalStyle';
import {doc, getDoc, collection, query, where, documentId} from 'firebase/firestore';
import {db} from '../firebase/config';


const PlaylistPage = ({onTrackSelect}) => {
  const { id } = useParams();

  const [playlist, setPlaylist]= useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchPlaylistAndTracks = async()=>{
      setLoading(true);
      try{
        const playlistRef = doc(db, "playlists", id);
        const playlistSnap = await getDoc(playlistRef);

        if(playlistSnap.exists()){
          const playlistData = playlistSnap.data();
          setPlaylist(playlistData);
          
          if(playlistData.trackIds && playlistData.trackIds.length > 0 ){
            const tracksQuery = query(
              collection(db, "tracks"),
              where(documentId(), "in", playlistData.trackIds )
            );
            const tracksSnap = await getDoc(tracksQuery);

            const tracksList = tracksSnap.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setTracks(tracksList);
          }else{
            setTracks([]);
          }
        }
      }catch(error){
        console.error("Error fetching playlist details: ", error);
      }finally{
        setLoading(false);
      }
    };
    fetchPlaylistAndTracks();
  },[id]); 

  if (loading) return <div className="p-20 text-center text-white animate-pulse">Loading...</div>;
  if (!playlist) return <div className="p-8 text-white">Playlist not found.</div>;

  return (
    <div className="min-h-screen">
      <div className="relative pt-12 pb-8 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={playlist.image} 
            alt={`${playlist.title} Background`}
            className="w-full h-full object-cover"
            style={{ filter: 'blur(30px) brightness(0.7)', transform: 'scale(1.1)' }}
          />
        </div>
        <div className="absolute inset-0 bg-[#050505]/70" />
         
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 z-10 text-center sm:text-left">
          <div className="w-40 h-40 rounded-xl shadow-2xl shadow-[#00E5FF]/50 overflow-hidden shrink-0">
            <img 
                src={playlist.image}
                alt={playlist.title}
                className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mt-2">{playlist.title}</h1>
            <p className="text-sm text-white/60 mt-2">Playlist by <span className="text-[#22FF88]">The Grid</span></p>
            <p className="text-sm text-white/60">{playlist.description}</p>
          </div>
        </div>
      </div>
       
      <div className="sticky top-0 z-20 flex items-center p-4 sm:p-8 space-x-4 bg-[#050505]/90 backdrop-blur-sm border-b border-white/5">
        <button 
          className={`w-14 h-14 rounded-full bg-[#22FF88] text-black flex items-center justify-center shadow-lg 
                     ${getNeonGlowClass()} hover:scale-105 active:scale-95 transition-transform duration-200`}
        >
          <Play size={24} fill="#050505" />
        </button>
        
        <button className={`p-3 ${getGlassClass()} hover:border-[#00E5FF] text-white/80 hover:text-[#00E5FF]`}>
          <Heart size={20} />
        </button>
        <button className={`p-3 ${getGlassClass()} hover:border-[#00E5FF] text-white/80 hover:text-[#00E5FF]`}>
          <MoreVertical size={20} />
        </button>
      </div>
       
      <div className="p-4 sm:p-8 space-y-2 max-w-6xl mx-auto">
        {tracks.map((track, i) => (
          <TrackItem key={track.id} track={track} index={i + 1} onSelect={onTrackSelect} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;