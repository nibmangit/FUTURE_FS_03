import { useState } from "react"
import {useNavigate } from 'react-router-dom'; 
import LibraryItem from "../components/Cards/LibraryItem"; 
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config'
import { useEffect } from "react";

function LibraryPage({onTrackSelect}) {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('Playlists');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const filters = ['Playlists', 'Artists', 'Albums', 'Tracks', 'Genres', 'Recents'];
  
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const collectionName = activeFilter.toLowerCase();
        const querySnapshot = await getDocs(collection(db, collectionName));
        const fetchedItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          type: activeFilter.slice(0,-1),
          ...doc.data()
        }))
        setItems(fetchedItems);
      }catch(error){
        console.log("Error fetching from Fairbase: ", error);
        setItems([]);
      }
      setLoading(false);
    };
    fetchData();
  },[activeFilter])
  
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

     {loading ? (
        <div className="text-white/50 text-center py-20">Loading...</div>
      ) : (
      <div className={gridClass}>
        {items.map((item) => (
          <LibraryItem
            key={`${item.type}-${item.id}`} 
            {...item} 
            title={item.name || item.title}
            onClick={['Playlist', 'Album', 'Artist'].includes(item.type) 
              ? () => navigate(`/playlist/${item.id}`) 
              : null}
              onTrackSelect={onTrackSelect} 
          />
        ))}
      {items.length === 0 && (
            <div className="text-white/30 text-center col-span-full py-20 border border-dashed border-white/10 rounded-3xl">
              This data hasn't been synced to the Cloud yet.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LibraryPage
