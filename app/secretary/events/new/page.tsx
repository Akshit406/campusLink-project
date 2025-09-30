'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    duration: '',
    venue: '',
    expectedCrowd: '',
    theme: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/secretary/events"
          className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-4 py-2 transition-colors inline-block mb-4"
        >
          ← Back to Events
        </Link>
        <h1 className="text-3xl font-bold text-[#004aad]">Create New Event</h1>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div>
              <label htmlFor="eventName" className="block text-sm font-medium text-gray-800 mb-2">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter event name"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-800 mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-800 mb-2">
                Duration (hours)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter duration in hours"
                min="1"
                required
              />
            </div>

            {/* Venue */}
            <div>
              <label htmlFor="venue" className="block text-sm font-medium text-gray-800 mb-2">
                Venue
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter venue"
                required
              />
            </div>

            {/* Expected Crowd */}
            <div>
              <label htmlFor="expectedCrowd" className="block text-sm font-medium text-gray-800 mb-2">
                Expected Crowd Size
              </label>
              <input
                type="number"
                id="expectedCrowd"
                name="expectedCrowd"
                value={formData.expectedCrowd}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter expected number of participants"
                min="1"
                required
              />
            </div>

            {/* Theme */}
            <div>
              <label htmlFor="theme" className="block text-sm font-medium text-gray-800 mb-2">
                Theme
              </label>
              <input
                type="text"
                id="theme"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter event theme"
              />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-800 mb-2">
                Description / Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Provide detailed description of the event"
              />
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="files" className="block text-sm font-medium text-gray-800 mb-2">
                Supporting Documents (Optional)
              </label>
              <input
                type="file"
                id="files"
                name="files"
                multiple
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
              />
              <p className="text-sm text-gray-600 mt-1">Upload any supporting documents or images</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#004aad] hover:bg-[#003380] text-white font-medium rounded-lg px-4 py-3 transition-colors"
            >
              Submit Event Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}