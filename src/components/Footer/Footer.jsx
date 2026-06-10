export default function Footer() {
  return (
    <footer className="bg-[#01000e] text-gray-400 border-t border-white/10">
      
      <div className="max-w-6xl mx-auto px-10 py-10">

        {/* Top section - 3 columns */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          
          {/* Left - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">A</div>
              <span className="text-white font-semibold text-base">Attendify</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Smart attendance tracking for college students. Never fall below 75% again.
            </p>
          </div>

          {/* Center - Quick links */}
          <div className="flex flex-col items-center">
            <p className="text-white text-sm font-medium mb-3">Quick Links</p>
            <div className="flex flex-col gap-2 text-center">
              <span className="text-sm text-gray-500 hover:text-purple-400 cursor-pointer transition-all">Home</span>
              <span className="text-sm text-gray-500 hover:text-purple-400 cursor-pointer transition-all">Features</span>
              <span className="text-sm text-gray-500 hover:text-purple-400 cursor-pointer transition-all">Student Login</span>
              <span className="text-sm text-gray-500 hover:text-purple-400 cursor-pointer transition-all">Faculty Login</span>
            </div>
          </div>

          {/* Right - College info */}
          <div className="text-right">
            <p className="text-white text-sm font-medium mb-3">College</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Poornima Institute of<br />Engineering & Technology<br />Jaipur, Rajasthan
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom - copyright */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-600">© 2026 Attendify. All rights reserved.</p>
          <p className="text-xs text-gray-600"> Bissa G</p>
        </div>

      </div>
    </footer>
  )
}