import { Check } from "lucide-react";

function PricingCard({ name, price, features, highlighted }) {
  // const { name, price, features, highlighted } = plan;

  const baseClass = highlighted
    ? 'bg-gradient-to-br from-[#22FF88] to-[#00E5FF] text-black shadow-2xl shadow-[#22FF88]/50'
    : `text-white/90 border-white/10`;
 
  return (
    <div 
      className={`p-6 sm:p-8 rounded-3xl flex-1 min-w-70 transition-all duration-500 
                  ${baseClass} ${highlighted ? 'scale-105 border-4 border-white/20' : ''}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-extrabold">{name}</h3>
        {highlighted && <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-white">BEST VALUE</span>}
      </div>
      <p className="text-5xl font-extrabold mb-6">
        {price}
        <span className={highlighted ? 'text-black/70 text-base font-normal' : 'text-white/50 text-base font-normal'}>/month</span>
      </p>

      <ul className={`list-none mb-10 text-sm ${highlighted ? 'text-black/80' : 'text-white/80'}`}>
        {features.map((f, i) => (
          <li key={i} className="flex items-start mb-3">
            <span className={highlighted ? 'text-black mr-3 mt-1' : 'text-[#22FF88] mr-3 mt-1'}><Check size={18} /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-300 uppercase tracking-widest active:scale-95
                   `}
      >
        {highlighted ? 'GO PREMIUM NOW' : 'TRY 7 DAYS FREE'}
      </button>
    </div>
  );
}; 

export default PricingCard
