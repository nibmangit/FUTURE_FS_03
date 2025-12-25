import {Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import SideNav from "./components/Navbar/SideNav"
import BottomPlayer from "./components/Player/BottomPlayer"
import HomePage from "./pages/HomePage"
import SearchPage from './pages/SearchPage'
import PremiumPage from './pages/PremiumPage'
import MainContentHeader from './components/Navbar/MainContentHeader'
import Footer from './components/Navbar/Footer' 
import LibraryPage from './pages/LibraryPage'
import UniversalDetailsPage from './pages/UniversalDetailsPage'
import { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'
import MobileMenuOverlay from './components/Navbar/MobileMenuOverlay'
import { navItems } from './data/navItems'
import { getGlassClass } from './components/globalStyle'

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const mainContentRef = useRef(null);

    const [currentTrackId, setCurrentTrackId] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);
    
    const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    }, []);

    useEffect(() => {
  const path = location.pathname;
 
  if (path === '/') document.title = "CyberBeat | The Grid";
  else if (path === '/search') document.title = "Search | CyberBeat";
  else if (path === '/library') document.title = "Your Library | CyberBeat";
  else if (path === '/premium') document.title = "Premium | CyberBeat";
 
  else if (path.includes('/playlist/')) document.title = "Playlist | CyberBeat";
  else if (path.includes('/artist/')) document.title = "Artist | CyberBeat";
  else if (path.includes('/album/')) document.title = "Album | CyberBeat";
 
  else document.title = "CyberBeat";

}, [location.pathname]);

    return (
        <div className="h-screen bg-[#050505] text-white font-['Inter',sans-serif] relative">
             <div className="fixed inset-0 bg-[#050505]">
                <div className="absolute inset-0 bg-linear-to-br from-[#050505] via-transparent to-[#6D28D9] opacity-70 -z-10"></div>
             </div>

            <MobileMenuOverlay
                isOpen={isMobileMenuOpen} 
                onClose={toggleMobileMenu}  
            />

            <div className="flex relative z-10 h-full">
            <SideNav />
            <main 
            ref={mainContentRef}
            className="flex-1 h-full overflow-y-auto pb-37.5 lg:pb-32 scroll-smooth">
                <MainContentHeader toggleMobileMenu={toggleMobileMenu} />
            <Routes> 
                <Route path='/' element={ <HomePage />} />
                <Route path='/home' element={ <Navigate to='/'  />} />
                <Route path='/search' element={ <SearchPage />} />
                <Route path='/premium' element={ <PremiumPage />} /> 
                <Route path='library' element ={<LibraryPage onTrackSelect={setCurrentTrackId} />} />
                <Route path="/playlist/:id" element={<UniversalDetailsPage onTrackSelect={setCurrentTrackId} />} />
                <Route path="/album/:id" element={<UniversalDetailsPage onTrackSelect={setCurrentTrackId} />} />
                <Route path="/artist/:id" element={<UniversalDetailsPage onTrackSelect={setCurrentTrackId} />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
            </main>
            </div>

            <nav className={`fixed bottom-16 left-0 right-0 z-50 p-2 lg:hidden ${getGlassClass()} rounded-t-3xl`}>
                <div className="flex justify-around items-center">
                {navItems.filter(i => !i.desktopOnly).map(item => {
                    const path = `/${item.id}`
                    const isActive = location.pathname === path || (location.pathname === '/' && item.id === 'home');
                    return (
                    <button 
                        key={item.id} 
                        onClick={() => navigate(`/${item.id}`)}
                        className={`p-2 transition-all duration-200 cursor-pointer ${isActive ? 'text-[#22FF88]' : 'text-white/70 hover:text-white'}`}
                    >
                        <item.icon size={24} />
                        <span className="text-xs block">{item.label}</span>
                    </button>
                    );
                })}
                </div>
            </nav>

        <BottomPlayer currentTrackId={currentTrackId} />

          <style>{`
        /* Custom scrollbar for horizontal lists */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    )
}

export default App
