import { ChevronDown, Menu } from "lucide-react"

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    
    return (
        <header className="p-5 w-full">
            <div className="w-full flex items-center justify-between ">
                <div className="w-full flex items-center lg:gap-4 gap-2">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden p-2 hover:bg-[#3e3e3e] rounded-lg transition-colors cursor-pointer"
                    >
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="lg-text-3xl text-xl text-white">Dashboard</h1>
                </div>
                <div className="relative">
                    <select className=" bg-[#3e3e3e] border border-gray-600 text-white sm:px-4 p-1.5 sm:py-2  sm:text-base text-xs  rounded-lg focus:outline-none focus:border-gray-500">
                        <option className="sm:text-base text-xs" >04.11.23 — 02.10.25</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header
