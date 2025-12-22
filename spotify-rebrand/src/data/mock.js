import { Coffee, Zap, Rocket, Music, Cloud, Mic2, Cpu, Radio } from 'lucide-react';

export const playlists = [
  {
    title: "Synthwave",
    subtitle: "80s Neon Drive",
    image: "/assets/images/playlists/synthwave.png",
  },
 {
    title: "Cyberpop",
    subtitle: "Top 100 Hits",
    image: "/assets/images/playlists/cyberpop.png",
  },
 {
    title: "Future Bass",
    subtitle: "Heavy Drops",
    image: "/assets/images/playlists/future-bass.png",
   },
 {
    title: "Ambient Glitch",
    subtitle: "Digital Calm",
    image: "/assets/images/playlists/ambient-glitch.png",
  },
]

 export const categories = [{
    name: "Lo-Fi Beats",
    gradient: "from-[#6D28D9] to-[#00E5FF]",
    image: "/assets/images/genres/lo-fi-beats.png",
    icon: Coffee,
 },

  {
    name: "High-Tech Trance",
    gradient: "from-[#22FF88] to-[#00E5FF]",
    image: "/assets/images/genres/high-tech.png",
    icon: Cpu,
  },

  {
    name: "Warp Speed Pop",
    gradient: "from-orange-500 to-yellow-500",
    image: "/assets/images/genres/warp-speed-pop.png",
    icon: Rocket,
  },
 {
    name: "Neo-Classical",
    gradient: "from-pink-500 to-red-500",
    image: "/assets/images/genres/neo-classical.png",
    icon: Music,
  },
 {
    name: "Ambient Space",
    gradient: "from-[#020617] to-[#3B82F6]",
    image: "/assets/images/genres/ambient-space.png",
    icon: Cloud,
   },
   {
    name: "Cyber Jazz",
    gradient: "from-[#064E3B] to-[#22FF88]",
    image: "/assets/images/genres/cyber-jazz.png",
    icon: Radio,
   },

  {
    name: "Digital Trap",
    gradient: "from-[#111827] to-[#7C3AED]",
    image: "/assets/images/genres/digital-trap.png",
    icon: Zap,
   },

  {
    name: "Synth Pop",
    gradient: "from-[#00E5FF] to-[#EC4899]",
    image: "/assets/images/genres/synth-pop.png",
    icon: Mic2,
   }
]


export const plans = [
    {
      plan: "Free Tier",
      price: "$0",
      isPremium: false,
      features: ['Ad-supported listening', 'Standard audio quality', 'Mobile access']
    },
    {
      plan: "Cyber Pro",
      price: "$9.99",
      isPremium: true,
      features: ['Ad-free experience', 'Lossless Hi-Fi audio', 'Unlimited downloads', 'Exclusive Cyber Beats']
    },
    {
      plan: "Nexus Family",
      price: "$14.99",
      isPremium: true,
      features: ['Up to 6 accounts', 'Ad-free experience', 'Parental controls', 'Family Mix playlists']
    }
  ];