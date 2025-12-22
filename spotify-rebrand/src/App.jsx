import SideNav from "./components/Navbar/SideNav"
import BottomPlayer from "./components/Player/BottomPlayer"

function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter',sans-serif] relative">
            <SideNav />

            <BottomPlayer />
        </div>
    )
}

export default App
