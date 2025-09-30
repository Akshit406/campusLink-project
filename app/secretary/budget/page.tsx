import Link from 'next/link';
import Card from '../../components/Card';

const mockRequests = [
  { id: 'REQ-001', purpose: 'Annual Cultural Fest', amount: 25000, status: 'Pending', createdDate: '2024-01-15' },
  { id: 'REQ-002', purpose: 'Sports Equipment', amount: 15000, status: 'Approved', createdDate: '2024-01-10' },
  { id: 'REQ-003', purpose: 'Workshop Materials', amount: 8000, status: 'Rejected', createdDate: '2024-01-08' },
  { id: 'REQ-004', purpose: 'Guest Speaker Honorarium', amount: 12000, status: 'Released', createdDate: '2024-01-05' },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium';
  switch (status) {
    case 'Pending': return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Approved': return `${baseClasses} bg-green-100 text-green-700`;
    case 'Rejected': return `${baseClasses} bg-red-100 text-red-700`;
    case 'Released': return `${baseClasses} bg-blue-100 text-blue-700`;
    default: return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function BudgetPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad]">Budget Requests</h1>
        <Link 
          href="/secretary/budget/new"
          className="bg-[#004aad] hover:bg-[#003380] text-white rounded-lg px-4 py-2 text-sm sm:text-base transition-colors"
        >
          New Request
        </Link>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm sm:text-base font-semibold text-[#1e293b]">Request ID</th>
                <th className="text-left py-3 px-4 text-sm sm:text-base font-semibold text-[#1e293b]">Purpose</th>
                <th className="text-left py-3 px-4 text-sm sm:text-base font-semibold text-[#1e293b]">Amount</th>
                <th className="text-left py-3 px-4 text-sm sm:text-base font-semibold text-[#1e293b]">Status</th>
                <th className="text-left py-3 px-4 text-sm sm:text-base font-semibold text-[#1e293b]">Date</th>
                <th className="text-left py-3 px-4 text-sm sm:text-base font-semibold text-[#1e293b]">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockRequests.map((request, index) => (
                <tr 
                  key={request.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-3 px-4 text-sm sm:text-base">{request.id}</td>
                  <td className="py-3 px-4 text-sm sm:text-base">{request.purpose}</td>
                  <td className="py-3 px-4 text-sm sm:text-base">₹{request.amount.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={getStatusBadge(request.status)}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-xs sm:text-sm text-[#64748b]">{request.createdDate}</td>
                  <td className="py-3 px-4">
                    <Link 
                      href={`/secretary/budget/${request.id}`}
                      className="text-[#004aad] hover:text-[#003380] transition-colors font-medium text-sm sm:text-base"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
