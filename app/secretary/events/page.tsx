import Link from 'next/link';

const mockEvents = [
  {
    id: 'EVT-001',
    name: 'Annual Cultural Fest 2024',
    date: '2024-02-15',
    venue: 'Main Auditorium',
    organizer: 'Cultural Club',
    status: 'Upcoming',
  },
  {
    id: 'EVT-002',
    name: 'Tech Symposium',
    date: '2024-01-25',
    venue: 'Tech Park',
    organizer: 'Tech Club',
    status: 'Ongoing',
  },
  {
    id: 'EVT-003',
    name: 'Sports Tournament Finals',
    date: '2024-01-20',
    venue: 'Sports Complex',
    organizer: 'Sports Club',
    status: 'Completed',
  },
  {
    id: 'EVT-004',
    name: 'Alumni Meet 2024',
    date: '2024-03-10',
    venue: 'Convocation Hall',
    organizer: 'Alumni Association',
    status: 'Upcoming',
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
    id: 'EVT-006',
    name: 'Career Fair 2024',
    date: '2024-02-28',
    venue: 'Exhibition Center',
    organizer: 'Placement Cell',
    status: 'Upcoming',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Upcoming':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Ongoing':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Completed':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Cancelled':
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#004aad]">Events</h1>
        <Link 
          href="/secretary/events/new"
          className="bg-[#004aad] hover:bg-[#003380] text-white rounded-lg px-4 py-2 transition-colors"
        >
          + Create Event
        </Link>
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
              {mockEvents.map((event, index) => (
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