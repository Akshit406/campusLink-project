import Link from 'next/link';

const inventoryRequests = [
  {
    id: 'INV-005',
    itemName: 'Projector Epson EB-X41',
    quantity: 2,
    status: 'Pending',
    club: 'Tech Club',
    requestedBy: 'John Doe',
    requestDate: '2024-01-20',
  },
  {
    id: 'INV-004',
    itemName: 'Sports Equipment Set',
    quantity: 15,
    status: 'Shop Verified',
    club: 'Sports Club',
    requestedBy: 'Mike Johnson',
    requestDate: '2024-01-19',
  },
  {
    id: 'INV-003',
    itemName: 'Chairs Stackable',
    quantity: 50,
    status: 'Approved',
    club: 'Cultural Club',
    requestedBy: 'Sarah Wilson',
    requestDate: '2024-01-18',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Shop Verified':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Approved':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Rejected':
      return `${baseClasses} bg-red-100 text-red-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function AdminInventoryPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Inventory Requests</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Request ID</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Item Name</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Quantity</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Club</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Requested By</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryRequests.map((request, index) => (
                <tr 
                  key={request.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">{request.id}</td>
                  <td className="py-4 px-6 text-gray-800">{request.itemName}</td>
                  <td className="py-4 px-6 text-gray-800">{request.quantity}</td>
                  <td className="py-4 px-6 text-gray-600">{request.club}</td>
                  <td className="py-4 px-6 text-gray-600">{request.requestedBy}</td>
                  <td className="py-4 px-6 text-gray-600">{request.requestDate}</td>
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(request.status)}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link 
                      href={`/admin/inventory/${request.id}`}
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