import { useEffect, useState } from "react";
import PricingCard from "../components/Cards/PricingCard";  
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase/config'

function PremiumPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchPlans = async()=>{
      try{
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "plans"));
        const plansList = querySnapshot.docs.map(doc=>({
          id:doc.id,
          ...doc.data()
        }));
        
        const sortedPlans = plansList.sort((a,b)=>a.id.localeCompare(b.id));
        setPlans(sortedPlans);
      }catch(error){
        console.error("Error fetching the pricing palns:", error);
      }finally{
        setLoading(false);
      }
    }
    fetchPlans();
  },[]);

  return (
    <div className="p-4 lg:p-8 animate-in fade-in duration-700"> 
      <h2 className="text-3xl font-extrabold mb-2 text-white text-center">
        Unlock The <span className="text-[#00E5FF]">Full Spectrum</span>
      </h2>
      <p className="text-lg text-white/70 mb-12 text-center">
        Experience music without limits, powered by the Grid.
      </p>
 
      {loading ? (
          <div className="flex justify-center py-20">
            <div className="text-[#22FF88] animate-pulse font-mono tracking-tighter">
              CALCULATING NEURAL SUBSIDIES...
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto"> 
            {plans.map((plan) => ( 
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        )}
 
      <p className="mt-12 text-center text-white/30 text-sm uppercase tracking-widest">
        Secure Encryption • Cancel Anytime • Neural-Link Ready
      </p>
    </div>
  );
} 

export default PremiumPage;