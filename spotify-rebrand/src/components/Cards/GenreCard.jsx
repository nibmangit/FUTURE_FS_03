function GenreCard({ name, gradient, image, icon }) {
  return (
    <div 
       style={{ background: gradient }} 
      className={`h-40 rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer 
                  bg-linear-to-br shadow-xl hover:scale-[1.02] transition-all duration-300 
                  hover:shadow-[0_0_20px_0_rgba(0,229,255,0.3)] group`}
    > 
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
 
      <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg">{icon}</div>
      <h3 className="text-xl font-black relative z-10 leading-tight drop-shadow-md text-white">
        {name}
      </h3> 
      {image && (
        <img 
          src={image} 
          alt={name}
          className="absolute -right-4 -bottom-4 w-24 h-24 object-contain rotate-20 
                     opacity-80 group-hover:opacity-100 group-hover:rotate-15 
                     transition-all duration-500 pointer-events-none"
        />
      )}
    </div>
  );
}

export default GenreCard;