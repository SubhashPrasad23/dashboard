import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const RevenueChart = () => {
    const data = [
        { month: "Jan", series1: 0.21, series2: 0.57, date: "Jan 24" },
        { month: "Feb", series1: 0.32, series2: 0.40, date: "Feb 24" },
        { month: "Mar", series1: 0.48, series2: 0.30, date: "Mar 24" },
        { month: "Apr", series1: 0.44, series2: 0.55, date: "Apr 24" },
        { month: "May", series1: 0.25, series2: 0.43, date: "May 24" },
        { month: "Jun", series1: 0.45, series2: 0.58, date: "Jun 24" }, 
        { month: "Jul", series1: 0.60, series2: 0.68, date: "Jul 24" },
        { month: "Aug", series1: 0.54, series2: 0.78, date: "Aug 24" },
        { month: "Sep", series1: 0.50, series2: 0.61, date: "Sep 24" },
        { month: "Oct", series1: 0.24, series2: 0.48, date: "Oct 24" },
        { month: "Nov", series1: 0.12, series2: 0.45, date: "Nov 24" },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="border border-gray-400 bg-gradient-to-tr from-black to-gray-400 shadow-inner shadow-gray-400 rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2 text-sm text-white">
                        <div className="w-3 h-3 bg-gray-300 rounded-full" />
                        <span>{data.date} €{payload[0].value.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1 text-sm text-white">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{
                                background:
                                    "repeating-linear-gradient(45deg, #6b7280, #6b7280 1px, #4b5563 1px, #4b5563 2px)",
                            }}
                        />
                        <span>{data.date} €{payload[1].value.toFixed(2)}</span>
                    </div>
                </div>
            );
        }
        return null;
    };

    const StripedBar = (props) => {
        const { fill, ...rest } = props;
        return (
            <g>
                <defs>
                    <pattern
                        id="stripes"
                        patternUnits="userSpaceOnUse"
                        width="4"
                        height="4"
                        patternTransform="rotate(45)"
                    >
                        <rect width="2" height="4" fill="#6b7280" />
                        <rect x="2" width="2" height="4" fill="#4b5563" />
                    </pattern>
                </defs>
                <rect {...rest} fill="url(#stripes)" />
            </g>
        );
    };

    return (
        <div className="border border-[#3e3e3e] rounded-2xl p-6 text-white font-sans  mx-auto">
            <h2 className="mb-8 text-lg font-medium">Revenue performance</h2>
            <div className=" mb-8 w-full overflow-x-auto hide-scrollbar">
                <div className="min-w-[600px] h-80 ">

                
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        // barCategoryGap="20%"
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#374151"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={false} height={0} />
                        <YAxis
                            domain={[0, 1]}
                            ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            tickFormatter={(value) => `${value.toFixed(2)}€`}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                        <Bar dataKey="series1" fill="#D2D5D9" radius={[2, 2, 0, 0]} maxBarSize={20} />
                        <Bar dataKey="series2" shape={<StripedBar />} radius={[2, 2, 0, 0]} maxBarSize={20} />
                    </BarChart>
                </ResponsiveContainer>
                </div>            </div>


            <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-6 text-sm text-gray-300">
                <div className="w-full md:w-1/2 bg-[#1c1c1c] text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-md">
                    <div className="flex  gap-3">
                        <div className="w-5 h-2 mt-2 bg-gradient-to-r from-white to-gray-600" />
                        <div className="leading-tight">
                            <p className="text-gray-400 md:text-base text-lg">Net income in</p>
                            <p className="font-medium">Oct 2025 – Nov 2025</p>
                        </div>
                    </div>
                    <div className="text-lg flex items-center gap-1">
                        <span className="text-gray-300">€</span>
                        <span>297,51</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-[#1c1c1c] text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-md">
                    <div className="flex  gap-3">
                        <div className="w-5 h-2 mt-2 bg-gray-500" />
                        <div className="leading-tight">
                            <p className="text-gray-400 md:text-base text-lg">Net income in</p>
                            <p className="font-medium">Aug 2025 – Sep 2025</p>
                        </div>
                    </div>
                    <div className="text-lg flex items-center gap-1">
                        <span className="text-gray-300">€</span>
                        <span>184,00</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RevenueChart;
