 
export const mockGenres = {
  'g_001': { id: 'g_001', name: 'Lo-Fi Beats', gradient: 'from-purple-500 to-indigo-700', icon: '🎧' },
  'g_002': { id: 'g_002', name: 'High-Tech Trance', gradient: 'from-[#00E5FF] to-teal-500', icon: '⚡' },
  'g_003': { id: 'g_003', name: 'Warp Speed Pop', gradient: 'from-pink-500 to-red-600', icon: '🚀' },
  'g_004': { id: 'g_004', name: 'Neo-Classical', gradient: 'from-gray-700 to-gray-500', icon: '🎻' },
  'g_005': { id: 'g_005', name: 'Ambient', gradient: 'from-blue-900 to-purple-800', icon: '☁️' },
  'g_006': { id: 'g_006', name: 'Drill', gradient: 'from-red-900 to-black', icon: '🔪' },
  'g_007': { id: 'g_007', name: 'Vaporwave', gradient: 'from-[#00E5FF] to-pink-500', icon: '💾' },
  'g_008': { id: 'g_008', name: 'Jazz Fusion', gradient: 'from-green-700 to-teal-500', icon: '🎷' },
  'g_009': { id: 'g_009', name: 'Hardcore', gradient: 'from-yellow-500 to-red-600', icon: '🔥' },
  'g_010': { id: 'g_010', name: 'Trap', gradient: 'from-[#6D28D9] to-black', icon: '⛓️' },
  'g_011': { id: 'g_011', name: 'Pop', gradient: 'from-pink-500 to-purple-400', icon: '✨' },
  'g_012': { id: 'g_012', name: 'Dubstep', gradient: 'from-[#22FF88] to-cyan-500', icon: '🔊' },
  'g_013': { id: 'g_013', name: 'Synthwave', gradient: 'from-blue-500 to-purple-600', icon: '🎹' },
};
 
export const mockArtists = {
  'art_001': { id: 'art_001', name: 'Aetheria', genreId: 'g_013', image: "/assets/images/artists/aetheria.png" },
  'art_002': { id: 'art_002', name: 'Data Ghost', genreId: 'g_011', image: "/assets/images/artists/data-ghost.png" },
  'art_003': { id: 'art_003', name: 'Grid Runner', genreId: 'g_001', image: "/assets/images/artists/grid-runner.png" },
  'art_004': { id: 'art_004', name: 'Pixel Priest', genreId: 'g_011', image: "/assets/images/artists/pixel-priest.png" },
  'art_005': { id: 'art_005', name: 'Synthrunner', genreId: 'g_012', image: "/assets/images/artists/synthrunner.png" },
  'art_006': { id: 'art_006', name: 'Zero Bloom', genreId: 'g_005', image: "/assets/images/artists/zero-bloom.png" },
  'art_007': { id: 'art_007', name: 'Synthmage', genreId: 'g_013', image: "/assets/images/artists/synthmage.png" },
  'art_008': { id: 'art_008', name: 'Vector Vibe', genreId: 'g_001', image: "/assets/images/artists/vector-vibe.png" },
  'art_009': { id: 'art_009', name: 'The Architect', genreId: 'g_005', image: "/assets/images/artists/architect.png" },
};

 
export const mockAlbums = {
  'alb_001': { id: 'alb_001', title: 'Neon Nights', year: '2025', image: "/assets/images/albums/neon-night.png", artistId: 'art_001' },
  'alb_002': { id: 'alb_002', title: 'Echoes', year: '2024', image: "/assets/images/albums/echoes.png", artistId: 'art_006' },
  'alb_003': { id: 'alb_003', title: 'Digital Dawn', year: '2023', image: "/assets/images/albums/digital-down.png", artistId: 'art_002' },
  'alb_004': { id: 'alb_004', title: 'Warp Speed', year: '2025', image: "/assets/images/albums/warp-speed.png", artistId: 'art_003' },
  'alb_005': { id: 'alb_005', title: 'Cyber Pulse', year: '2026', image: "/assets/images/albums/cyber-pulse.png", artistId: 'art_005' },
};
 
