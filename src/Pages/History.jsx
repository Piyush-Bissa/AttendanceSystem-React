import React from 'react'
import { useState } from 'react'

function History() {
    const attendanceData = {
    '2026-06-01': 'present',
    '2026-06-02': 'present',
    '2026-06-03': 'absent',
    '2026-06-04': 'present',
    '2026-06-05': 'present',
    '2026-06-06': 'holiday',
    '2026-06-07': 'holiday',
    '2026-06-08': 'present',
    '2026-06-09': 'present',
    '2026-06-10': 'absent',
    '2026-06-11': 'present',
    '2026-06-12': 'present',
    '2026-06-13': 'holiday',
    '2026-06-14': 'holiday',
    '2026-06-15': 'present',
    '2026-06-16': 'absent',
    '2026-06-17': 'present',
    '2026-06-18': 'present',
    '2026-06-19': 'present',
    '2026-06-20': 'holiday',
    '2026-06-21': 'holiday',
    '2026-06-22': 'present',
    '2026-06-23': 'present',
    '2026-06-24': 'absent',
    '2026-06-25': 'present',
    '2026-06-26': 'present',
    '2026-06-27': 'holiday',
    '2026-06-28': 'holiday',
    '2026-06-29': 'absent',
    '2026-06-30': 'present',
    }

    const [currentMonth,setCurrentMonth] = useState(new Date(2026,5,1))
    return (
  <div className="space-y-6">

    <p className="text-gray-400 text-sm">Your monthly attendance history</p>

    {/* Stats strip */}
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">Present</p>
        <p className="text-2xl font-bold text-green-400">
          {Object.values(attendanceData).filter(v => v === 'present').length}
        </p>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">Absent</p>
        <p className="text-2xl font-bold text-red-400">
          {Object.values(attendanceData).filter(v => v === 'absent').length}
        </p>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">Holidays</p>
        <p className="text-2xl font-bold text-gray-400">
          {Object.values(attendanceData).filter(v => v === 'holiday').length}
        </p>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">This Month %</p>
        <p className="text-2xl font-bold text-purple-400">
          {Math.round(
            Object.values(attendanceData).filter(v => v === 'present').length /
            Object.values(attendanceData).filter(v => v !== 'holiday').length * 100
          )}%
        </p>
      </div>
    </div>
          {/* Month selector */}
<div className="bg-white/10 rounded-2xl p-5 border border-white/10">
  
  <div className="flex items-center justify-between mb-6">
    <button
      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
      className="text-gray-400 hover:text-white text-xl px-3 py-1 rounded-lg hover:bg-white/10 transition-all"
    >
      ←
    </button>
    
    <p className="text-white font-semibold">
      {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
    </p>
    
    <button
      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
      className="text-gray-400 hover:text-white text-xl px-3 py-1 rounded-lg hover:bg-white/10 transition-all"
    >
      →
    </button>
  </div>

  {/* Day labels */}
  <div className="grid grid-cols-7 mb-2">
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
      <div key={day} className="text-center text-gray-400 text-xs py-2">{day}</div>
    ))}
  </div>

</div>
{/* Calendar days */}
<div className="grid grid-cols-7 gap-2">
  
  {/* Empty boxes before first day of month */}
  {Array.from({ length: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() }).map((_, i) => (
    <div key={i} />
  ))}

  {/* Actual days */}
  {Array.from({ length: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate() }).map((_, i) => {
    const day = i + 1
    const dateKey = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const status = attendanceData[dateKey]

    return (
      <div
        key={day}
        className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all
          ${status === 'present' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            status === 'absent' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
            status === 'holiday' ? 'bg-gray-500/20 text-gray-500' :
            'text-gray-600'
          }`}
      >
        {day}
      </div>
    )
  })}

</div>

{/* Legend */}
<div className="flex items-center gap-6 mt-4 justify-center">
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-green-500/50" />
    <span className="text-gray-400 text-xs">Present</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-red-500/50" />
    <span className="text-gray-400 text-xs">Absent</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-gray-500/50" />
    <span className="text-gray-400 text-xs">Holiday</span>
  </div>
</div>
        
<div className="grid grid-cols-2 gap-4">
  
  <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
    <p className="text-gray-400 text-xs mb-1">Current Streak</p>
    <div className="flex items-center gap-2 mt-2">
      <span className="text-3xl">🔥</span>
      <div>
        <p className="text-2xl font-bold text-orange-400">
          {(() => {
            let streak = 0
            const today = new Date(2026, 5, 9)
            for (let i = 0; i < 30; i++) {
              const d = new Date(today)
              d.setDate(today.getDate() - i)
              const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
              if (attendanceData[key] === 'present') {
                streak++
              } else if (attendanceData[key] === 'absent') {
                break
              }
            }
            return streak
          })()} days
        </p>
        <p className="text-gray-400 text-xs">in a row</p>
      </div>
    </div>
  </div>

  <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
    <p className="text-gray-400 text-xs mb-1">This Month</p>
    <div className="flex items-center gap-2 mt-2">
      <span className="text-3xl">📅</span>
      <div>
        <p className="text-2xl font-bold text-purple-400">
          {Object.values(attendanceData).filter(v => v === 'present').length} / {Object.values(attendanceData).filter(v => v !== 'holiday').length}
        </p>
        <p className="text-gray-400 text-xs">classes attended</p>
      </div>
    </div>
  </div>

</div>
</div>
)
}

export default History