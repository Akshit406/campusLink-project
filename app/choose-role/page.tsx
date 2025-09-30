'use client';

import { useRouter } from 'next/navigation';

export default function ChooseRolePage() {
  const router = useRouter();

  const handleRoleSelect = (role: string) => {
    // Temporary routing - in real app, this would set user role in context/state
    switch (role) {
      case 'secretary':
        router.push('/secretary');
        break;
      case 'coordinator':
        router.push('/coordinator');
        break;
      case 'admin':
        router.push('/admin');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#004aad] mb-4">
              Temporary Role selection 
            </h1>
           
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Secretary Dashboard */}
            <button
              onClick={() => handleRoleSelect('secretary')}
              className="bg-white border-2 border-[#004aad] rounded-xl p-6 hover:bg-[#004aad] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004aad]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#004aad] group-hover:text-white transition-colors">
                    <circle cx="16" cy="11" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M24 25C24 20.0294 20.4183 16 16 16C11.5817 16 8 20.0294 8 25" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  Secretary Dashboard
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white/80 transition-colors">
                  Manage club activities, budgets, and events
                </p>
              </div>
            </button>

            {/* Coordinator Dashboard */}
            <button
              onClick={() => handleRoleSelect('coordinator')}
              className="bg-white border-2 border-[#004aad] rounded-xl p-6 hover:bg-[#004aad] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004aad]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#004aad] group-hover:text-white transition-colors">
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 24V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  Coordinator Dashboard
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white/80 transition-colors">
                  Review and approve requests from clubs
                </p>
              </div>
            </button>

            {/* Admin Dashboard */}
            <button
              onClick={() => handleRoleSelect('admin')}
              className="bg-white border-2 border-[#004aad] rounded-xl p-6 hover:bg-[#004aad] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004aad]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#004aad] group-hover:text-white transition-colors">
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  Admin Dashboard
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white/80 transition-colors">
                  Manage system-wide settings and final approvals
                </p>
              </div>
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}