import Link from 'next/link';

const stats = [
  { label: 'Pending Budgets', value: 8, href: '/coordinator/budget' },
  { label: 'Pending Events', value: 5, href: '/coordinator/events' },
  { label: 'Attendance to Verify', value: 12, href: '/coordinator/attendance' },
  { label: 'Inventory Requests', value: 3, href: '/coordinator/inventory' },
];

const recentNotifications = [
  { id: 1, message: 'New budget request from Tech Club', time: '5 min ago', type: 'budget' },
  { id: 2, message: 'Event proposal needs review', time: '1 hour ago', type: 'event' },
  { id: 3, message: 'Attendance sheet submitted for approval', time: '2 hours ago', type: 'attendance' },
  { id: 4, message: 'Inventory request from Sports Club', time: '3 hours ago', type: 'inventory' },
];

export default function CoordinatorDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Coordinator Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer">
              <div className="text-3xl font-bold text-[#004aad] mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Notifications */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Notifications</h2>
          <div className="space-y-4">
            {recentNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 mt-2 rounded-full ${
                  notification.type === 'budget' ? 'bg-blue-500' :
                  notification.type === 'event' ? 'bg-green-500' :
                  notification.type === 'attendance' ? 'bg-yellow-500' : 'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-gray-800">{notification.message}</p>
                  <p className="text-gray-500 text-sm">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            href="/coordinator/notifications"
            className="block text-center mt-4 text-[#004aad] hover:text-[#003380] font-medium"
          >
            View All Notifications
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link 
              href="/coordinator/budget"
              className="block w-full bg-[#004aad] hover:bg-[#003380] text-white py-3 px-4 rounded-lg text-center transition-colors"
            >
              Review Budget Requests
            </Link>
            <Link 
              href="/coordinator/events"
              className="block w-full border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-3 px-4 rounded-lg text-center transition-colors"
            >
              Approve Events
            </Link>
            <Link 
              href="/coordinator/attendance"
              className="block w-full border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-3 px-4 rounded-lg text-center transition-colors"
            >
              Verify Attendance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}