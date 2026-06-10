import { useNavigate } from 'react-router-dom'

function Features() {
  const navigate = useNavigate()

  const features = [
    {
      icon: '📊',
      title: 'Live attendance tracking',
      desc: 'See subject wise attendance in real time. Always know exactly where you stand before it is too late.',
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      icon: '🧮',
      title: 'Bunk calculator',
      desc: 'Enter your numbers and instantly find out how many classes you can safely skip without dropping below 75%.',
      color: 'bg-pink-500/10 text-pink-400'
    },
    {
      icon: '⚠️',
      title: 'Smart alerts',
      desc: 'Get instant warnings when any subject drops below the safe limit. Never get a surprise shortage again.',
      color: 'bg-yellow-500/10 text-yellow-400'
    },
    {
      icon: '📅',
      title: 'Attendance history',
      desc: 'View a full calendar of your past attendance. Track streaks, identify patterns, and plan ahead.',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: '👥',
      title: 'Multi-student support',
      desc: 'Every student gets their own personalized dashboard. Login with your roll number and see only your data.',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: '👤',
      title: 'Student profile',
      desc: 'Your branch, semester, roll number and overall status — all in one clean profile card.',
      color: 'bg-red-500/10 text-red-400'
    },
  ]

  const steps = [
    { num: '1', title: 'Login', desc: 'Enter roll number and password' },
    { num: '2', title: 'View dashboard', desc: 'See all your stats at a glance' },
    { num: '3', title: 'Stay safe', desc: 'Calculate bunks and track history' },
  ]

  return (
    <div className="bg-[#01000e] text-white min-h-screen">

      {/* Hero */}
      <div className="text-center px-6 pt-20 pb-12 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full top-[-300px] left-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-4 py-2 rounded-full mb-5">
          Everything you need
        </div>

        <h1 className="text-4xl font-bold leading-tight mb-4">
          Powerful features for <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            smarter attendance
          </span>
        </h1>

        <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
          Built specifically for college students. Everything you need to stay on top of your attendance.
        </p>
      </div>

      {/* Feature cards */}
      <div className="px-10 pb-16">
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <p className="text-white text-sm font-semibold mb-2">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white/2 border-t border-white/10 border-b px-10 py-16">
        <p className="text-center text-gray-600 text-xs tracking-widest uppercase mb-10">How it works</p>
        <div className="flex items-start max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <>
              <div key={step.num} className="flex-1 text-center">
                <div className="w-9 h-9 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-sm font-medium text-purple-400 mx-auto mb-3">
                  {step.num}
                </div>
                <p className="text-sm font-medium text-white mb-1">{step.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 w-10 pt-4 text-center text-gray-700">→</div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center px-6 py-16">
        <p className="text-xl font-bold mb-2">Ready to get started?</p>
        <p className="text-gray-500 text-sm mb-6">Join hundreds of students already using Attendify</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate('/student/login')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-medium hover:opacity-90 transition-all"
          >
            Student Login
          </button>
          <button className="px-6 py-3 rounded-full border border-white/15 text-gray-400 text-sm hover:bg-white/5 transition-all">
            Faculty Login
          </button>
        </div>
      </div>

    </div>
  )
}

export default Features