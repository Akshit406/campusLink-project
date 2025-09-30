import Link from 'next/link';

const historicalEvents = [
  {
    id: 'EVT-003',
    name: 'Sports Tournament Finals',
    date: '2024-01-20',
    venue: 'Sports Complex',
    organizer: 'Sports Club',
    status: 'Completed',
  },
  {
    id: 'EVT-005',
    name: 'Winter Workshop Series',
    date: '2023-12-15',
    venue: 'Seminar Block',
    organizer: 'Academic Club',
    status: 'Cancelled',
  },
  {
    id: 'EVT-007',
    name: 'Science Exhibition 2023',
    date: '2023-11-10',
    venue: 'Science Block',
    organizer: 'Science Club',
    status: 'Completed',
  },
  {
    id: 'EVT-008',
    name: 'Music Concert',
    date: '2023-10-05',
    venue: 'Open Amphitheater',
    organizer: 'Music Club',
    status: 'Completed',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Completed':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Cancelled':
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function EventHistoryPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Link 
            href="/secretary/events"
            className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-4 py-2 transition-colors inline-block mb-2"
          >
            ← Back to Events
          </Link>
          <h1 className="text-3xl font-bold text-[#004aad]">Event History</h1>
          <p className="text-gray-600 mt-2">View past completed and cancelled events</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Event Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Venue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Organizer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {historicalEvents.map((event, index) => (
                <tr 
                  key={event.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-3 px-4 text-gray-800 font-medium">{event.name}</td>
                  <td className="py-3 px-4 text-gray-600">{event.date}</td>
                  <td className="py-3 px-4 text-gray-600">{event.venue}</td>
                  <td className="py-3 px-4 text-gray-600">{event.organizer}</td>
                  <td className="py-3 px-4">
                    <span className={getStatusBadge(event.status)}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link 
                      href={`/secretary/events/${event.id}`}
                      className="text-[#004aad] hover:text-[#003380] transition-colors font-medium"
                    >
                      View
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