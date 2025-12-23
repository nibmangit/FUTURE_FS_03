import GenreCard from '../components/Cards/GenreCard'; 
import { mockGenres } from '../data/mock';

function SearchPage() { 
  const genres = mockGenres.filter(g => g.id.startsWith('g_00'));

  const glassInputClass = `w-full px-6 py-3 text-lg bg-white/5 backdrop-blur-sm border border-white/5 
                           rounded-full text-white placeholder-white/50 focus:outline-none 
                           focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all duration-300`;;

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Global Rhythms</h2>
       
      <div className="mb-10">
        <input 
          type="search" 
          placeholder="Search for Tracks, Artists, or Beats..." 
          className={glassInputClass}
        />
      </div>
 
      <h3 className="text-2xl font-bold mb-6 text-white">Genre Discovery</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {genres.map((genre, i) => <GenreCard key={i} {...genre} />)}
      </div>
    </div>
  ); 
}

export default SearchPage
