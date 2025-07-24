import { useState } from "react"
import {tabs} from "../utils/mockData.js"

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState("Affiliates")

    return (
        <div className="px-4 lg:px-6">
            <div className="flex space-x-4 lg:space-x-8 py-2 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer py-3  border-b-2 transition-colors whitespace-nowrap ${activeTab === tab ? "border-white text-white" : "border-none text-gray-400 hover:text-white"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TabNavigation
