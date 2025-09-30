import Link from 'next/link';

const inventoryRequests = [
  {
    id: 'INV-001',
    itemName: 'Projector',
    quantity: 2,
    status: 'Pending',
    club: 'Tech Club',
  },
  {
    id: 'INV-002',
    itemName: 'Sports Equipment',
    quantity: 15,
    status: 'Verified',
    club: 'Sports Club',
  },
  {
    id: 'INV-003',
    itemName: 'Chairs',
    quantity: 50,
    status: 'Forwarded',
    club: 'Cultural Club',
  },
  {
    id: 'INV-004',
    itemName: 'Lab Equipment',
    quantity: 10,
    status: 'Fulfilled',
    club: 'Science Club',
  },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Verified':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Forwarded':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Fulfilled':
      return `${baseClasses} bg-purple-100 text-purple-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function InventoryRequestsPage() {
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
                  <td className="py-4 px-6">
                    <span className={getStatusBadge(request.status)}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link 
                      href={`/coordinator/inventory/${request.id}`}
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