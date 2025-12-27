import { useState } from "react"
import {useNavigate } from 'react-router-dom'; 
import LibraryItem from "../components/Cards/LibraryItem"; 
import { collection, getDocs, doc, getDoc} from "firebase/firestore";
import {db} from '../firebase/config'
import { useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";

function LibraryPage({onTrackSelect}) {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('Playlists');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const filters = ['Playlists', 'Artists', 'Albums', 'Tracks', 'Genres', 'Recents'];
  
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const collectionName = activeFilter.toLowerCase();
      const querySnapshot = await getDocs(collection(db, collectionName)); 
      const rawItems = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
 
      if (activeFilter === 'Recents') {
        const detailedRecents = await Promise.all(rawItems.map(async (recent) => { 
          const targetCol = recent.type.toLowerCase() + 's'; 
          const targetRef = doc(db, targetCol, recent.itemId);
          const targetSnap = await getDoc(targetRef);
          
          return {
            ...recent,
            ...(targetSnap.exists() ? targetSnap.data() : {}),
            id: recent.itemId
          };
        }));
        setItems(detailedRecents);
      } else { 
        const formattedItems = rawItems.map(item => ({
          ...item, 
          type: item.type || activeFilter.slice(0, -1) 
        }));
        setItems(formattedItems);
      }
    } catch (error) {
      console.error("Error fetching from Firebase: ", error);
      setItems([]);
    }
    setLoading(false);
  };
  fetchData();
}, [activeFilter]);
  
  const isListLayout = activeFilter === 'Tracks' || activeFilter === 'Recents';
  const gridClass = isListLayout 
    ? 'space-y-3'
    : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';

  return (
    <main className="p-4 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-white lg:hidden">Your Library</h1>

      <nav 
        aria-label="Library filters"
        className="flex space-x-3 overflow-x-scroll pb-4 mb-8 no-scrollbar">
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
      </nav>

     {loading ? (
        <LoadingScreen message="ACCESSING USER ARCHIVES..." />
      ) : (
      <section className={gridClass}>
        {items.map((item) => (
          <article key={`${item.type}-${item.id}`} className="relative group">
            <LibraryItem
              {...item}
              title={item.name || item.title} 
              subtitle={activeFilter === 'Recents' ? `Played ${item.timestamp}` : item.subtitle}
              onClick={['Playlist', 'Album', 'Artist'].includes(item.type) 
                ? () => navigate(`/${item.type.toLowerCase()}/${item.id}`) 
                : null}
              onTrackSelect={onTrackSelect} 
            />
            
            {activeFilter === 'Recents' && (
              <span 
                aria-label={`Item type: ${item.type}`}
                className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-[10px] text-[#00E5FF] px-2 py-1 rounded-md border border-[#00E5FF]/30 uppercase tracking-tighter">
                {item.type}
              </span>
            )}
          </article>
        ))}
      </section>
      )}
    </main>
  );
}

export default LibraryPage
