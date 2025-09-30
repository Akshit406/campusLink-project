import Link from 'next/link';

const eventProposals = [
  {
    id: 'EVT-001',
    name: 'Annual Cultural Fest',
    date: '2024-02-15',
    venue: 'Main Auditorium',
    organizer: 'Cultural Club',
    status: 'Submitted',
  },
  {
    id: 'EVT-002',
    name: 'Tech Workshop',
    date: '2024-01-25',
    venue: 'Tech Park',
    organizer: 'Tech Club',
    status: 'Coordinator Reviewed',
  },
  {
    id: 'EVT-003',
    name: 'Sports Tournament',
    date: '2024-01-20',
    venue: 'Sports Complex',
    organizer: 'Sports Club',
    status: 'Sent to Admin',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Submitted':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Coordinator Reviewed':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Sent to Admin':
      return `${baseClasses} bg-green-100 text-green-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function EventApprovalsPage() {
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
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {eventProposals.map((event, index) => (
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
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(event.status)}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link 
                      href={`/coordinator/events/${event.id}`}
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