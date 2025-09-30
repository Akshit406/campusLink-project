import Link from 'next/link';

const budgetRequests = [
  {
    id: 'BGT-012',
    club: 'Tech Club',
    amount: 45000,
    date: '2024-01-20',
    status: 'DSW Review',
    purpose: 'Tech Symposium 2024',
    currentStage: 'DSW',
  },
  {
    id: 'BGT-011',
    club: 'Cultural Club',
    amount: 75000,
    date: '2024-01-19',
    status: 'Shop Verification',
    purpose: 'Annual Cultural Fest',
    currentStage: 'Shop',
  },
  {
    id: 'BGT-010',
    club: 'Sports Club',
    amount: 30000,
    date: '2024-01-18',
    status: 'DSW Review',
    purpose: 'Sports Equipment Purchase',
    currentStage: 'DSW',
  },
  {
    id: 'BGT-009',
    club: 'Science Club',
    amount: 25000,
    date: '2024-01-17',
    status: 'Final Approval',
    purpose: 'Lab Equipment',
    currentStage: 'Final',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'DSW Review':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Shop Verification':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Final Approval':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Completed':
      return `${baseClasses} bg-gray-100 text-gray-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function AdminBudgetPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Budget Requests</h1>

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
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Current Stage</th>
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
                  <td className="py-4 px-6 text-gray-800 font-medium">{request.currentStage}</td>
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(request.status)}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link 
                      href={`/admin/budget/${request.id}`}
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