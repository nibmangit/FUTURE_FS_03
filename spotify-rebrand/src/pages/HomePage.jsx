import { useEffect, useState } from "react";
import HomeCard from "../components/Cards/HomeCard"; 
import { useNavigate } from "react-router-dom";
import {doc, getDoc, collection, getDocs, query, where, documentId } from 'firebase/firestore';
import {db } from '../firebase/config';
import LoadingScreen from "../components/LoadingScreen";

function HomePage() {
  const navigate = useNavigate(); 
  const [homeData, setHomeData] = useState(null);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(()=>{
    const fetchAllHomeContent = async()=>{
      try{
        setLoading(true);
        const configSnap = await getDoc(doc(db, "siteConfig", "homepage"));
        if(!configSnap.exists()) return;
        const config = configSnap.data();
        setHomeData(config);

        const playlistQuery = query(
          collection(db, "playlists"),
          where(documentId(), "in", config.featuredPlaylistIds)
        );
        const playlistSnap = await getDocs(playlistQuery);
        setFeaturedPlaylists(playlistSnap.docs.map(doc=>({
          id: doc.id,
          ...doc.data()
        })));

        const genreQuery = query(
          collection(db, "genres"),
          where(documentId(), "in", config.discoveryGenreIds)
        );
        const genreSnap = await getDocs(genreQuery);
        setCategories(genreSnap.docs.map(doc=>({id:doc.id, ...doc.data() })));
      }catch (error){
        console.error("Error fetching home content: ", error)
      }finally{
        setLoading(false)
      }
    }
    fetchAllHomeContent();
  },[]); 

  useEffect(()=>{
    if(!homeData?.hero?.images) return;
    const interval = setInterval(()=> {
      setHeroImageIndex((pre)=>(pre+1) % homeData.hero.images.length);
    }, 5000)
    return ()=>clearInterval(interval);
  },[homeData]);

  if (loading) return <LoadingScreen message="INITIALIZING NEURAL FEED..." />;
  if (!homeData) return null;

  const {hero}= homeData;
  const heroTitle =hero.title;
  const displayImages = hero.images || [hero.image];
 
  return (
    <div className="p-4 lg:p-8">  
      <div 
        className="w-full h-[60vh] sm:h-[60vh] rounded-3xl overflow-hidden relative mb-12 cursor-pointer"
      >
      {displayImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === heroImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="w-full h-full"
              style={{ 
                backgroundImage: `url(${img})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
              }} 
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-br from-[#050505] to-transparent flex flex-col justify-end p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {heroTitle.split(' ').slice(0, 2).join(' ')} <span className="text-[#22FF88] block">{heroTitle.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">{hero.subtitle}</p>
          <button
          onClick={()=>navigate('/library')}
          className={`px-6 py-3 font-bold rounded-full text-black transition-all duration-300 uppercase tracking-widest text-sm
                     bg-[#22FF88] hover:bg-[#00E5FF] active:scale-95 cursor-pointer`}
          >
          {hero.ctaPrimary}
         </button> 
        </div>
      </div>
       
      <h2 className="text-2xl font-bold mb-6 text-white">Featured for You</h2>
      <div className="flex space-x-4 pb-4 overflow-x-scroll no-scrollbar">
        {featuredPlaylists.map((playlist) => (
          <HomeCard key={playlist.id} {...playlist} />
        ))}
      </div>
 
      <h2 className="text-2xl font-bold mt-10 mb-6 text-white">Trending Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {categories.map((cat) => (
    <div 
      key={cat.id} 
      style={{ background: cat.gradient }}
      className={`h-32 rounded-3xl p-4 relative overflow-hidden cursor-pointer 
                  bg-linear-to-br ${cat.gradient} hover:scale-[1.02] 
                  transition-transform duration-300 shadow-xl hover:shadow-[0_0_15px_0_rgba(0,229,255,0.5)]`}
    >
      
      <h3 className="text-xl font-extrabold relative z-10 text-white">{cat.name}</h3>
      <span className="absolute right-4 bottom-4 text-4xl opacity-50 group-hover:scale-110 transition-transform">
              {cat.icon}
      </span>
     
       
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  ))}
</div>
    </div>
  );
}

export default HomePage
