import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import {MdDashboard,MdOutlineCalendarMonth,MdCalculate,MdHistory,MdLogout} from 'react-icons/md'
import Logo from "../../assets/Logo.png"
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'


function StudentLayout({children}) {
    const navigate = useNavigate()
    function handleLogout() {
    logoutUser()
    navigate('/')
    }
    const location = useLocation()

function isActive(path){
    return location.pathname === path
    }

    const {student,logout:logoutUser} = useAuth()

    const [sidebarOpen,setSidebarOpen] = useState(false)
  return (
    <div className='flex h-screen overflow-hidden bg-[#01000e] text-white'>
        
        <div className={`
         fixed inset-y-0 left-0 z-50 w-52 bg-[#0d0b1f] flex flex-col p-4 border-r border-white/10 flex-shrink-0
         transition-transform duration-300
         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
         md:relative md:translate-x-0
        `}>
            <div className='flex items-center gap-2 mb-8'>
                <div className='w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-xs font-bold'>
                  <a href=''>
                  <img 
                  onClick={()=>navigate('/')}
                  src={Logo} alt='Main Logo'/>
                  </a>
                </div> 
                    <span className='font-semibold text-lg'>Attendify</span>
            </div>
            <nav className='flex flex-col gap-1'>
                <button onClick={()=>navigate('/student/dashboard')} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-all
                  ${isActive('/student/dashboard')
                   ? 'bg-purple-600 text-white'
                   : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}>
                    <MdDashboard size={18}/>
                    Dashboard
                </button>
                 <button onClick={() => navigate('/student/attendance')} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-all
                  ${isActive('/student/attendance')
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}>
                    <MdOutlineCalendarMonth size={18}/>
            My Attendance
          </button>
          <button onClick={() => navigate('/student/bunk-calculator')} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-all
            ${isActive('/student/bunk-calculator')
            ? 'bg-purple-600 text-white'
            : 'text-gray-400 hover:bg-white/10 hover:text-white'
             }`}>
              <MdCalculate size={18}/>
            Bunk Calculator
          </button>
          <button onClick={() => navigate('/student/history')}  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-all
          ${isActive('/student/history')
          ? 'bg-purple-600 text-white'
          : 'text-gray-400 hover:bg-white/10 hover:text-white'
        }`}>
      <MdHistory size={18} />
      History
          </button>
            </nav>
            <div className="mt-auto">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 text-left">
           <MdLogout size={18} />
            Logout
          </button>
        </div>
        </div>

      {/* Main area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Topbar */}
        <div className="h-14 flex-shrink-0 border-b border-white/10 flex items-center justify-between px-6 bg-[#0d0b1f]">
  
        <div className="flex items-center gap-3">
         {/* Hamburger - only shows on mobile */}
       <button
       onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden text-gray-400 hover:text-white"
        >
        {sidebarOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
     </button>
      <span className="text-sm text-gray-400">Welcome back, {student?.name}</span>
   </div>

  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">
    {student?.initials}
  </div>

</div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-6">
          { children }
        </div>

      </div>
    </div>
  )
}

export default StudentLayout