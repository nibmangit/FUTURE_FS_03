import SideNav from "./components/Navbar/SideNav"
import BottomPlayer from "./components/Player/BottomPlayer"
import HomePage from "./pages/HomePage"

function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter',sans-serif] relative">

            <div className="flex relative z-10 min-h-screen">
            <SideNav />
            <main className="flex-1 overflow-y-auto pb-37.5 lg:pb-32">
            <HomePage />
            </main>
            </div>

            <BottomPlayer />
        </div>
    )
}

export default App
