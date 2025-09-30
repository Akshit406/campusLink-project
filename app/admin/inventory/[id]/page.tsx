'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockInventoryRequest = {
  id: 'INV-005',
  itemName: 'Projector Epson EB-X41',
  quantity: 2,
  status: 'Pending',
  club: 'Tech Club',
  requestedBy: 'John Doe',
  requestDate: '2024-01-20',
  purpose: 'For the upcoming Tech Workshop and guest lectures. Needed for presentations and demonstrations.',
  urgency: 'High',
  preferredDate: '2024-01-25',
  coordinatorComments: 'Request is justified for the workshop activities.',
  shopComments: 'Equipment available in stock. Can be issued after admin approval.',
};

export default function AdminInventoryDetailPage({ params }: { params: { id: string } }) {
  const [action, setAction] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    console.log('Inventory Action:', action, 'Comments:', comments);
    // Handle inventory action logic here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/admin/inventory"
        className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6"
      >
        ← Back to Inventory Requests
      </Link>

      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Inventory Request Review</h1>

      <div className="space-y-6">
        {/* Request Information */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Request Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Request ID</label>
              <p className="text-gray-800 font-medium">{mockInventoryRequest.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Club</label>
              <p className="text-gray-800">{mockInventoryRequest.club}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Item Name</label>
              <p className="text-gray-800 font-medium">{mockInventoryRequest.itemName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Quantity</label>
              <p className="text-gray-800">{mockInventoryRequest.quantity}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Requested By</label>
              <p className="text-gray-800">{mockInventoryRequest.requestedBy}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Request Date</label>
              <p className="text-gray-800">{mockInventoryRequest.requestDate}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Urgency</label>
              <p className="text-gray-800">{mockInventoryRequest.urgency}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Preferred Date</label>
              <p className="text-gray-800">{mockInventoryRequest.preferredDate}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600">Purpose</label>
              <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockInventoryRequest.purpose}</p>
            </div>
          </div>
        </div>

        {/* Review Comments */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Review Comments</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Coordinator Comments</label>
              <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockInventoryRequest.coordinatorComments}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Shop Department Comments</label>
              <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockInventoryRequest.shopComments}</p>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Final Approval</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
              >
                <option value="">Select action</option>
                <option value="approve">Approve and Release</option>
                <option value="approve_conditions">Approve with Conditions</option>
                <option value="request_changes">Request Modifications</option>
                <option value="reject">Reject Request</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Comments</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                placeholder="Provide your final decision and any instructions..."
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!action}
              className="w-full bg-[#004aad] hover:bg-[#003380] disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors font-medium"
            >
              Submit Final Decision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}