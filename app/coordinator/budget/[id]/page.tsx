'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockBudgetRequest = {
  id: 'BGT-001',
  club: 'Tech Club',
  amount: 25000,
  date: '2024-01-15',
  status: 'Pending',
  purpose: 'Annual Tech Symposium',
  description: 'Budget for organizing the annual tech symposium including venue booking, guest speaker honorarium, and participant kits.',
  breakdown: [
    { item: 'Venue Booking', cost: 8000 },
    { item: 'Guest Speaker', cost: 10000 },
    { item: 'Participant Kits', cost: 4000 },
    { item: 'Refreshments', cost: 3000 },
  ],
  submittedBy: 'John Doe',
  submissionDate: '2024-01-15',
};

export default function BudgetDetailPage({ params }: { params: { id: string } }) {
  const [comment, setComment] = useState('');
  const [action, setAction] = useState('');

  const handleSubmit = () => {
    console.log('Action:', action, 'Comment:', comment);
    // Handle approval logic here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/coordinator/budget"
        className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6"
      >
        ← Back to Budget Approvals
      </Link>

      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Budget Request Details</h1>

      <div className="space-y-6">
        {/* Request Information */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Request Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Request ID</label>
              <p className="text-gray-800 font-medium">{mockBudgetRequest.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Club</label>
              <p className="text-gray-800">{mockBudgetRequest.club}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Amount</label>
              <p className="text-gray-800 font-medium">₹{mockBudgetRequest.amount.toLocaleString()}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Submission Date</label>
              <p className="text-gray-800">{mockBudgetRequest.submissionDate}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600">Purpose</label>
              <p className="text-gray-800">{mockBudgetRequest.purpose}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600">Description</label>
              <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockBudgetRequest.description}</p>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Budget Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Item</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Cost</th>
                </tr>
              </thead>
              <tbody>
                {mockBudgetRequest.breakdown.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-800">{item.item}</td>
                    <td className="py-3 px-4 text-gray-800">₹{item.cost.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold">
                  <td className="py-3 px-4 text-gray-800">Total</td>
                  <td className="py-3 px-4 text-gray-800">₹{mockBudgetRequest.amount.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Take Action</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
              >
                <option value="">Select action</option>
                <option value="approve">Approve</option>
                <option value="reject">Reject</option>
                <option value="send_back">Send Back for Revision</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                placeholder="Add your comments or feedback..."
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!action}
              className="w-full bg-[#004aad] hover:bg-[#003380] disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors font-medium"
            >
              Submit Decision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}