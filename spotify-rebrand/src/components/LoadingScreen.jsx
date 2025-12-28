const LoadingScreen = ({ message = "SYNCING WITH THE GRID..." }) => {
  return (  
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center animate-in fade-in duration-500">
      <div className="relative w-16 h-16"> 
        <div className="absolute inset-0 rounded-full border-2 border-[#22FF88]/10 animate-ping will-change-transform"></div>
        <div className="absolute inset-0 rounded-full border-t-2 border-[#00E5FF] animate-spin shadow-[0_0_15px_#00E5FF] will-change-transform"></div>
        
        <div className="absolute inset-4 rounded-full bg-[#22FF88]/10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22FF88] animate-pulse"></div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center"> 
        <p 
          aria-live="polite" 
          className="text-[#22FF88] font-mono text-[10px] tracking-[0.3em] uppercase opacity-70"
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;