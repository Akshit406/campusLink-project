const attendanceSubmissions = [
  {
    id: 'ATT-001',
    eventName: 'Tech Workshop',
    date: '2024-01-20',
    submittedBy: 'John Doe',
    status: 'Pending',
    participants: 45,
  },
  {
    id: 'ATT-002',
    eventName: 'Cultural Fest',
    date: '2024-01-18',
    submittedBy: 'Sarah Wilson',
    status: 'Verified',
    participants: 120,
  },
  {
    id: 'ATT-003',
    eventName: 'Sports Tournament',
    date: '2024-01-15',
    submittedBy: 'Mike Johnson',
    status: 'Rejected',
    participants: 89,
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Verified':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Rejected':
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function AttendanceVerificationPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Attendance Verification</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Event Name</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Submitted By</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Participants</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {attendanceSubmissions.map((attendance, index) => (
                <tr 
                  key={attendance.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">{attendance.eventName}</td>
                  <td className="py-4 px-6 text-gray-600">{attendance.date}</td>
                  <td className="py-4 px-6 text-gray-600">{attendance.submittedBy}</td>
                  <td className="py-4 px-6 text-gray-800">{attendance.participants}</td>
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(attendance.status)}>
                      {attendance.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="text-green-600 hover:text-green-800 transition-colors font-medium">
                        Approve
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors font-medium">
                        Reject
                      </button>
                      <button className="text-[#004aad] hover:text-[#003380] transition-colors font-medium">
                        Download
                      </button>
                    </div>
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