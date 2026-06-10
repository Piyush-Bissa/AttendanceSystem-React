import React, { useState } from 'react'

function BunkCalculator() {
    const [total,setTotal] = useState('')
    const [attended, setAttended] = useState('')
    const [remaining, setRemaining] = useState('')
    const [required,setRequired] = useState('')
    const [result, setResult] = useState('')

function calculate(){
    const t = parseInt(total)
    const a = parseInt(attended)
    const r = parseInt(remaining)
    const req = parseInt(required)

    const currPercentage = Math.round(( a / t ) * 100)
    const totalFinal = t + r
    const minNeeded = Math.ceil(( req / 100 ) * totalFinal)
    const canBunk = ( a + r ) - minNeeded

    setResult({
        currPercentage,
        canBunk,
        minNeeded
    })
}
  return (
     
  <div className="max-w-xl">
    
    <p className="text-gray-400 text-sm mb-6">
      Find out how many classes you can safely skip
    </p>

    <div className="bg-white/10 rounded-2xl p-6 border border-white/10 mb-4">
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        
        <div>
          <label className="text-gray-300 text-sm mb-2 block">Total classes held</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="e.g. 50"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Classes attended</label>
          <input
            type="number"
            value={attended}
            onChange={(e) => setAttended(e.target.value)}
            placeholder="e.g. 38"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Remaining classes</label>
          <input
            type="number"
            value={remaining}
            onChange={(e) => setRemaining(e.target.value)}
            placeholder="e.g. 20"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Required %</label>
          <input
            type="number"
            value={required}
            onChange={(e) => setRequired(e.target.value)}
            placeholder="e.g. 75"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
        </div>

      </div>

      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold"
      >
        Calculate
      </button>

    </div>

    
    {result && (
      <div className={`rounded-2xl p-6 border ${
        result.canBunk > 0
          ? 'bg-green-500/10 border-green-500/20'
          : 'bg-red-500/10 border-red-500/20'
      }`}>
        <p className="text-gray-400 text-sm mb-2">
          Current attendance: <span className="text-white font-semibold">{result.currPercentage}%</span>
        </p>
        {result.canBunk > 0 ? (
          <div>
            <p className="text-3xl font-bold text-green-400 mb-1">
              You can bunk {result.canBunk} classes
            </p>
            <p className="text-green-400 text-sm">and still stay above {required}%</p>
          </div>
        ) : (
          <div>
            <p className="text-3xl font-bold text-red-400 mb-1">
              Attend {Math.abs(result.canBunk)} more classes
            </p>
            <p className="text-red-400 text-sm">to reach {required}% attendance</p>
          </div>
        )}
      </div>
    )}

  </div>
)
}

export default BunkCalculator