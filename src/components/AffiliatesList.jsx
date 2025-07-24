import { ArrowDown } from "lucide-react"
import { affiliates } from "../utils/mockData.js"

const AffiliatesList = () => {
 

    return (
        <div className=" border border-[#3e3e3e] rounded-2xl">
            <div className="p-5  ">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl tracking-wide text-white">Affiliates</h3>
                    <div className="flex items-center gap-1   text-[#6f6f6f]">
                        <ArrowDown className="w-5 h-5" />
                        <span>Income</span>
                    </div>
                </div>
            </div>
            <div className="px-5  pb-5">
                <div className="space-y-4">
                    {affiliates.map((affiliate, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                                <img src={affiliate.img} className="h-full w-full rounded-full"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className=" text-white">{affiliate.name}</div>
                                <div className="text-gray-400">{affiliate.handle}</div>
                            </div>
                            <div className="  text-white">{affiliate.income}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AffiliatesList
