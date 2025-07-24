import { X } from "lucide-react"
import user from "../assets/user.jpg"
import { sidebarItems, bottomSidebarItems } from "../utils/mockData.js"

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`
                fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
                w-72  flex flex-col h-screen text-white 
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0 bg-[#272727] rounded-r-3xl" : "-translate-x-full lg:translate-x-0"}
            `}
        >
            
            <div className="p-6 ">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
                        </div>
                        <span className="text-3xl font-bold tracking-wide text-white">Copecart</span>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden cursor-pointer rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            <nav className="p-4 flex-1 overflow-y-auto hide-scrollbar">
                <div className="space-y-2">
                    {sidebarItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={index}
                                className={`group flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors ${item.active ? "bg-[#3e3e3e] text-white" : " hover:text-white hover:bg-[#3e3e3e]"
                                    }`}
                            >
                                <IconComponent className={`w-5 h-5 flex-shrink-0 ${item.active ? "text-white" : "text-[#3e3e3e] group-hover:text-white"
                                    }`}
                                />
                                <span className="flex-1 text-md tracking-wide">{item.label}</span>
                                {item.badge && (
                                    <span className="bg-white text-black font-bold lg:px-4 px-3 lg:py-1 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                        )
                    })}
                </div>
            </nav>

            <div className="p-4">
                <div className="space-y-2">
                    {bottomSidebarItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={index}
                                className="group flex items-center gap-3 py-2 px-3 rounded-xl cursor-pointer text-white hover:bg-[#3e3e3e] transition-colors"
                            >
                                <IconComponent className={`w-5 h-5 flex-shrink-0 ${item.active ? "text-white" : "text-[#3e3e3e] group-hover:text-white"
                                    }`}
                                />
                                <span className="text-md tracking-wide">{item.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-center gap-3 bg-black p-3 rounded-2xl">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        <img src={user} className="h-full w-full rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm text-white">James Thornton</div>
                        <div className="text-gray-400 truncate">james@gmail.com</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
