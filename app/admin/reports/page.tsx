export default function AdminReportsPage() {
  const monthlyData = [
    { month: 'Jan', budgets: 45, events: 32, attendance: 78, inventory: 12 },
    { month: 'Feb', budgets: 52, events: 28, attendance: 85, inventory: 15 },
    { month: 'Mar', budgets: 48, events: 35, attendance: 92, inventory: 18 },
    { month: 'Apr', budgets: 61, events: 42, attendance: 105, inventory: 22 },
  ];

  const clubPerformance = [
    { club: 'Tech Club', requests: 45, approved: 38, rate: '84%' },
    { club: 'Cultural Club', requests: 32, approved: 28, rate: '88%' },
    { club: 'Sports Club', requests: 28, approved: 22, rate: '79%' },
    { club: 'Science Club', requests: 25, approved: 21, rate: '84%' },
    { club: 'Music Club', requests: 18, approved: 15, rate: '83%' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Reports & Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Overview */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Request Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Month</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Budgets</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Events</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Attendance</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Inventory</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data, index) => (
                  <tr key={data.month} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-800 font-medium">{data.month}</td>
                    <td className="py-3 px-4 text-gray-800">{data.budgets}</td>
                    <td className="py-3 px-4 text-gray-800">{data.events}</td>
                    <td className="py-3 px-4 text-gray-800">{data.attendance}</td>
                    <td className="py-3 px-4 text-gray-800">{data.inventory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Club Performance */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Club Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Club</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Requests</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Approved</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {clubPerformance.map((club, index) => (
                  <tr key={club.club} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-800 font-medium">{club.club}</td>
                    <td className="py-3 px-4 text-gray-800">{club.requests}</td>
                    <td className="py-3 px-4 text-gray-800">{club.approved}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {club.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">System Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004aad] mb-2">1,248</div>
              <div className="text-gray-600">Total Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-gray-600">Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.2</div>
              <div className="text-gray-600">Avg. Days to Approve</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-gray-600">Active Clubs</div>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Export Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-3 px-4 rounded-lg transition-colors font-medium">
              📊 Export Monthly Report
            </button>
            <button className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-3 px-4 rounded-lg transition-colors font-medium">
              💰 Budget Analysis
            </button>
            <button className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-3 px-4 rounded-lg transition-colors font-medium">
              👥 Club Performance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}