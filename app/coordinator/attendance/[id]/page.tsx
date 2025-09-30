'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockAttendanceRecord = {
  id: 'ATT-001',
  eventName: 'Tech Workshop - Web Development',
  date: '2024-01-20',
  submittedBy: 'John Doe',
  status: 'Pending',
  totalParticipants: 45,
  eventDescription: 'Full-day workshop covering modern web development technologies including React, Next.js, and TailwindCSS.',
  participants: [
    { name: 'Alice Johnson', rollNo: '2023001', email: 'alice.j@college.edu', present: true },
    { name: 'Bob Smith', rollNo: '2023002', email: 'bob.s@college.edu', present: true },
    { name: 'Carol Davis', rollNo: '2023003', email: 'carol.d@college.edu', present: false },
    { name: 'David Wilson', rollNo: '2023004', email: 'david.w@college.edu', present: true },
    { name: 'Eva Brown', rollNo: '2023005', email: 'eva.b@college.edu', present: true },
    { name: 'Frank Miller', rollNo: '2023006', email: 'frank.m@college.edu', present: true },
    { name: 'Grace Lee', rollNo: '2023007', email: 'grace.l@college.edu', present: false },
    { name: 'Henry Taylor', rollNo: '2023008', email: 'henry.t@college.edu', present: true },
  ],
};

export default function AttendanceReviewPage({ params }: { params: { id: string } }) {
  const [action, setAction] = useState('');
  const [comments, setComments] = useState('');

  const presentCount = mockAttendanceRecord.participants.filter(p => p.present).length;
  const absentCount = mockAttendanceRecord.participants.length - presentCount;
  const attendanceRate = ((presentCount / mockAttendanceRecord.participants.length) * 100).toFixed(1);

  const handleSubmit = () => {
    console.log('Attendance Action:', action, 'Comments:', comments);
    // Handle attendance action logic here
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Link 
        href="/coordinator/attendance"
        className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6"
      >
        ← Back to Attendance Verification
      </Link>

      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Attendance Review</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Information */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Event Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Event Name</label>
                <p className="text-gray-800 font-medium">{mockAttendanceRecord.eventName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <p className="text-gray-800">{mockAttendanceRecord.date}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Submitted By</label>
                <p className="text-gray-800">{mockAttendanceRecord.submittedBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Total Participants</label>
                <p className="text-gray-800">{mockAttendanceRecord.totalParticipants}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Event Description</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockAttendanceRecord.eventDescription}</p>
              </div>
            </div>
          </div>

          {/* Participants List */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Participants List</h2>
              <div className="text-sm text-gray-600">
                {presentCount} Present • {absentCount} Absent • {attendanceRate}% Rate
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Roll No.</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAttendanceRecord.participants.map((participant, index) => (
                    <tr 
                      key={participant.rollNo} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-800">{participant.name}</td>
                      <td className="py-3 px-4 text-gray-600">{participant.rollNo}</td>
                      <td className="py-3 px-4 text-gray-600">{participant.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          participant.present 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {participant.present ? 'Present' : 'Absent'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Verify Attendance</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <select
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                >
                  <option value="">Select action</option>
                  <option value="approve">Approve Attendance</option>
                  <option value="reject">Reject Attendance</option>
                  <option value="request_correction">Request Correction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  placeholder="Add your comments or feedback about this attendance submission..."
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!action}
                className="w-full bg-[#004aad] hover:bg-[#003380] disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors font-medium"
              >
                Submit Verification
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Attendance Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Attendance Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Participants</span>
                <span className="font-bold text-gray-800">{mockAttendanceRecord.participants.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Present</span>
                <span className="font-bold text-green-600">{presentCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Absent</span>
                <span className="font-bold text-red-600">{absentCount}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-gray-600">Attendance Rate</span>
                <span className="font-bold text-[#004aad]">{attendanceRate}%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📊 Download CSV Report
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                🖨️ Print Attendance Sheet
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                📧 Export to PDF
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                👥 Compare with Previous
              </button>
            </div>
          </div>

          {/* Validation Notes */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Validation Checklist</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Total matches expected count</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All participants are valid students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Verify absentees with reasons</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Event date matches submission</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}