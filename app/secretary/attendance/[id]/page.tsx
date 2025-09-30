'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockAttendanceDetail = {
  id: 'ATT-002',
  eventName: 'Tech Workshop - Web Development',
  date: '2024-01-18',
  submittedBy: 'Sarah Wilson',
  status: 'Pending',
  notes: 'Full-day workshop covering modern web development technologies including React, Next.js, and TailwindCSS.',
  fileName: 'attendance_tech_workshop_2024.csv',
  participants: [
    { name: 'Alice Johnson', rollNo: '2023001', email: 'alice.j@college.edu', present: true },
    { name: 'Bob Smith', rollNo: '2023002', email: 'bob.s@college.edu', present: true },
    { name: 'Carol Davis', rollNo: '2023003', email: 'carol.d@college.edu', present: false },
    { name: 'David Wilson', rollNo: '2023004', email: 'david.w@college.edu', present: true },
    { name: 'Eva Brown', rollNo: '2023005', email: 'eva.b@college.edu', present: true },
  ],
};

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium';
  switch (status) {
    case 'Verified':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

export default function AttendanceDetailPage({ params }: { params: { id: string } }) {
  const [currentStatus, setCurrentStatus] = useState(mockAttendanceDetail.status);

  const handleVerify = () => {
    setCurrentStatus('Verified');
    console.log('Marked as verified');
  };

  const presentCount = mockAttendanceDetail.participants.filter(p => p.present).length;
  const absentCount = mockAttendanceDetail.participants.length - presentCount;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <Link 
          href="/secretary/attendance"
          className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base transition-colors inline-block mb-4"
        >
          ← Back to Attendance
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad]">Attendance Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 transition-all hover:shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Event Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
              <div>
                <label className="block text-sm font-medium text-gray-600">Event Name</label>
                <p className="text-gray-800 font-medium">{mockAttendanceDetail.eventName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <p className="text-gray-800">{mockAttendanceDetail.date}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Submitted By</label>
                <p className="text-gray-800">{mockAttendanceDetail.submittedBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Status</label>
                <span className={getStatusBadge(currentStatus)}>
                  {currentStatus}
                </span>
              </div>
            </div>

            {/* Notes Section */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Notes</label>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <p className="text-gray-800">{mockAttendanceDetail.notes}</p>
              </div>
            </div>

            {/* File Section */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Uploaded File</label>
              <p className="text-[#004aad] cursor-pointer hover:text-[#003380] transition-colors font-medium break-all">
                {mockAttendanceDetail.fileName}
              </p>
            </div>

            {/* Verify Button */}
            {currentStatus === 'Pending' && (
              <div className="mt-6">
                <button
                  onClick={handleVerify}
                  className="w-full sm:w-auto bg-[#004aad] hover:bg-[#003380] text-white rounded-lg px-4 sm:px-6 py-2 transition-colors text-sm sm:text-base"
                >
                  Mark as Verified
                </button>
              </div>
            )}
          </div>

          {/* Participants Table */}
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 transition-all hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Participants</h2>
              <div className="text-xs sm:text-sm text-gray-600">
                {presentCount} Present • {absentCount} Absent
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Name</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Roll No.</th>
                    <th className="hidden sm:table-cell text-left py-2 sm:py-3 px-2 sm:px-4">Email</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Present</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAttendanceDetail.participants.map((participant, index) => (
                    <tr 
                      key={participant.rollNo} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-800">{participant.name}</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-600">{participant.rollNo}</td>
                      <td className="hidden sm:table-cell py-2 sm:py-3 px-2 sm:px-4 text-gray-600">{participant.email}</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          participant.present 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {participant.present ? 'Yes' : 'No'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 transition-all hover:shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Attendance Summary</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Participants</span>
                <span className="font-bold text-gray-800">{mockAttendanceDetail.participants.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Present</span>
                <span className="font-bold text-green-600">{presentCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Absent</span>
                <span className="font-bold text-red-600">{absentCount}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-600">Attendance Rate</span>
                <span className="font-bold text-[#004aad]">
                  {((presentCount / mockAttendanceDetail.participants.length) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 transition-all hover:shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2 text-sm sm:text-base">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Download CSV
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Print Report
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Export to PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
