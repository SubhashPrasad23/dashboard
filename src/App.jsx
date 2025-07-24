import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className=" flex w-full  min-h-screen bg-[#272727]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Dashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  )
}

export default App