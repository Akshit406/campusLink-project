// app/inventory/[id]/page.tsx
import { BackButton } from '../../../components/BackButton';
import { StatusBadge } from '../../../components/StatusBadge';

interface PageProps {
  params: {
    id: string;
  };
}

// Mock data - in real app, this would come from an API
const getInventoryItem = (id: string) => {
  const items = {
    '1': {
      id: '1',
      name: 'Laptop Dell XPS 13',
      category: 'Electronics',
      quantity: 15,
      status: 'available' as const,
      addedDate: '2024-01-15',
      notes: 'These are high-performance laptops for faculty use. Please ensure they are returned after each semester.',
    },
    '2': {
      id: '2',
      name: 'Whiteboard Markers',
      category: 'Stationery',
      quantity: 3,
      status: 'low-stock' as const,
      addedDate: '2024-01-10',
      notes: 'Assorted colors. Need to reorder soon.',
    }
  };
  return items[id as keyof typeof items] || items['1'];
};

const stockHistory = [
  { id: 1, change: '+10', date: '2024-01-15', description: 'Initial stock' },
  { id: 2, change: '-2', date: '2024-01-20', description: 'Issued to Computer Lab' },
  { id: 3, change: '+5', date: '2024-01-25', description: 'Restocked' },
  { id: 4, change: '-3', date: '2024-02-01', description: 'Issued to Faculty' },
];

export default function InventoryDetailPage({ params }: PageProps) {
  const inventoryItem = getInventoryItem(params.id);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <BackButton />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Item Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Item Information Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-[#004aad] mb-4">Item Information</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Item Name</span>
                  <span className="text-gray-900 font-medium mt-1 sm:mt-0">{inventoryItem.name}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Category</span>
                  <span className="text-gray-900 mt-1 sm:mt-0">{inventoryItem.category}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Quantity</span>
                  <span className="text-gray-900 font-medium mt-1 sm:mt-0">{inventoryItem.quantity}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Added Date</span>
                  <span className="text-gray-900 mt-1 sm:mt-0">
                    {new Date(inventoryItem.addedDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Status</span>
                  <div className="mt-1 sm:mt-0">
                    <StatusBadge status={inventoryItem.status} />
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Card */}
            {inventoryItem.notes && (
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-[#004aad] mb-4">Notes</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {inventoryItem.notes}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Stock History Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-[#004aad] mb-4">Stock History</h2>
              <div className="space-y-4">
                {stockHistory.map((record) => (
                  <div key={record.id} className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-0">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      record.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    } font-semibold`}>
                      {record.change}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{record.description}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(record.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-[#004aad] mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-[#004aad] text-white py-2 px-4 rounded-lg hover:bg-[#003380] transition-colors font-medium">
                  Update Quantity
                </button>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Export as CSV
                </button>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}