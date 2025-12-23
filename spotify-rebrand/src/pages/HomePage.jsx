import { useMemo } from "react";
import HomeCard from "../components/Cards/HomeCard";
import {mockGenres, mockHomepage, mockPlaylists,} from '../data/mock' 

const findDataById = (data, id) => data.find(item => item.id === id);

function HomePage() {
  const { heroTitle, heroSubtitle, heroImage, ctaPrimary, featuredPlaylistIds } = mockHomepage;
   
  const featuredPlaylists = useMemo(() => 
    featuredPlaylistIds.map(id => findDataById(mockPlaylists, id)).filter(p => p)
  , [featuredPlaylistIds]);
 

  const categories = mockGenres.filter(g => ['g_001', 'g_002', 'g_003', 'g_004'].includes(g.id));
  return (
    <div className="p-4 lg:p-8">
       
      <div 
        className="w-full h-[60vh] sm:h-[60vh] rounded-3xl overflow-hidden relative mb-12 cursor-pointer"
      >
        <div className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${heroImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}
        role="img"
        aria-label={heroTitle}
      />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] to-transparent flex flex-col justify-end p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {heroTitle.split(' ').slice(0, 2).join(' ')} <span className="text-[#22FF88] block">{heroTitle.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">{heroSubtitle}</p>
          <button
          className={`px-6 py-3 font-bold rounded-full text-black transition-all duration-300 uppercase tracking-widest text-sm
                     bg-[#22FF88] hover:bg-[#00E5FF] active:scale-95`}
          >
          {ctaPrimary}
         </button> 
        </div>
      </div>
       
      <h2 className="text-2xl font-bold mb-6 text-white">Good Evening</h2>
      <div className="flex space-x-4 pb-4 overflow-x-scroll no-scrollbar">
        {featuredPlaylists.map((p, i) => <HomeCard key={i} {...p} />)}
      </div>
 
      <h2 className="text-2xl font-bold mt-10 mb-6 text-white">Trending Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {categories.map((cat, i) => (
    <div 
      key={i} 
      className={`h-32 rounded-3xl p-4 relative overflow-hidden cursor-pointer 
                  bg-linear-to-br ${cat.gradient} hover:scale-[1.02] 
                  transition-transform duration-300 shadow-xl`}
    >
      
      <h3 className="text-xl font-extrabold relative z-10 text-white">{cat.name}</h3>
 
      {cat.image && (
        <img 
          src={cat.image} 
          alt={cat.name}
          className="absolute -right-2 -bottom-2 w-20 h-20 object-cover rotate-25 shadow-lg rounded-lg transition-transform duration-300 group-hover:scale-110" 
        />
      )}
       
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  ))}
</div>
    </div>
  );
}

export default HomePage
