'use client';

import Link from 'next/link';
import { use, useState } from 'react';



const mockBudgetRequest = {
  id: 'BGT-012',
  club: 'Tech Club',
  amount: 45000,
  date: '2024-01-20',
  status: 'DSW Review',
  purpose: 'Tech Symposium 2024',
  description: 'Annual technology symposium featuring guest speakers, workshops, and project demonstrations. Budget covers venue, equipment, and speaker honorariums.',
  breakdown: [
    { item: 'Venue Booking', cost: 15000 },
    { item: 'Guest Speakers', cost: 20000 },
    { item: 'Equipment Rental', cost: 5000 },
    { item: 'Promotional Materials', cost: 3000 },
    { item: 'Refreshments', cost: 2000 },
  ],
  submittedBy: 'John Doe',
  coordinatorComments: 'Budget appears reasonable for the scale of event. All items properly justified.',
  shopComments: 'Pending verification of equipment rental costs.',
};

const approvalTimeline = [
  { stage: 'Secretary', status: 'Completed', date: '2024-01-20', comments: 'Submitted by club secretary' },
  { stage: 'Coordinator', status: 'Completed', date: '2024-01-21', comments: 'Reviewed and forwarded to DSW' },
  { stage: 'DSW', status: 'In Progress', date: '', comments: 'Awaiting DSW approval' },
  { stage: 'Shop', status: 'Pending', date: '', comments: 'Will verify equipment costs' },
  { stage: 'Final Approval', status: 'Pending', date: '', comments: 'Funds release pending' },
];



export default function AdminBudgetDetailPage({ params }: { params: { id: string } }) {
  const { id } = params; 
  const [action, setAction] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    console.log('Budget Action:', action, 'Comments:', comments);
    // Handle budget action logic here
  };

  const getStageStatus = (status: string) => {
    switch (status) {
      case 'Completed':
        return { color: 'bg-green-500', text: 'text-green-600' };
      case 'In Progress':
        return { color: 'bg-yellow-500', text: 'text-yellow-600' };
      case 'Pending':
        return { color: 'bg-gray-300', text: 'text-gray-400' };
      default:
        return { color: 'bg-gray-300', text: 'text-gray-400' };
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link 
        href="/admin/budget"
        className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6"
      >
        ← Back to Budget Requests
      </Link>

      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Budget Request Review - {id}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Request Information */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Request Details</h2>
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
                <p className="text-gray-800">{mockBudgetRequest.date}</p>
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
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBudgetRequest.breakdown.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-800">{item.item}</td>
                      <td className="py-3 px-4 text-gray-800">₹{item.cost.toLocaleString()}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {((item.cost / mockBudgetRequest.amount) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td className="py-3 px-4 text-gray-800">Total</td>
                    <td className="py-3 px-4 text-gray-800">₹{mockBudgetRequest.amount.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-800">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Review Comments</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Coordinator Comments</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockBudgetRequest.coordinatorComments}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Shop Department Comments</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockBudgetRequest.shopComments}</p>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">DSW Decision</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <select
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                >
                  <option value="">Select action</option>
                  <option value="approve_forward">Approve and Forward to Shop</option>
                  <option value="approve_final">Approve and Release Funds</option>
                  <option value="request_changes">Request Changes</option>
                  <option value="reject">Reject Budget</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">DSW Comments</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  placeholder="Provide your decision comments and feedback..."
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

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Approval Timeline */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Approval Timeline</h3>
            <div className="space-y-4">
              {approvalTimeline.map((stage, index) => {
                const stageStatus = getStageStatus(stage.status);
                return (
                  <div key={stage.stage} className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${stageStatus.color}`}></div>
                    <div>
                      <p className="font-medium text-gray-800">{stage.stage}</p>
                      <p className={`text-sm ${stageStatus.text}`}>{stage.status}</p>
                      {stage.date && <p className="text-xs text-gray-500">Date: {stage.date}</p>}
                      <p className="text-xs text-gray-500 mt-1">{stage.comments}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📋 Download Budget PDF
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                👥 Contact Coordinator
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📊 View Similar Budgets
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                💰 Check Fund Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}