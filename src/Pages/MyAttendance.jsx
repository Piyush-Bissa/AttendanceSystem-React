import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function MyAttendance() {
    const {student} = useAuth()
  return (
    <div>
        <p className='text-gray-400 text-sm mb-6'>Subject-wise attendance breakdown</p>
            <div className='bg-white/10 rounded-2xl border border-white/10 overflow-hidden mb-6'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <th className="text-left px-6 py-4 text-gray-400 text-sm font-medium">Subject</th>
                            <th className="text-center px-6 py-4 text-gray-400 text-sm font-medium">Total</th>
                            <th className="text-center px-6 py-4 text-gray-400 text-sm font-medium">Attended</th>
                            <th className="text-center px-6 py-4 text-gray-400 text-sm font-medium">Percentage</th>
                            <th className="text-center px-6 py-4 text-gray-400 text-sm font-medium">Status</th>
                        </tr>
                    </thead>
                <tbody>
                    {student?.subjects.map((subject) => (
                    <tr key={subject.name} className="border-b border-white/10 hover:bg-white/5 transition-all">
              
                    <td className="px-6 py-4 text-white text-sm">{subject.name}</td>
              
                    <td className="px-6 py-4 text-center text-gray-400 text-sm">{subject.total}</td>
              
                    <td className="px-6 py-4 text-center text-gray-400 text-sm">{subject.attended}</td>
              
                    <td className={`px-6 py-4 text-center text-sm font-semibold ${
                    subject.percentage >= 75 ? 'text-green-400' :
                    subject.percentage >= 65 ? 'text-yellow-400' :
                    'text-red-400'
                    }`}>
                    {subject.percentage}%
                    </td>

                    <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                     subject.percentage >= 75 ? 'bg-green-500/20 text-green-400' :
                    subject.percentage >= 65 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                    }`}>
                    {
                    subject.percentage >= 75 ? 'BACHHH JAYEGA' :
                    subject.percentage >= 65 ? 'KOSHISH KR (S18)' :
                    'KHATAM TATA BYE BYE GAYA'
                    }
                </span>
              </td>
            </tr>
          ))}
        </tbody>
                </table>
            </div>
             <div className="grid grid-cols-3 gap-4">
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">Total Classes</p>
        <p className="text-2xl font-bold text-white">{student?.total}</p>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">Total Present</p>
        <p className="text-2xl font-bold text-green-400">{student?.present}</p>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
        <p className="text-gray-400 text-xs mb-1">Total Absent</p>
        <p className="text-2xl font-bold text-red-400">{student?.total - student?.present}</p>
      </div>
    </div>
    </div>
  )
}

export default MyAttendance