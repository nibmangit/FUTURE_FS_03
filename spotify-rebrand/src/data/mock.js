
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

    { 
        id: 'p_005', 
        title: 'Digital Dreams', 
        description: '50 tracks', 
        image: "/assets/images/playlists/digital-dreams.png", 
        genre: 'R&B', 
        isFeatured: false,
        tracks: []
    },
    { 
        id: 'p_006', 
        title: 'Lo-Fi Grid', 
        description: '33 tracks', 
        image: "/assets/images/playlists/lofi-grid.png",
        genre: 'Lo-Fi', 
        isFeatured: false,
        tracks: []
    },
    { 
        id: 'p_007', 
        title: 'Neon Nights', 
        description: '18 tracks', 
        image: "/assets/images/playlists/neon-nights.png",
        genre: 'Ambient', 
        isFeatured: false,
        tracks: []
    },
    { 
        id: 'p_008', 
        title: 'Hyper Drive', 
        description: '45 tracks, 2h 15m', 
        image: "/assets/images/playlists/hyper-drive.png",  
        genre: 'Synthwave', 
        isFeatured: false,
        tracks: [
            { id: 't_001', title: 'Neon Dust', artist: 'Synthmage', duration: '3:45' },
            { id: 't_002', title: 'Arcade Dream', artist: 'Pixel Priest', duration: '4:12' },
            { id: 't_003', title: 'City Lights', artist: 'Vector Vibe', duration: '3:50' },
            { id: 't_004', title: 'Hyperloop', artist: 'Grid Runner', duration: '2:59' },
            { id: 't_005', title: 'Zero Gravity', artist: 'Aetheria', duration: '5:01' },
            { id: 't_006', title: 'Digital Heartbeat', artist: 'Data Ghost', duration: '3:33' },
        ]
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

export const mockArtists = [
    { id: 'art_001', name: 'Aetheria', genre: 'Synthwave', image: "/assets/images/artists/aertheria.png", },
    { id: 'art_002', name: 'Data Ghost', genre: 'Future Pop', image:"/assets/images/artists/data-ghost.png", },
    { id: 'art_003', name: 'Grid Runner', genre: 'Chillhop', image: "/assets/images/artists/grid-runner.png", },
    { id: 'art_004', name: 'Pixel Priest', genre: 'Cyberpop', image: "/assets/images/artists/pixel-priest.png", },
    { id: 'art_004', name: 'Synthrunner', genre: 'Future Bass', image: "/assets/images/artists/synthrunner.png", },
    { id: 'art_004', name: 'Zero Bloom', genre: 'Ambient Glitch', image: "/assets/images/artists/zero-bloom.png", },
];

export const mockAlbums = [
    { id: 'alb_001', title: 'Neon Nights', subtitle: '2025', image:"/assets/images/albums/neon-night.png", genre: 'Synthwave' },
    { id: 'alb_002', title: 'Echoes', subtitle: '2024', image: "/assets/images/albums/echoes.png", genre: 'Ambient' },
    { id: 'alb_003', title: 'Digital Dawn', subtitle: '2023', image:"/assets/images/albums/digital-down.png", genre: 'Future Pop' },
    { id: 'alb_004', title: 'Warp Speed', subtitle: '2025', image: "/assets/images/albums/warp-speed.png", genre: 'Trance' },
    { id: 'alb_004', title: 'Cyber Pulse', subtitle: '2026', image: "/assets/images/albums/cyber-pulse.png", genre: 'Trance' },
]; 

export const mockTracks = [
    { id: 't_101', title: 'Hyperloop', artist: 'Grid Runner', album: 'Warp Speed' },
    { id: 't_102', title: 'Zero Gravity', artist: 'Aetheria', album: 'Neon Nights' },
    { id: 't_103', title: 'Digital Heartbeat', artist: 'Data Ghost', album: 'Digital Dawn' },
    { id: 't_104', title: 'Electric Echoes', artist: 'Future Funk', album: 'Future R&B' },
];

export const mockRecents = [
    { id: 'r_001', type: 'Playlist', title: 'Hyper Drive', subtitle: 'Today', image: "/assets/images/playlists/hyper-drive.png",  },
    { id: 'r_002', type: 'Artist', title: 'Data Ghost', subtitle: 'Yesterday', image: "/assets/images/artists/data-ghost.png" },
    { id: 'r_003', type: 'Album', title: 'Echoes', subtitle: '2 days ago', image: "/assets/images/albums/echoes.png" },
    { id: 'r_004', type: 'Track', title: 'Neon Dust', subtitle: 'Synthmage • 3 days ago' },
];
 