import React, { useState } from 'react'
import ProofOfDelivery from './components/ProofOfDelivery'
import TransporterForm from './components/TransporterForm'
import GoodsReceivedForm from './components/GoodsReceivedForm'
import ContainerEntryPlan from './components/ContainerEntryPlan'
import ContainerInterchange from './components/ContainerInterchange'
import Dashboard from './components/Dashboard'
import Statics from './components/Statics'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.css'
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <main className='flex'>

  {/**  SIDEBAR */}
  <div className={`h-screen bg-zinc-800 text-white p-5 transition-all z-40  duration-300 ${isOpen ? 'sm:w-[25vw] w-[100vw]' : 'sm:w-[8vw] w-[15vw]'}`}>
      <div className={`flex flex-col gap-2 ${isOpen ? 'items-start' : 'items-center'}`}>

        <div className="flex items-center mb-3">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl hover:text-teal-400 transition-all group relative">
          {isOpen?<i class="ri-close-large-line"></i>:<i class="ri-menu-line"></i>}
           {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-dashboard-line"></i>
          {isOpen && "Dashboard"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dashboard</span>}
        </NavLink>

        <NavLink
          to="/proof-of-delivery"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i class="ri-secure-payment-fill"></i>
          {isOpen && <span className='text-nowrap'>Proof of Delivery</span>}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity  text-nowrap">Proof of Delivery</span>}
        </NavLink>

        <NavLink
          to="/goods-received-form" 
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-shopping-bag-line"></i>
          {isOpen && "Goods Received"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Goods Received</span>}
        </NavLink>

        <NavLink
          to="/container-entry-plan"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-file-chart-line"></i>
          {isOpen && "Container Entry Plan"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Container Entry Plan</span>}
        </NavLink>

        <NavLink
          to="/container-interchange"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-archive-line"></i>
          {isOpen && "Container Interchange"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Container Interchange</span>}
        </NavLink>

        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-user-line"></i>
          {isOpen && "Users"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Users</span>}
        </NavLink>

        <NavLink
          to="/settings"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            `p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group relative
            ${isActive ? 'bg-zinc-700 text-teal-400' : ''} ${isOpen ? 'w-full' : ''}`
          }
        >
          <i className="ri-settings-line"></i>
          {isOpen && "Settings"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Settings</span>}
        </NavLink>

        <button onClick={()=>setToken("")} className={`${isOpen ? 'w-full' : ''} mt-auto p-3 bg-teal-400 hover:bg-teal-400/50 transition-all duration-300 rounded-lg flex items-center gap-3 group relative`}>
          <i className="ri-logout-box-line"></i>
          
          {isOpen && "Logout"}
          {!isOpen && <span className="absolute left-full ml-2 p-2 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Logout</span>}
        </button>
        
      </div>
    </div>

    <div  className={` ${isOpen?'w-0 sm:w-full':'w-full'} flex h-screen bg-zinc-700 overflow-y-scroll scroller p-5 `}>
      
        <Routes>
          <Route path="/" element={<Statics />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proof-of-delivery" element={<ProofOfDelivery />} />
          <Route path="/transporter-form" element={<TransporterForm />} />
          <Route path="/goods-received-form" element={<GoodsReceivedForm />} />
          <Route path="/container-entry-plan" element={<ContainerEntryPlan />} />
          <Route path="/container-interchange" element={<ContainerInterchange />} />
        </Routes>
     
    </div>
    </main>

  )
}

export default App