export const mockTracks = {
  't_001': { id: 't_001', title: 'Neon Dust', artistId: 'art_007', albumId: 'alb_002', duration: '3:45' },
  't_002': { id: 't_002', title: 'Arcade Dream', artistId: 'art_004', albumId: 'alb_001', duration: '4:12' },
  't_003': { id: 't_003', title: 'City Lights', artistId: 'art_008', albumId: 'alb_001', duration: '3:50' },
  't_004': { id: 't_004', title: 'Hyperloop', artistId: 'art_003', albumId: 'alb_004', duration: '2:59' },
  't_005': { id: 't_005', title: 'Zero Gravity', artistId: 'art_001', albumId: 'alb_001', duration: '5:01' },
  't_006': { id: 't_006', title: 'Digital Heartbeat', artistId: 'art_002', albumId: 'alb_003', duration: '3:33' },
  't_007': { id: 't_007', title: 'Electric Echoes', artistId: 'art_001', albumId: 'alb_001', duration: '4:20' },
};

 
export const mockPlaylists = {
  'p_001': { id: 'p_001', title: 'Synthwave', description: '80s Vibes', image: "/assets/images/playlists/synthwave.png", trackIds: ['t_001', 't_005'] },
  'p_002': { id: 'p_002', title: 'Cyberpop', description: 'Top 100 Hits', image: "/assets/images/playlists/cyberpop.png", trackIds: ['t_002', 't_006'] },
  'p_003': { id: 'p_003', title: 'Future Bass', description: 'Heavy Drops', image: "/assets/images/playlists/future-bass.png", trackIds: ['t_007'] },
  'p_004': { id: 'p_004', title: 'Ambient Glitch', description: 'Digital Calm', image: "/assets/images/playlists/ambient-glitch.png", trackIds: ['t_001'] },
  'p_005': { id: 'p_005', title: 'Digital Dreams', description: '50 tracks', image: "/assets/images/playlists/digital-dreams.png", trackIds: [] },
  'p_006': { id: 'p_006', title: 'Lo-Fi Grid', description: '33 tracks', image: "/assets/images/playlists/lofi-grid.png", trackIds: [] },
  'p_007': { id: 'p_007', title: 'Neon Nights', description: '18 tracks', image: "/assets/images/playlists/neon-nights.png", trackIds: [] },
  'p_008': { id: 'p_008', title: 'Hyper Drive', description: '45 tracks, 2h 15m', image: "/assets/images/playlists/hyper-drive.png", trackIds: ['t_001', 't_002', 't_003', 't_004', 't_005', 't_006'] },
  'p_009': { id: 'p_009', title: 'Starlight Drive', description: 'Personalized Mix', image: "/assets/images/playlists/starlight.png", trackIds: ['t_004'] },
};
 
export const mockHomepage = {
  hero: {
    title: 'Dive Into The Starlight Drive',
    subtitle: "Your personalized journey through tomorrow's soundscape.",
    image: "/assets/images/hero/Hero-1.png",
    ctaPrimary: 'START DISCOVERY',
    ctaSecondary: 'VIEW ALL',
  },
  featuredPlaylistIds: ['p_001', 'p_002', 'p_003', 'p_004',"p_005","p_007"],
  discoveryGenreIds: ['g_001', 'g_002', 'g_003', 'g_004']
};

 
export const mockPricingPlans = [
  { id: 'plan_001', name: 'Free Tier', price: '$0', features: ['Ad-supported listening', 'Standard audio quality', 'Mobile access'], highlighted: false },
  { id: 'plan_002', name: 'Cyber Pro', price: '$9.99', features: ['Ad-free experience', 'Lossless audio quality', 'Unlimited downloads', 'Full access to all libraries', 'Friend Activity Panel on mobile'], highlighted: true },
  { id: 'plan_003', name: 'Nexus Family', price: '$14.99', features: ['Up to 6 accounts', 'Ad-free experience', 'Parental controls', 'Family Mix playlists'], highlighted: true }
];
 
export const mockRecents = [
  { id: 'r_001', type: 'Playlist', itemId: 'p_008', timestamp: 'Today' },
  { id: 'r_002', type: 'Artist', itemId: 'art_002', timestamp: 'Yesterday' },
  { id: 'r_003', type: 'Album', itemId: 'alb_002', timestamp: '2 days ago' },
  { id: 'r_004', type: 'Track', itemId: 't_001', timestamp: '3 days ago' },
];