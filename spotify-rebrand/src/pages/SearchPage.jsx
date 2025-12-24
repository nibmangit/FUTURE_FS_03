import { useEffect, useState } from 'react';
import GenreCard from '../components/Cards/GenreCard';  
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import LoadingScreen from '../components/LoadingScreen';

function SearchPage() { 
  const [searchQuery, setSearchQuery] = useState("");
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(()=>{
    const fetchGenres = async()=>{
      try{
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "genres"));
        const genreList = querySnapshot.docs.map(doc=> ({
          id: doc.id,
          ...doc.data()
        }));
        setGenres(genreList);
      }catch(error){
        console.error("Error fetching genres: ", error);
      }finally{
        setLoading(false);
      }
    }
    fetchGenres();
  },[]);
 
  const filteredGenres = genres.filter(g=> g.name.toLowerCase().includes(searchQuery.toLowerCase()));
 
  const glassInputClass = `w-full px-6 py-4 text-lg bg-white/5 backdrop-blur-md border border-white/10 
                           rounded-2xl text-white placeholder-white/40 focus:outline-none 
                           focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all duration-300
                           shadow-2xl shadow-black/50`;

  return (
    <div className="p-4 lg:p-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Global Rhythms</h2>
       
      <div className="mb-12 relative group"> 
        <div className="absolute -inset-1 bg-linear-to-br from-[#00E5FF] to-[#22FF88] rounded-2xl blur opacity-10 group-focus-within:opacity-25 transition duration-500"></div>
        
        <input 
          type="search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Tracks, Artists, or Beats..." 
          className={glassInputClass}
        />
      </div>
 
      <h3 className="text-2xl font-bold mb-6 text-white/90">Genre Discovery</h3>

      {loading ? (
        <LoadingScreen message="SCANNING GLOBAL FREQUENCIES..." />
      ) : filteredGenres.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredGenres.map((genre) => ( 
            <GenreCard key={genre.id} {...genre} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-white/40 text-lg">No genres found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  ); 
}

export default SearchPage;