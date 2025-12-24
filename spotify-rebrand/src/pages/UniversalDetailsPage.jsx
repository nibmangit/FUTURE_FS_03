import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Play, Heart } from 'lucide-react';
import TrackItem from '../components/Cards/TrackItem'; 
import { getGlassClass, getNeonGlowClass } from '../components/globalStyle';
import { doc, getDoc, collection, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import LoadingScreen from '../components/LoadingScreen';

const UniversalDetailsPage = ({ onTrackSelect }) => {
  const { id } = useParams();
  const location = useLocation();

  const [content, setContent] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUniversalData = async () => {
      setLoading(true);
      try { 
        let collectionName = "playlists";
        if (location.pathname.includes('/artist/')) collectionName = "artists";
        if (location.pathname.includes('/album/')) collectionName = "albums";

        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const rawData = docSnap.data();
           
          const normalizedContent = {
            ...rawData,
            displayTitle: rawData.title || rawData.name,
            displayImage: rawData.image || rawData.avatar,
            typeLabel: collectionName.slice(0, -1)
          };
          setContent(normalizedContent);
           
          if (normalizedContent.trackIds && normalizedContent.trackIds.length > 0) {
            const tracksQuery = query(
              collection(db, "tracks"),
              where(documentId(), "in", normalizedContent.trackIds)
            );
            const tracksSnap = await getDocs(tracksQuery);

            const tracksList = tracksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const orderedTracks = normalizedContent.trackIds
                .map(tId => tracksList.find(track => track.id === tId))
                .filter(Boolean);
            setTracks(orderedTracks);
          } else {
            setTracks([]);
          }
        }
      } catch (error) {
        console.error("Error fetching details: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUniversalData();
  }, [id, location.pathname]);

  if (loading) return <LoadingScreen message="DECODING AUDIO STREAM..." />;
  if (!content) return <div className="p-8 text-white">Subject not found in database.</div>;

  return (
    <div className="min-h-screen"> 
      <div className="relative pt-12 pb-8 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={content.displayImage} 
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(30px) brightness(0.6)', transform: 'scale(1.1)' }}
          />
        </div>
        <div className="absolute inset-0 bg-[#050505]/70" />
          
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 z-10 text-center sm:text-left">
          <div className="w-48 h-48 rounded-2xl shadow-2xl shadow-[#22FF88]/20 overflow-hidden shrink-0 border border-white/10">
            <img 
                src={content.displayImage}
                alt={content.displayTitle}
                className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-[#22FF88] uppercase tracking-[0.3em] mb-2 block">
                {content.typeLabel}
            </span>
            <h1 className="text-4xl sm:text-7xl font-black text-white leading-tight">
                {content.displayTitle}
            </h1>
            <p className="text-sm text-white/60 mt-4 max-w-xl">{content.description || content.bio || "No data stream description available."}</p>
          </div>
        </div>
      </div>
         
      <div className="sticky top-0 z-20 flex items-center p-4 sm:p-8 space-x-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <button className={`w-14 h-14 rounded-full bg-[#22FF88] text-black flex items-center justify-center shadow-lg ${getNeonGlowClass()} hover:scale-105 active:scale-95 transition-all`}>
          <Play size={24} fill="#050505" />
        </button>
        <button className={`p-3 ${getGlassClass()} hover:border-[#00E5FF] text-white/80`}>
          <Heart size={20} />
        </button>
      </div>
         
      <div className="p-4 sm:p-8 space-y-2 max-w-6xl mx-auto">
        <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Data Tracks</h3>
        {tracks.length > 0 ? (
            tracks.map((track, i) => (
                <TrackItem key={track.id} track={track} index={i + 1} onSelect={onTrackSelect} />
            ))
        ) : (
            <div className="text-white/20 py-10 italic">This sector contains no audio data.</div>
        )}
      </div>
    </div>
  );
};

export default UniversalDetailsPage;