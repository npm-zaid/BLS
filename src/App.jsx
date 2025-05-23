import React, { useState, useEffect, useRef } from 'react'
import ProofOfDelivery from './components/ProofOfDelivery'

import GoodsReceivedForm from './components/GoodsReceivedForm'
import ReportsComponent from './components/ReportsComponent'
import ContainerInterchange from './components/ContainerInterchange'
// Reports
import StockReport from './components/StockReport'
import ClearanceReport from './components/ClearanceReport'
import TrucksReport from './components/TrucksReport'
import WarehouseProcessingReport from './components/WarehouseProcessingReport'
import WarehouseStockReport from './components/WarehouseStockReport'
import ContainerReturnReport from './components/ContainerReturnReport'

//COntainer reports
import EntryPlanReport from './components/EntryPlanReport'
import DeliveryPlanReport from './components/DeliveryPlanReport'
import CommoditiesPlanReport from './components/CommoditiesPlanReport'



import Statics from './components/Statics'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.css'
const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  const handleThemeChange = () => {
    setIsDark(!isDark)
  }
  return (
    <main className='flex bg-zinc-700'>

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


{/* Reports Dropdown */}
<div className="relative group">
  <NavLink
    to="#"
    onClick={(e) => {
      e.preventDefault();
      // Keep sidebar open when toggling dropdown
      setIsDropdownOpen((prev) => !prev); // Toggle dropdown
    }}
    className={`p-3 rounded-lg transition-all duration-300 flex items-center gap-3 hover:bg-teal-400/50 ${
      isOpen ? 'w-full' : ''
    } ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
  >
    <i className="ri-align-item-bottom-fill"></i>
    {isOpen && 'Reports'}
    {!isOpen && <span className={`absolute left-full ml-2 p-2 ${isDark ? 'bg-zinc-700 text-white' : 'bg-teal-400 '} text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>Reports</span>}
  </NavLink>

  {/* Dropdown Menu */}
  <div
    className={`absolute -top-14 left-14 mt-1 bg-teal-400/60 backdrop-blur-sm shadow-lg rounded-lg z-20 w-60 ${
      isDropdownOpen ? 'block' : 'hidden'
    }`}
  >
    <NavLink
      to="/reports/stock"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      } rounded-t-lg`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Stocks
    </NavLink>
    <NavLink
      to="/reports/clearance-customs"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Clearance & Customs Report
    </NavLink>
    <NavLink
      to="/reports/trucks-operational"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Trucks Operational Report
    </NavLink>
    <NavLink
      to="/reports/warehouse-processing"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Warehouse Processing Report
    </NavLink>
    <NavLink
      to="/reports/warehouse-stock"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Warehouse Stock Report
    </NavLink>
    <NavLink
      to="/reports/container-return"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Container Return Report
    </NavLink>
    <NavLink
      to="/reports/entry-plan"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Container Entry Plan Report
    </NavLink>
    <NavLink
      to="/reports/delivery-plan"
      className={`block px-4 py-2 border-b border-zinc-700 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Container Delivery Plan Report
    </NavLink>
    <NavLink
      to="/reports/commodities-plan"
      className={`block px-4 py-2 text-sm ${
        isDark ? 'hover:bg-zinc-800/40' : 'hover:bg-gray-100'
      }`}
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      Commodities Plan Report
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

    <div  className={` ${isOpen?'w-0 sm:w-full':'w-full'} flex h-screen ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'} overflow-y-scroll scroller ${isOpen?'p-0':'p-5'}`}>
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
          <Route path="/container-entry-plan" element={<ReportsComponent theme={isDark}/>} />
          <Route path="/container-interchange" element={<ContainerInterchange theme={isDark}/>} />
          <Route path="/reports/stock" element={<StockReport theme={isDark} />} />
      <Route path="/reports/clearance-customs" element={<ClearanceReport theme={isDark} />} />
    <Route path="/reports/trucks-operational" element={<TrucksReport theme={isDark} />} />
    <Route path="/reports/warehouse-processing" element={<WarehouseProcessingReport theme={isDark} />} />
    <Route path="/reports/warehouse-stock" element={<WarehouseStockReport theme={isDark} />} />
    <Route path="/reports/container-return" element={<ContainerReturnReport theme={isDark} />} />
    <Route path="/reports/entry-plan" element={<EntryPlanReport theme={isDark} />} />
    <Route path="/reports/delivery-plan" element={<DeliveryPlanReport theme={isDark} />} />
    <Route path="/reports/commodities-plan" element={<CommoditiesPlanReport theme={isDark} />} />
        </Routes>
     
    </div>
    </main>

  )
}

export default App