import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={"/"} className="flex items-center ">
          <Image
            src="/campusLink-logo.png"
            alt="CampusLink Logo"
            width={140} // adjust size as needed
            height={40}
            priority
          />
        </Link>
            <Link 
              href="/auth"
              className="bg-[#004aad] hover:bg-[#003380] text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-[#004aad]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-[#004aad]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                CampusLink – Simplifying Club & Event Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
                A centralized platform for students, secretaries, coordinators, and admins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Link 
                  href="/auth"
                  className="bg-[#004aad] hover:bg-[#003380] text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
                >
                  Get Started
                </Link>
                <button className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] px-8 py-4 rounded-lg transition-colors font-medium text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right SVG Figures */}
            {/* Right Column - Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-24 h-4 bg-[#004aad]/20 rounded-full"></div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-[#004aad]/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-[#004aad]/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-[#004aad]/30 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#004aad]/5 rounded-lg p-3">
                      <div className="w-8 h-2 bg-[#004aad]/40 rounded-full mb-2"></div>
                      <div className="w-12 h-3 bg-[#004aad]/60 rounded-full"></div>
                    </div>
                    <div className="bg-[#004aad]/5 rounded-lg p-3">
                      <div className="w-8 h-2 bg-[#004aad]/40 rounded-full mb-2"></div>
                      <div className="w-12 h-3 bg-[#004aad]/60 rounded-full"></div>
                    </div>
                    <div className="bg-[#004aad]/5 rounded-lg p-3">
                      <div className="w-8 h-2 bg-[#004aad]/40 rounded-full mb-2"></div>
                      <div className="w-12 h-3 bg-[#004aad]/60 rounded-full"></div>
                    </div>
                    <div className="bg-[#004aad]/5 rounded-lg p-3">
                      <div className="w-8 h-2 bg-[#004aad]/40 rounded-full mb-2"></div>
                      <div className="w-12 h-3 bg-[#004aad]/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#004aad]/10 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#004aad] rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="w-32 h-2 bg-[#004aad]/30 rounded-full mb-1"></div>
                        <div className="w-24 h-2 bg-[#004aad]/20 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#004aad]/10 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#004aad] rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="w-28 h-2 bg-[#004aad]/30 rounded-full mb-1"></div>
                        <div className="w-20 h-2 bg-[#004aad]/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#004aad]/10 rounded-2xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#004aad]/5 rounded-2xl -rotate-6 animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#004aad]/15 rounded-full rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Streamlined Campus Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage university clubs and events in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Budget Approvals */}
            <div className="bg-[#f8fafc] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[#004aad]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#004aad]">
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 14H16" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 17H12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Budget Approvals</h3>
              <p className="text-gray-600">
                Digital workflow for budget requests, approvals, and fund tracking with real-time status updates.
              </p>
            </div>

            {/* Attendance Tracking */}
            <div className="bg-[#f8fafc] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[#004aad]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#004aad]">
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Attendance Tracking</h3>
              <p className="text-gray-600">
                Automated attendance submission, verification, and digital record-keeping for all events.
              </p>
            </div>

            {/* Event Proposals */}
            <div className="bg-[#f8fafc] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[#004aad]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#004aad]">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="14" r="1" fill="currentColor"/>
                  <circle cx="12" cy="14" r="1" fill="currentColor"/>
                  <circle cx="16" cy="14" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Event Proposals</h3>
              <p className="text-gray-600">
                Streamlined event planning, approval workflows, and campus calendar integration.
              </p>
            </div>

            {/* Inventory Management */}
            <div className="bg-[#f8fafc] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[#004aad]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#004aad]">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="14" r="1" fill="currentColor"/>
                  <circle cx="15" cy="14" r="1" fill="currentColor"/>
                  <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Track resources, manage stock levels, and handle equipment requests efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored experiences for different roles in the campus ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Club Secretaries */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#004aad]">
                  <circle cx="16" cy="11" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 25C24 20.0294 20.4183 16 16 16C11.5817 16 8 20.0294 8 25" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Club Secretaries</h3>
              <p className="text-gray-600 text-lg">
                Submit proposals, manage attendance, handle inventory, and track budget utilization for your club.
              </p>
            </div>

            {/* Coordinators */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#004aad]">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 24V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coordinators</h3>
              <p className="text-gray-600 text-lg">
                Review, verify, and oversee requests while monitoring fund utilization across multiple clubs.
              </p>
            </div>

            {/* Admins */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#004aad]/20 transition-colors">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#004aad]">
                  <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="8" cy="8" r="1" fill="currentColor"/>
                  <circle cx="8" cy="12" r="1" fill="currentColor"/>
                  <circle cx="8" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Admins</h3>
              <p className="text-gray-600 text-lg">
                Approve, finalize, release funds, manage allocations, and generate compliance reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2025 CampusLink – University Club Management System
          </p>
        </div>
      </footer>

      
    </div>
  );
}