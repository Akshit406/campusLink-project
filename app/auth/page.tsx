import Link from 'next/link';

export default function AuthLandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-[#004aad]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-[#004aad]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#004aad]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-[#004aad]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            

            {/* Hero Text */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Welcome to CampusLink
              </h2>
              
            </div>

            {/* Information Block */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md border border-gray-200/50">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#004aad]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#004aad] text-sm">✉️</span>
                  </div>
                  <p className="text-gray-700 text-left">
                    <strong>OTP-based email verification</strong> for secure sign up
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#004aad]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#004aad] text-sm">👥</span>
                  </div>
                  <p className="text-gray-700 text-left">
                    <strong>Multiple roles:</strong> Secretary, Coordinator, Admin, Student
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#004aad]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#004aad] text-sm">🔒</span>
                  </div>
                  <p className="text-gray-700 text-left">
                    <strong>Secure platform</strong> with role-based access control
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 w-full max-w-sm">
              <Link 
                href="/auth/signin"
                className="w-full bg-[#004aad] hover:bg-[#003380] text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <span>Sign In</span>
              </Link>
              
              <Link 
                href="/auth/signup"
                className="w-full border-2 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <span>Sign Up</span>
              </Link>
            </div>

            
          </div>

          <div className="relative hidden lg:block opacity-50">
              <div className="relative w-full h-96">
                {/* Floating Calendar */}
                <div className="absolute top-8 left-12 animate-float">
                  <svg width="200" height="200" viewBox="0 0 120 120" className="text-[#004aad]">
                    <rect x="10" y="20" width="100" height="90" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="10" y="20" width="100" height="20" rx="8" fill="currentColor" fillOpacity="0.2"/>
                    <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">EVENTS</text>
                    <line x1="10" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="35" cy="65" r="3" fill="currentColor"/>
                    <circle cx="60" cy="65" r="3" fill="currentColor"/>
                    <circle cx="85" cy="65" r="3" fill="currentColor"/>
                    <circle cx="35" cy="85" r="3" fill="currentColor"/>
                    <circle cx="60" cy="85" r="3" fill="currentColor"/>
                  </svg>
                </div>

                {/* Floating Budget Chart */}
                <div className="absolute top-4 right-20 animate-float" style={{animationDelay: '1s'}}>
                  <svg width="150" height="150" viewBox="0 0 100 100" className="text-[#004aad]">
                    <rect x="10" y="40" width="15" height="50" rx="2" fill="currentColor" fillOpacity="0.3"/>
                    <rect x="35" y="20" width="15" height="70" rx="2" fill="currentColor" fillOpacity="0.5"/>
                    <rect x="60" y="30" width="15" height="60" rx="2" fill="currentColor" fillOpacity="0.7"/>
                    <rect x="85" y="10" width="15" height="80" rx="2" fill="currentColor"/>
                    <line x1="5" y1="90" x2="95" y2="90" stroke="currentColor" strokeWidth="2"/>
                    <text x="50" y="98" textAnchor="middle" fill="currentColor" fontSize="8">BUDGET</text>
                  </svg>
                </div>

                {/* Floating Attendance */}
                <div className="absolute top-[70%] left-[10%] animate-float" style={{animationDelay: '2s'}}>
                  <svg width="150" height="150" viewBox="0 0 80 80" className="text-[#004aad]">
                    <circle cx="40" cy="40" r="35" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M25 40 L35 50 L55 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <circle cx="25" cy="25" r="2" fill="currentColor"/>
                    <circle cx="45" cy="20" r="2" fill="currentColor"/>
                    <circle cx="60" cy="35" r="2" fill="currentColor"/>
                  </svg>
                </div>

                {/* Floating Inventory */}
                <div className="absolute bottom-[-20%] right-10 animate-float" style={{animationDelay: '1.5s'}}>
                  <svg width="220" height="220" viewBox="0 0 90 90" className="text-[#004aad]">
                    <rect x="15" y="15" width="60" height="60" rx="5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="25" y="25" width="40" height="8" rx="2" fill="currentColor" fillOpacity="0.3"/>
                    <rect x="25" y="38" width="30" height="8" rx="2" fill="currentColor" fillOpacity="0.5"/>
                    <rect x="25" y="51" width="35" height="8" rx="2" fill="currentColor" fillOpacity="0.7"/>
                    <circle cx="70" cy="65" r="3" fill="currentColor"/>
                  </svg>
                </div>

                {/* Connecting Lines */}
                <svg width="100%" height="100%" className="absolute inset-0">
                  <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="#004aad" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                  <line x1="70%" y1="35%" x2="60%" y2="45%" stroke="#004aad" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                  <line x1="40%" y1="70%" x2="50%" y2="60%" stroke="#004aad" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                </svg>
              </div>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 CampusLink – University Club Management System
          </p>
        </div>
      </footer>

     
    </div>
  );
}