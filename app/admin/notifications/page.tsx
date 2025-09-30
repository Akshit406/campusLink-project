const notifications = [
  {
    id: 1,
    message: 'New budget request from Tech Club requires DSW approval',
    type: 'budget',
    time: '2024-01-20 10:30 AM',
    read: false,
    priority: 'high',
  },
  {
    id: 2,
    message: 'Cultural Fest event proposal forwarded by Coordinator',
    type: 'event',
    time: '2024-01-20 09:15 AM',
    read: false,
    priority: 'medium',
  },
  {
    id: 3,
    message: 'Sports equipment request verified by Shop Department',
    type: 'inventory',
    time: '2024-01-19 03:45 PM',
    read: true,
    priority: 'medium',
  },
  {
    id: 4,
    message: 'Monthly financial report is ready for review',
    type: 'report',
    time: '2024-01-19 11:20 AM',
    read: true,
    priority: 'low',
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'budget':
      return 'bg-blue-100 text-blue-800';
    case 'event':
      return 'bg-green-100 text-green-800';
    case 'inventory':
      return 'bg-purple-100 text-purple-800';
    case 'report':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case 'high':
      return '🔴';
    case 'medium':
      return '🟡';
    case 'low':
      return '🟢';
    default:
      return '⚪';
  }
};

export default function AdminNotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Notifications</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">All Notifications</h2>
            <div className="flex space-x-2">
              <button className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-4 py-2 transition-colors text-sm">
                Mark All Read
              </button>
              <button className="bg-[#004aad] hover:bg-[#003380] text-white rounded-lg px-4 py-2 transition-colors text-sm">
                Clear All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`flex items-start space-x-4 p-4 rounded-lg border ${
                  notification.read ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className={`w-3 h-3 rounded-full mt-2 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                        {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{getPriorityIcon(notification.priority)}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{notification.time}</span>
                  </div>
                  <p className="text-gray-800">{notification.message}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-[#004aad] hover:text-[#003380] text-sm transition-colors">
                      Mark as {notification.read ? 'Unread' : 'Read'}
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm transition-colors">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}