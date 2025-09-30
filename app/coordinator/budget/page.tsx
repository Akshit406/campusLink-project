import Link from 'next/link';

const budgetRequests = [
  {
    id: 'BGT-001',
    club: 'Tech Club',
    amount: 25000,
    date: '2024-01-15',
    status: 'Pending',
    purpose: 'Annual Tech Symposium',
  },
  {
    id: 'BGT-002',
    club: 'Cultural Club',
    amount: 15000,
    date: '2024-01-14',
    status: 'Reviewed',
    purpose: 'Cultural Fest Decorations',
  },
  {
    id: 'BGT-003',
    club: 'Sports Club',
    amount: 30000,
    date: '2024-01-13',
    status: 'Forwarded',
    purpose: 'Sports Equipment',
  },
  {
    id: 'BGT-004',
    club: 'Science Club',
    amount: 12000,
    date: '2024-01-12',
    status: 'Rejected',
    purpose: 'Lab Equipment',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Reviewed':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Forwarded':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Rejected':
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function BudgetApprovalsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Budget Approvals</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Request ID</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Club</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Purpose</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Amount</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {budgetRequests.map((request, index) => (
                <tr 
                  key={request.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">{request.id}</td>
                  <td className="py-4 px-6 text-gray-800">{request.club}</td>
                  <td className="py-4 px-6 text-gray-600">{request.purpose}</td>
                  <td className="py-4 px-6 text-gray-800">₹{request.amount.toLocaleString()}</td>
                  <td className="py-4 px-6 text-gray-600">{request.date}</td>
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(request.status)}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <Link 
                        href={`/coordinator/budget/${request.id}`}
                        className="text-[#004aad] hover:text-[#003380] transition-colors font-medium"
                      >
                        Review
                      </Link>
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