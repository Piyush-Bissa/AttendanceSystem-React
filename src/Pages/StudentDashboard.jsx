import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function StudentDashboard() {
  const navigate = useNavigate()
  const { student } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
        <p className="text-gray-400 text-sm">Loading your dashboard...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">

      
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-white">Good Morning, {student?.name} 👋</h2>
        <p className="text-gray-400 text-sm">{new Date().toDateString()} &nbsp;|&nbsp; {student?.branch} Sem {student?.semester} &nbsp;|&nbsp; Roll No: {student?.rollNo}</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs mb-1">Overall %</p>
          <p className={`text-3xl font-bold ${student?.overall >= 75 ? 'text-green-400' : student?.overall >= 65 ? 'text-yellow-400' : 'text-red-400'}`}>{student?.overall}%</p>
          <p className={`text-xs mt-1 ${student?.overall >= 75 ? 'text-green-400' : 'text-red-400'}`}>{student?.overall >= 75 ? 'Safe zone' : 'Danger zone'}</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs mb-1">Present</p>
          <p className="text-3xl font-bold text-white">{student?.present}</p>
          <p className="text-gray-400 text-xs mt-1">out of {student?.total}</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs mb-1">Absent</p>
          <p className="text-3xl font-bold text-red-400">{student?.total - student?.present}</p>
          <p className="text-gray-400 text-xs mt-1">classes missed</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
          <p className="text-gray-400 text-xs mb-1">Can Bunk</p>
          <p className={`text-3xl font-bold ${student?.canBunk > 0 ? 'text-yellow-400' : 'text-red-400'}`}>{student?.canBunk}</p>
          <p className="text-gray-400 text-xs mt-1">more safely</p>
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
          <p className="text-white font-semibold mb-4">Subjects Needing Attention</p>
          {student?.subjects.filter(s => s.percentage < 75).length === 0 ? (
            <p className="text-green-400 text-sm">All subjects are safe ✓</p>
          ) : (
            student?.subjects.filter(s => s.percentage < 75).map((subject) => (
              <div key={subject.name} className="mb-3 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <div className="flex justify-between items-center">
                  <p className="text-white text-sm">{subject.name}</p>
                  <span className="text-red-400 text-sm font-semibold">{subject.percentage}%</span>
                </div>
                <p className="text-red-400 text-xs mt-1">
                  Need {Math.ceil((75 * subject.total / 100) - subject.attended)} more classes to recover
                </p>
              </div>
            ))
          )}
        </div>

        {/* Right - Profile card */}
        <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
          <p className="text-white font-semibold mb-4">My Profile</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
              {student?.initials}
            </div>
            <div>
              <p className="text-white font-semibold">{student?.name}</p>
              <p className="text-gray-400 text-sm">{student?.branch}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400 text-sm">Roll Number</span>
              <span className="text-white text-sm">{student?.rollNo}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400 text-sm">Semester</span>
              <span className="text-white text-sm">{student?.semester}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Status</span>
              <span className={`text-sm font-semibold ${student?.overall >= 75 ? 'text-green-400' : 'text-red-400'}`}>
                {student?.overall >= 75 ? 'Active ✓' : 'At Risk ⚠️'}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Section 4 - Motivational message */}
      <div className={`rounded-2xl p-4 border ${student?.overall >= 75 ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
        <p className={`text-sm font-semibold ${student?.overall >= 75 ? 'text-green-400' : 'text-red-400'}`}>
          {student?.overall >= 85 ? '🔥 Excellent attendance! You are crushing it!' :
           student?.overall >= 75 ? '✅ Good attendance. Stay consistent!' :
           student?.overall >= 65 ? '⚠️ Attendance is slipping. Time to focus!' :
           '🚨 Critical attendance! Attend all classes immediately!'}
        </p>
      </div>

    </div>
  )
}

export default StudentDashboard