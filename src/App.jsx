import React, { useState, useEffect } from 'react'
import ProofOfDelivery from './components/ProofOfDelivery'

import GoodsReceivedForm from './components/GoodsReceivedForm'
import ContainerEntryPlan from './components/ContainerEntryPlan'
import ContainerInterchange from './components/ContainerInterchange'
// Reports
import StockReport from './components/StockReport'
import ClearanceReport from './components/ClearanceReport'
import TrucksReport from './components/TrucksReport'
import WarehouseProcessingReport from './components/WarehouseProcessingReport'
import WarehouseStockReport from './components/WarehouseStockReport'
import ContainerReturnReport from './components/ContainerReturnReport'



import Statics from './components/Statics'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.css'
const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  const handleThemeChange = () => {
    setIsDark(!isDark)
  }
  return (
    <main className='flex'>

  {/**  SIDEBAR */}
  <div className={`h-screen ${isDark ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-gray-900'}  p-5 transition-all z-40  duration-300 ${isOpen ? 'sm:w-[25vw] w-[100vw]' : 'sm:w-[8vw] w-[15vw]'}`}>
      <div className={`flex flex-col gap-2 ${isOpen ? 'items-start' : 'items-center'}`}>

        <div className="flex items-center mb-3">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl hover:text-teal-400 transition-all group relative">
          {isOpen?<i class="ri-close-large-line"></i>:<i class="ri-menu-line"></i>}
           {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
              Toggle Menu
            </span>} 
          </button>
          {isOpen && <div className=' pl-2 flex'>
          <h1 className="text-2xl font-bold text-nowrap  text-teal-400 leading-7">BLS</h1>
          </div>
          }
        </div>

        <NavLink 
          to="/"
          onClick={() => setIsOpen(false)}
          className={({isActive}) => 
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? (isDark ? 'bg-zinc-700 text-teal-400' : 'bg-gray-300 text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-dashboard-line"></i>
          {isOpen && "Dashboard"}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/proof-of-delivery"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? (isDark ? 'bg-zinc-700 text-teal-400' : 'bg-gray-300 text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i class="ri-secure-payment-fill"></i>
          {isOpen && <span className='text-nowrap'>Proof of Delivery</span>}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity  text-nowrap`}>Proof of Delivery</span>}
        </NavLink>

        <NavLink
          to="/goods-received-form" 
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? (isDark ? 'bg-zinc-700 text-teal-400' : 'bg-gray-300 text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-shopping-bag-line"></i>
          {isOpen && "Goods Received"}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Goods Received</span>}
        </NavLink>

        <NavLink
          to="/container-entry-plan"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? (isDark ? 'bg-zinc-700 text-teal-400' : 'bg-gray-300 text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-file-chart-line"></i>
          {isOpen && "Container Entry Plan"}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700 text-white' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Container Entry Plan</span>}
        </NavLink>

        <NavLink
          to="/container-interchange"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? (isDark ? 'bg-zinc-700 text-teal-400' : 'bg-gray-300 text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-archive-line"></i>
          {isOpen && "Container Interchange"}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700 text-white' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Container Interchange</span>}
        </NavLink>

        <div className="relative group">
  <NavLink
    to="#"
    onClick={(e) => e.preventDefault()}
    className={({ isActive }) =>
      `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group-hover:bg-teal-400/50 relative
      ${isActive ? (isDark ? ' text-gray-100' : ' text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
    }
  >
    <i className="ri-align-item-bottom-fill"></i>
    {isOpen && "Reports"}
   {!isOpen && <span className={`absolute left-full  p-4 `}></span>}
  </NavLink>

  {/* Dropdown Menu */}
  <div className={`absolute -top-10 left-15 mt-2 bg-teal-400/60 backdrop-blur-sm shadow-lg rounded-lg z-10 hidden group-hover:block w-60`}>
    <NavLink
      to="/reports/stock"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'} rounded-t-lg`}
      onClick={() => setIsOpen(false)}
    >
      Stocks
    </NavLink>
    <NavLink
      to="/reports/clearance-customs"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'}`}
      onClick={() => setIsOpen(false)}
    >
      Clearance & Customs Report
    </NavLink>
    <NavLink
      to="/reports/trucks-operational"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'} rounded-b-lg`}
      onClick={() => setIsOpen(false)}
    >
      Trucks Operational Report
    </NavLink>
    <NavLink
      to="/reports/warehouse-processing"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'}`}
      onClick={() => setIsOpen(false)}
    >
      Warehouse Processing Report
    </NavLink>
    <NavLink
      to="/reports/warehouse-stock"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'} rounded-b-lg`}
      onClick={() => setIsOpen(false)}
    >
      Warehouse Stock Report
    </NavLink>
    <NavLink
      to="/reports/container-return"
      className={`block px-4 py-2 text-sm ${isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'}`}
      onClick={() => setIsOpen(false)}
    >
      Container Return Report
    </NavLink>
   
  </div>
</div>


        <NavLink
          to="/settings"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? (isDark ? 'bg-zinc-700 text-teal-400' : 'bg-gray-300 text-gray-900') : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-settings-line"></i>
          {isOpen && "Settings"}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Settings</span>}
        </NavLink>

        <button onClick={()=>setToken("")} className={`${isOpen ? 'w-full' : ''} mt-auto p-3 bg-teal-400 hover:bg-teal-400/50 transition-all duration-300 rounded-lg flex items-center gap-3 group relative`}>
          <i className="ri-logout-box-line"></i>
          
          {isOpen && "Logout"}
          {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Logout</span>}
        </button>

      </div>
    </div>

    <div  className={` ${isOpen?'w-0 sm:w-full':'w-full'} flex h-screen ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'} overflow-y-scroll scroller p-5 `}>
    <button
      onClick={handleThemeChange}
      className="absolute top-3 right-4 z-0 p-2 px-3 bg-teal-500 dark:bg-teal-700 hover:bg-teal-600 dark:hover:bg-teal-800 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-500"
      aria-label="Toggle theme"
    >
      <i
        className={`ri-${isDark ? 'moon' : 'sun'}-line text-xl text-white transition-transform duration-300 ${isDark ? 'rotate-180' : 'rotate-0'}`}
      ></i>
    </button>
      <Routes>
        <Route path="/" element={<Statics theme={isDark} />} />
         
          <Route path="/proof-of-delivery" element={<ProofOfDelivery theme={isDark}/>} />

          <Route path="/goods-received-form" element={<GoodsReceivedForm theme={isDark}/>} />
          <Route path="/container-entry-plan" element={<ContainerEntryPlan theme={isDark}/>} />
          <Route path="/container-interchange" element={<ContainerInterchange theme={isDark}/>} />
          <Route path="/reports/stock" element={<StockReport theme={isDark} />} />
      <Route path="/reports/clearance-customs" element={<ClearanceReport theme={isDark} />} />
    <Route path="/reports/trucks-operational" element={<TrucksReport theme={isDark} />} />
    <Route path="/reports/warehouse-processing" element={<WarehouseProcessingReport theme={isDark} />} />
    <Route path="/reports/warehouse-stock" element={<WarehouseStockReport theme={isDark} />} />
    <Route path="/reports/container-return" element={<ContainerReturnReport theme={isDark} />} />
        </Routes>
     
    </div>
    </main>

  )
}

export default App