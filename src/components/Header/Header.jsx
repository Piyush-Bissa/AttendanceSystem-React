import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="bg-[#01000e] sticky top-0 z-50">
        <nav className='flex justify-between items-center h-16 px-10 text-white border-b border-white/10 shadow-[0_5px_20px_rgba(168,85,247,0.80)]'>
          
          {/* Left - Logo */}
          <div className='flex items-center gap-2'>
            <a href='#'>
              <img 
              onClick={()=>navigate('/')}
              className='size-9 rounded-lg border border-purple-600' src={Logo} alt='Logo' />
            </a>
            <h1 className='ml-1 text-base font-semibold'>Attendify</h1>
          </div>

          {/* Center - Nav links */}
          <div className='flex items-center gap-16'>
           <p 
          onClick={() => navigate('/')} 
          className="relative cursor-pointer group text-sm text-gray-300 hover:text-white transition-all"
          >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </p>
            <p 
            onClick={()=>navigate('/features')}
            className="relative cursor-pointer group text-sm text-gray-300 hover:text-white transition-all">
              Features
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Right - Contact Us button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all"
          >
            Contact Us
          </button>

        </nav>
      </header>

      {/* Modal - only shows when isOpen is true */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0d0b1f] border border-white/10 rounded-2xl p-8 w-full max-w-md mx-4">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-lg font-semibold">Contact Us</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-xl transition-all"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Piyush Bissa"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Roll Number</label>
                <input
                  type="text"
                  placeholder="e.g. 21CS042"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500 text-sm resize-none"
                />
              </div>
              <button
                onClick={() => {
                  alert('Message sent! We will get back to you soon.')
                  setIsOpen(false)
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-sm"
              >
                Send Message
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}