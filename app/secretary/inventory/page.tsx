// app/inventory/page.tsx
import Link from 'next/link';
import { StatusBadge } from '../../components/StatusBadge';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  status: 'available' | 'low-stock' | 'out-of-stock';
  addedDate: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: '1',
    name: 'Laptop Dell XPS 13',
    category: 'Electronics',
    quantity: 15,
    status: 'available',
    addedDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Whiteboard Markers',
    category: 'Stationery',
    quantity: 3,
    status: 'low-stock',
    addedDate: '2024-01-10',
  },
  {
    id: '3',
    name: 'Projector Epson',
    category: 'Equipment',
    quantity: 0,
    status: 'out-of-stock',
    addedDate: '2024-01-05',
  },
  {
    id: '4',
    name: 'Notebooks Pack',
    category: 'Stationery',
    quantity: 25,
    status: 'available',
    addedDate: '2024-01-20',
  },
  {
    id: '5',
    name: 'Chairs Stackable',
    category: 'Furniture',
    quantity: 8,
    status: 'available',
    addedDate: '2024-01-18',
  },
];

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#004aad] mb-4 sm:mb-0">
            Inventory Items
          </h1>
          <Link
            href="/secretary/inventory/new"
            className="bg-[#004aad] text-white px-6 py-3 rounded-lg hover:bg-[#003380] transition-colors font-medium text-center inline-flex items-center justify-center"
          >
            Add Item
          </Link>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                    Item Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                    Added Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 md:px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventoryData.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-4 text-sm text-gray-900 md:px-6">
                      {item.name}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 md:px-6">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 md:px-6">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 md:px-6">
                      {new Date(item.addedDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      <Link
                        href={`/secretary/inventory/${item.id}`}
                        className="text-[#004aad] hover:text-[#003380] font-medium transition-colors"
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

        {/* Mobile Cards for small screens */}
        <div className="mt-6 space-y-4 md:hidden">
          {inventoryData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <StatusBadge status={item.status} />
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span>{item.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>{item.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Added:</span>
                  <span>{new Date(item.addedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href={`/secretary/inventory/${item.id}`}
                  className="text-[#004aad] hover:text-[#003380] font-medium text-sm transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}