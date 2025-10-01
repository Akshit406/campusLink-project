'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockEventRequest = {
  id: 'EVT-008',
  name: 'Annual Cultural Fest',
  date: '2024-02-15',
  venue: 'Main Auditorium',
  organizer: 'Cultural Club',
  status: 'Pending',
  submittedBy: 'Sarah Wilson',
  submissionDate: '2024-01-18',
  expectedCrowd: 500,
  duration: 6,
  theme: 'Cultural Diversity and Unity',
  description: 'A grand celebration of cultural diversity featuring performances, food stalls, and traditional arts from different regions. The event aims to promote unity and cultural exchange among students.',
  coordinatorComments: 'Event proposal is well-structured and aligns with campus diversity initiatives. Recommended for approval.',
  requirements: [
    'Main Auditorium booking',
    'Sound system with technicians',
    'Food court area setup',
    'Security personnel',
    'Medical support team',
  ],
};

export default async function AdminEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [action, setAction] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    console.log('Event Action:', action, 'Comments:', comments);
    // Handle event action logic here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/admin/events"
        className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6"
      >
        ← Back to Event Approvals
      </Link>

      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Event Proposal Review</h1>

      <div className="space-y-6">
        {/* Event Information */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Event Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Event ID</label>
              <p className="text-gray-800 font-medium">{mockEventRequest.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Status</label>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                {mockEventRequest.status}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Event Name</label>
              <p className="text-gray-800 font-medium">{mockEventRequest.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Date</label>
              <p className="text-gray-800">{mockEventRequest.date}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Venue</label>
              <p className="text-gray-800">{mockEventRequest.venue}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Organizer</label>
              <p className="text-gray-800">{mockEventRequest.organizer}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Expected Crowd</label>
              <p className="text-gray-800">{mockEventRequest.expectedCrowd} participants</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Duration</label>
              <p className="text-gray-800">{mockEventRequest.duration} hours</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600">Theme</label>
              <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventRequest.theme}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600">Description</label>
              <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventRequest.description}</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Event Requirements</h2>
          <div className="space-y-2">
            {mockEventRequest.requirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#004aad] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{requirement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinator Comments */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Coordinator Review</h2>
          <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventRequest.coordinatorComments}</p>
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
                <option value="approve">Approve Event</option>
                <option value="approve_conditions">Approve with Conditions</option>
                <option value="request_changes">Request Changes</option>
                <option value="reject">Reject Event</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Comments</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                placeholder="Provide your final decision and any additional instructions..."
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