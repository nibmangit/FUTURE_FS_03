import {Routes, Route, Navigate } from 'react-router-dom'
import SideNav from "./components/Navbar/SideNav"
import BottomPlayer from "./components/Player/BottomPlayer"
import HomePage from "./pages/HomePage"
import SearchPage from './pages/SearchPage'
import PremiumPage from './pages/PremiumPage'

function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter',sans-serif] relative">

            <div className="flex relative z-10 min-h-screen">
            <SideNav />
            <main className="flex-1 overflow-y-auto pb-37.5 lg:pb-32">
            <Routes> 
                <Route path='/' element={ <HomePage />} />
                <Route path='/home' element={ <Navigate to='/'  />} />
                <Route path='/search' element={ <SearchPage />} />
                <Route path='/premium' element={ <PremiumPage />} />
           
            </Routes>
            </main>
            </div>

            <BottomPlayer />
        </div>
    )
}

export default App
