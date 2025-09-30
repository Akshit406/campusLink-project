import Link from 'next/link';

const eventRequests = [
  {
    id: 'EVT-008',
    name: 'Annual Cultural Fest',
    date: '2024-02-15',
    venue: 'Main Auditorium',
    organizer: 'Cultural Club',
    status: 'Pending',
    expectedCrowd: 500,
  },
  {
    id: 'EVT-007',
    name: 'Tech Workshop Series',
    date: '2024-01-25',
    venue: 'Tech Park',
    organizer: 'Tech Club',
    status: 'Pending',
    expectedCrowd: 100,
  },
  {
    id: 'EVT-006',
    name: 'Sports Tournament Finals',
    date: '2024-01-30',
    venue: 'Sports Complex',
    organizer: 'Sports Club',
    status: 'Approved',
    expectedCrowd: 300,
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Approved':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Rejected':
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function AdminEventsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Event Approvals</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Event Name</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Venue</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Organizer</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Expected Crowd</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {eventRequests.map((event, index) => (
                <tr 
                  key={event.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">{event.name}</td>
                  <td className="py-4 px-6 text-gray-600">{event.date}</td>
                  <td className="py-4 px-6 text-gray-600">{event.venue}</td>
                  <td className="py-4 px-6 text-gray-600">{event.organizer}</td>
                  <td className="py-4 px-6 text-gray-800">{event.expectedCrowd}</td>
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(event.status)}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link 
                      href={`/admin/events/${event.id}`}
                      className="text-[#004aad] hover:text-[#003380] transition-colors font-medium"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}