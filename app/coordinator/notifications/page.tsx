const notifications = [
  {
    id: 1,
    message: 'New budget request from Tech Club requires your review',
    type: 'budget',
    time: '2024-01-20 10:30 AM',
    read: false,
  },
  {
    id: 2,
    message: 'Event proposal from Cultural Club has been submitted',
    type: 'event',
    time: '2024-01-20 09:15 AM',
    read: false,
  },
  {
    id: 3,
    message: 'Attendance sheet for Sports Tournament needs verification',
    type: 'attendance',
    time: '2024-01-19 03:45 PM',
    read: true,
  },
  {
    id: 4,
    message: 'Inventory request from Science Club is pending approval',
    type: 'inventory',
    time: '2024-01-19 11:20 AM',
    read: true,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'budget':
      return 'bg-blue-100 text-blue-800';
    case 'event':
      return 'bg-green-100 text-green-800';
    case 'attendance':
      return 'bg-yellow-100 text-yellow-800';
    case 'inventory':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Notifications</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6">
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
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                      {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                    </span>
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