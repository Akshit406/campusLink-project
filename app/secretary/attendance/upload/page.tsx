'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UploadAttendancePage() {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle file upload logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <Link 
          href="/secretary/attendance"
          className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] 
                     rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base 
                     transition-colors inline-block mb-4"
        >
          ← Back to Attendance
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad]">Upload Attendance</h1>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 transition-all hover:shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Event Name Field */}
            <div>
              <label 
                htmlFor="eventName" 
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent 
                           transition-all text-sm sm:text-base"
                placeholder="Enter event name"
                required
              />
            </div>

            {/* Date Field */}
            <div>
              <label 
                htmlFor="date" 
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent 
                           transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* File Upload Field */}
            <div>
              <label 
                htmlFor="attendanceFile" 
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Upload Attendance File
              </label>
              <input
                type="file"
                id="attendanceFile"
                name="attendanceFile"
                accept=".csv,.pdf,.xlsx"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent 
                           transition-all text-sm sm:text-base"
                required
              />
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Supported formats: CSV, PDF, Excel
              </p>
            </div>

            {/* Notes Field */}
            <div>
              <label 
                htmlFor="notes" 
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent 
                           transition-all text-sm sm:text-base"
                placeholder="Add any additional notes or comments about this attendance record"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#004aad] hover:bg-[#003380] text-white font-medium 
                         rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base transition-colors"
            >
              Submit Attendance
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
