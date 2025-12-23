import { Coffee, Zap, Rocket, Music, Cloud, Mic2, Cpu, Radio } from 'lucide-react'; 
export const mockHomepage = {
    heroTitle: 'Dive Into The Starlight Drive',
    heroSubtitle: "Your personalized journey through tomorrow's soundscape.",
    heroImage: "/assets/images/hero/Hero-1.png",
    ctaPrimary: 'START DISCOVERY',
    ctaSecondary: 'VIEW ALL',
    featuredPlaylistIds: ['p_001', 'p_002', 'p_003', 'p_004'], // These will map to the playlists below
};
export const mockPlaylists = [
  {
    id: 'p_001', 
    title: 'Synthwave', 
    description: '80s Vibes', 
    image: "/assets/images/playlists/synthwave.png",
    genre: 'Synthwave', 
    isFeatured: true,
    tracks: []
  },
 {  
    id: 'p_002', 
    title: 'Cyberpop', 
    image: "/assets/images/playlists/cyberpop.png",
    description: 'Top 100',   
    genre: 'Pop', 
    isFeatured: true,
    tracks: []
  },
 {  
    id: 'p_003', 
    title: 'Future Bass', 
    description: 'Heavy Drops', 
    image: "/assets/images/playlists/future-bass.png", 
    genre: 'Bass', 
    isFeatured: true,
    tracks: []
   },
 {
    id: 'p_004', 
    title: 'Ambient Glitch', 
    description: 'Relax', 
    image: "/assets/images/playlists/ambient-glitch.png",  
    genre: 'Ambient', 
    isFeatured: true,
    tracks: []
  },
]
 
export const mockGenres = [
    // Discovery Hub Categories (used in HomePage)
    { id: 'g_001', name: 'Lo-Fi Beats', gradient: 'from-purple-500 to-indigo-700', icon: '🎧' },
    { id: 'g_002', name: 'High-Tech Trance', gradient: 'from-[#00E5FF] to-teal-500', icon: '⚡' },
    { id: 'g_003', name: 'Warp Speed Pop', gradient: 'from-pink-500 to-red-600', icon: '🚀' },
    { id: 'g_004', name: 'Neo-Classical', gradient: 'from-gray-700 to-gray-500', icon: '🎻' },

    // Global Rhythms Categories (used in SearchPage)
    { id: 'g_005', name: 'Ambient', gradient: 'from-blue-900 to-purple-800', icon: '☁️' },
    { id: 'g_006', name: 'Drill', gradient: 'from-red-900 to-black', icon: '🔪' },
    { id: 'g_007', name: 'Vaporwave', gradient: 'from-[#00E5FF] to-pink-500', icon: '💾' },
    { id: 'g_008', name: 'Jazz Fusion', gradient: 'from-green-700 to-teal-500', icon: '🎷' },
    { id: 'g_009', name: 'Hardcore', gradient: 'from-yellow-500 to-red-600', icon: '🔥' },
    { id: 'g_010', name: 'Trap', gradient: 'from-[#6D28D9] to-black', icon: '⛓️' },
    { id: 'g_011', name: 'Pop', gradient: 'from-pink-500 to-purple-400', icon: '✨' },
    { id: 'g_012', name: 'Dubstep', gradient: 'from-[#22FF88] to-cyan-500', icon: '🔊' },
];
 
export const mockPricingPlans = [
    {
        id: 'plan_001',
        name: 'Free Tier',
        price: '$0',
        features: ['Ad-supported listening', 'Standard audio quality', 'Mobile access'],
        highlighted: false,
    },
    {
        id: 'plan_002',
        name: 'Cyber Pro',
        price: '$9.99',
        features: ['Ad-free experience', 'Lossless audio quality', 'Unlimited downloads', 'Full access to all libraries', 'Friend Activity Panel on mobile'],
        highlighted: true,
    }, 
     {
      id: 'plan_003',
      name: "Nexus Family",
      price: "$14.99",
      features: ['Up to 6 accounts', 'Ad-free experience', 'Parental controls', 'Family Mix playlists'],
      highlighted: true,
    } 
];
 