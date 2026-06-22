import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import students from '../Data/students'

function StudentLogin() {
    const [rollNumber,setRollNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {login} = useAuth()

    const handleLogin = ()=>{
      const found = students.find(
        (s)=>s.rollNo === rollNumber && s.password === password
      )
      if (found) {
        login(found)
        navigate('/student/dashboard')
      } else {
        alert('Invalid Roll Number or Password')
      }
    }
    function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
    return <Navigate to='/student/login' />
    }

    return children
    }



  return (
    <>
     <div className="min-h-screen bg-[#01000e] flex items-center justify-center">
      
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md">
        
        <h2 className="text-white text-2xl font-bold text-center mb-2">
          Student Login
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          Enter your college credentials
        </p>

        <div className="mb-4">
          <label className="text-gray-300 text-sm mb-2 block">Roll Number</label>
          <input
            type="text"
            placeholder="e.g. PIET21CS178"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="text-gray-300 text-sm mb-2 block">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>
        <p className="text-gray-600 text-xs text-center mt-3">
           Demo Credentials : PIET24CS123 · PIET24CS150 (password: 1234)
        </p>
        <p className="text-gray-400 text-center text-sm mt-4">
          Not a student? <span className="text-purple-400 cursor-pointer">Faculty Login</span>
        </p>

      </div>
    </div>
  
    </>
  )
}
export default StudentLogin