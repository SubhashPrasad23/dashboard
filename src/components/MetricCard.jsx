const MetricCard = ({ title, value, subtitle, percentage }) => {

    return (
        <div className=" border border-[#3e3e3e] rounded-2xl p-5">
            <div className=" text-base text-gray-400  mb-2">{title}</div>
            
            <div className="w-full flex  md:flex-col lg:flex-row lg:items-center flex-row gap-3">
                <div className="flex items-center">
                    <span className=" text-xl font-semibold text-white">{value}</span>
                    {subtitle && <span className=" ml-2 text-[#6f6f6f] font-medium md:text-lg">{subtitle}</span>}
                </div>
                <div>
                    {percentage && (
                        <span className={`px-3.5 py-0.5  font-medium rounded-4xl border-2 border-[#6f6f6f] bg-gradient-to-r from-black to-gray-500  shadow-inner shadow-[#6f6f6f]`}>{percentage}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MetricCard
