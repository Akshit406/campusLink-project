import Link from 'next/link';

const mockAttendanceRecords = [
  {
    id: 'ATT-001',
    eventName: 'Annual Cultural Fest 2024',
    date: '2024-01-20',
    participants: 150,
    submittedBy: 'John Doe',
    status: 'Verified',
  },
  {
    id: 'ATT-002',
    eventName: 'Tech Workshop - Web Development',
    date: '2024-01-18',
    participants: 45,
    submittedBy: 'Sarah Wilson',
    status: 'Pending',
  },
  {
    id: 'ATT-003',
    eventName: 'Sports Tournament Finals',
    date: '2024-01-15',
    participants: 89,
    submittedBy: 'Mike Johnson',
    status: 'Verified',
  },
  {
    id: 'ATT-004',
    eventName: 'Guest Lecture - AI Trends',
    date: '2024-01-12',
    participants: 67,
    submittedBy: 'Emily Chen',
    status: 'Pending',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-xs sm:text-sm font-medium';
  switch (status) {
    case 'Verified':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function AttendancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad]">Attendance Records</h1>
        <Link 
          href="/secretary/attendance/upload"
          className="bg-[#004aad] hover:bg-[#003380] text-white rounded-lg px-4 py-2 text-sm sm:text-base transition-colors text-center"
        >
          Upload Attendance
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Event Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Participants</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Submitted By</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockAttendanceRecords.map((record, index) => (
                <tr 
                  key={record.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-3 px-4 text-gray-800">{record.eventName}</td>
                  <td className="py-3 px-4 text-gray-600">{record.date}</td>
                  <td className="py-3 px-4 text-gray-800">{record.participants}</td>
                  <td className="py-3 px-4 text-gray-600">{record.submittedBy}</td>
                  <td className="py-3 px-4">
                    <span className={getStatusBadge(record.status)}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link 
                      href={`/secretary/attendance/${record.id}`}
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

      {/* Mobile Card List */}
      <div className="space-y-4 sm:hidden">
        {mockAttendanceRecords.map((record) => (
          <div key={record.id} className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-base font-bold text-gray-800">{record.eventName}</h3>
            <p className="text-sm text-gray-600">{record.date}</p>
            <p className="text-sm text-gray-600">{record.submittedBy}</p>
            <div className="flex justify-between items-center mt-3">
              <span className={getStatusBadge(record.status)}>{record.status}</span>
              <Link 
                href={`/secretary/attendance/${record.id}`}
                className="text-[#004aad] hover:text-[#003380] font-medium text-sm"
              >
                View →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
