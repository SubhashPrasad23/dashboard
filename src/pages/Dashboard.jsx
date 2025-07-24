import Header from "../components/Header"
import TabNavigation from "../components/TabNavigation"
import MetricCard from "../components/MetricCard"
import RevenueChart from "../components/RevenueChart"
import AffiliatesList from "../components/AffiliatesList"

const Dashboard = ({ isSidebarOpen, setIsSidebarOpen }) => {

    return (
        <div className="flex-1 flex flex-col h-screen text-white bg-black lg:rounded-l-3xl">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <TabNavigation />
            <div className="flex-1 p-6 space-y-6 overflow-auto hide-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MetricCard title="Your Affiliates revenue" value="€297,51" percentage="5%" />
                    <MetricCard title="Number of products sold by Affiliates" value="2,440" percentage="20%" />
                    <MetricCard title="Refunds & Returns" value="200" subtitle="for €250,00" percentage="18%" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <RevenueChart />
                    </div>
                    <AffiliatesList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard