import { Play } from "lucide-react"
import { useNavigate } from "react-router-dom"

function HomeCard({id, title, subtitle, image }) {
    const navigate = useNavigate();
    return (
        <div 
            onClick={()=>navigate(`/playlist/${id}`)}
            className={`min-w-64 h-36 p-5 flex flex-col justify-end relative overflow-hidden shrink-0
                       rounded-2xl border border-white/10 hover:border-[#00E5FF]/50 
                       transition-all duration-300 group cursor-pointer shadow-lg`}
          >  

            <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-150" 
                style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }} 
            />
             
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
             
            <div className="relative z-10">
                <h4 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors truncate">
                    {title}
                </h4>
                <p className="text-xs text-white/70 truncate">{subtitle}</p>
            </div>
          
            <button 
            className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-[#22FF88] text-black 
                        flex items-center justify-center opacity-0 group-hover:opacity-100 
                        translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(34,255,136,0.5)]`}>
              <Play size={20} fill="#050505" />
            </button>
        </div>
    )
}

export default HomeCard