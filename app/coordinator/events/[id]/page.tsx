'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockEventProposal = {
  id: 'EVT-001',
  name: 'Annual Cultural Fest 2024',
  date: '2024-02-15',
  venue: 'Main Auditorium',
  organizer: 'Cultural Club',
  status: 'Submitted',
  submittedBy: 'Sarah Wilson',
  submissionDate: '2024-01-18',
  expectedCrowd: 500,
  duration: 6,
  theme: 'Cultural Diversity and Unity',
  description: 'A grand celebration of cultural diversity featuring performances, food stalls, and traditional arts from different regions. The event aims to promote unity and cultural exchange among students from various backgrounds.',
  budget: 75000,
  budgetBreakdown: [
    { item: 'Venue Decoration', cost: 15000 },
    { item: 'Sound System', cost: 20000 },
    { item: 'Food Stalls', cost: 25000 },
    { item: 'Guest Artists', cost: 10000 },
    { item: 'Promotional Materials', cost: 5000 },
  ],
  requirements: [
    'Main Auditorium booking',
    'Sound system with technicians',
    'Food court area setup',
    'Security personnel',
    'Medical support team',
  ],
  supportingDocs: ['event_proposal.pdf', 'budget_breakdown.xlsx', 'venue_layout.png'],
};

export default function EventsReviewPage({ params }: { params: { id: string } }) {
  const [action, setAction] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    console.log('Event Action:', action, 'Comments:', comments);
    // Handle event action logic here
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link 
        href="/coordinator/events"
        className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6"
      >
        ← Back to Event Approvals
      </Link>

      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Event Proposal Review</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Information */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Event Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Event ID</label>
                <p className="text-gray-800 font-medium">{mockEventProposal.id}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Status</label>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  {mockEventProposal.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Event Name</label>
                <p className="text-gray-800 font-medium">{mockEventProposal.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <p className="text-gray-800">{mockEventProposal.date}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Venue</label>
                <p className="text-gray-800">{mockEventProposal.venue}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Organizer</label>
                <p className="text-gray-800">{mockEventProposal.organizer}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Expected Crowd</label>
                <p className="text-gray-800">{mockEventProposal.expectedCrowd} participants</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Duration</label>
                <p className="text-gray-800">{mockEventProposal.duration} hours</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Submitted By</label>
                <p className="text-gray-800">{mockEventProposal.submittedBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Submission Date</label>
                <p className="text-gray-800">{mockEventProposal.submissionDate}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Theme</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventProposal.theme}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Description</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventProposal.description}</p>
              </div>
            </div>
          </div>

          {/* Budget Information */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Budget Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Total Budget</label>
              <p className="text-2xl font-bold text-[#004aad]">₹{mockEventProposal.budget.toLocaleString()}</p>
            </div>
            
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
                  {mockEventProposal.budgetBreakdown.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-800">{item.item}</td>
                      <td className="py-3 px-4 text-gray-800">₹{item.cost.toLocaleString()}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {((item.cost / mockEventProposal.budget) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td className="py-3 px-4 text-gray-800">Total</td>
                    <td className="py-3 px-4 text-gray-800">₹{mockEventProposal.budget.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-800">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Requirements & Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Requirements</h2>
              <div className="space-y-2">
                {mockEventProposal.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#004aad] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Documents */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Supporting Documents</h2>
              <div className="space-y-3">
                {mockEventProposal.supportingDocs.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{doc}</span>
                    <button className="text-[#004aad] hover:text-[#003380] transition-colors font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Review & Decision</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <select
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                >
                  <option value="">Select action</option>
                  <option value="approve_forward">Approve and Forward to Admin</option>
                  <option value="approve_direct">Approve with Conditions</option>
                  <option value="request_changes">Request Changes</option>
                  <option value="reject">Reject Proposal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Review Comments</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  placeholder="Provide your feedback, suggestions, or reasons for the decision..."
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!action}
                className="w-full bg-[#004aad] hover:bg-[#003380] disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors font-medium"
              >
                Submit Review
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
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-800">Submitted</p>
                  <p className="text-sm text-gray-600">{mockEventProposal.submissionDate}</p>
                  <p className="text-sm text-gray-500">By {mockEventProposal.submittedBy}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-800">Coordinator Review</p>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-sm text-gray-500">Pending your decision</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-800">Admin Approval</p>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-sm text-gray-500">After coordinator review</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-800">Final Status</p>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-sm text-gray-500">Awaiting completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📅 Check Venue Availability
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                👥 Contact Organizer
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📊 View Similar Events
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📋 Download Proposal PDF
              </button>
            </div>
          </div>

          {/* Review Checklist */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Review Checklist</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-[#004aad]" />
                <span className="text-gray-700">Budget is reasonable and justified</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-[#004aad]" />
                <span className="text-gray-700">Venue is available and suitable</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-[#004aad]" />
                <span className="text-gray-700">Safety measures are addressed</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-[#004aad]" />
                <span className="text-gray-700">All required documents are attached</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-[#004aad]" />
                <span className="text-gray-700">Event aligns with club objectives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}