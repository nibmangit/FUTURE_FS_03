import PricingCard from "../components/Cards/PricingCard"; 
import { mockPricingPlans } from "../data/mock";

function PremiumPage() {  

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-3xl font-extrabold mb-2 text-white text-center">Unlock The <span className="text-[#00E5FF]">Full Spectrum</span></h2>
      <p className="text-lg text-white/70 mb-12 text-center">Experience music without limits, powered by the Grid.</p>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto"> 
       {mockPricingPlans.map((plan, i) => <PricingCard key={i} {...plan} />)}
      </div>
    </div>
  );
}

export default PremiumPage
