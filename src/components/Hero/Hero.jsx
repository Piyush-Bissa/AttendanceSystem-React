import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen bg-[#01000e] flex items-center justify-center text-white overflow-hidden">

      {/* Background blur circle */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-[150px] opacity-20 bottom-[-300px] left-1/2 -translate-x-1/2 z-0"></div>

      <div className="relative z-10 text-center max-w-2xl px-4">

        {/* College badge */}
        <div className="inline-block bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs px-4 py-2 rounded-full mb-6">
          Poornima Institute of Engineering & Technology
        </div>

        
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Track Attendance <br />
          Control Your{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bunks
          </span>
        </h1>

        
        <p className="text-gray-400 text-base mb-8 max-w-md mx-auto leading-relaxed">
          Smart attendance tracking with real-time bunk insights. Never fall below 75% again.
        </p>

        
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => navigate('/student/login')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-medium hover:opacity-90 transition-all"
          >
            Student Login
          </button>
          <button className="px-6 py-3 rounded-full border border-white/20 text-sm text-gray-300 hover:bg-white/10 transition-all">
            Faculty Login
          </button>
        </div>

        
        <div className="inline-flex items-center gap-8 bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
          <div className="text-center">
            <p className="text-xl font-bold text-purple-400">5000+</p>
            <p className="text-xs text-gray-500 mt-1">Students</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-xl font-bold text-purple-400">3+</p>
            <p className="text-xs text-gray-500 mt-1">Colleges</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-xl font-bold text-purple-400">75%</p>
            <p className="text-xs text-gray-500 mt-1">Bunk Limit</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-xl font-bold text-purple-400">100%</p>
            <p className="text-xs text-gray-500 mt-1">Placement</p>
          </div>
        </div>

      </div>
    </section>
  )
}