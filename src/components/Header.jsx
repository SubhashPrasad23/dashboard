import { ChevronDown, Menu } from "lucide-react"

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    
    return (
        <header className="p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden p-2 hover:bg-[#3e3e3e] rounded-lg transition-colors cursor-pointer"
                    >
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-3xl text-white">Dashboard</h1>
                </div>
                <div className="relative">
                    <select className="appearance-none bg-[#3e3e3e] border border-gray-600 text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:border-gray-500">
                        <option>04.11.23 — 02.10.25</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
            </div>
        </header>
    )
}

export default Header
