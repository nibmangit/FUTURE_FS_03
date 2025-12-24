import { mockAlbums, mockArtists, mockGenres, mockPlaylists, mockRecents, mockTracks } from "./mockdata";

export const getLibraryContent = () => {
  return {
    Playlists: Object.values(mockPlaylists).map(p => ({
      ...p, 
      type: 'Playlist', 
      subtitle: p.description 
    })),

    Artists: Object.values(mockArtists).map(a => ({
      ...a, 
      title: a.name, 
      type: 'Artist', 
      subtitle: mockGenres[a.genreId]?.name || 'Artist' 
    })),

    Albums: Object.values(mockAlbums).map(a => ({
      ...a, 
      type: 'Album', 
      subtitle: mockArtists[a.artistId]?.name || a.year 
    })),

    Tracks: Object.values(mockTracks).map(t => ({
      ...t,
      type: 'Track',
      image: mockAlbums[t.albumId]?.image,
      subtitle: `${mockArtists[t.artistId]?.name || 'Unknown'} • ${mockAlbums[t.albumId]?.title || 'Single'}`
    })),

    Genres: Object.values(mockGenres).map(g => ({
      id: g.id, 
      title: g.name, 
      type: 'Genre', 
      gradient: g.gradient, 
      icon: g.icon 
    })),

    Recents: mockRecents.map(r => {
      let itemData = {};
      if (r.type === 'Playlist') itemData = mockPlaylists[r.itemId];
      if (r.type === 'Artist') itemData = mockArtists[r.itemId];
      if (r.type === 'Album') itemData = mockAlbums[r.itemId];
      if (r.type === 'Track') {
        const track = mockTracks[r.itemId];
        itemData = { ...track, title: track.title, image: mockAlbums[track.albumId]?.image };
      }
      return { 
        ...itemData, 
        title: itemData?.title || itemData?.name,
        type: r.type, 
        subtitle: r.timestamp 
      };
    }),
  };
};