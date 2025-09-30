'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '../../../components/Card';

export default function NewBudgetPage() {
  const [formData, setFormData] = useState({ purpose: '', amount: '', notes: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <Link 
          href="/secretary/budget"
          className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base transition-colors inline-block mb-4"
        >
          ← Back to Requests
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad]">New Budget Request</h1>
      </div>

      <div className="max-w-lg mx-auto">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-[#1e293b] mb-2">Purpose</label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                placeholder="Describe the purpose"
                required
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-[#1e293b] mb-2">Amount (₹)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                placeholder="Enter amount"
                min="0"
                required
              />
            </div>

            <div>
              <label htmlFor="document" className="block text-sm font-medium text-[#1e293b] mb-2">Upload Document</label>
              <input
                type="file"
                id="document"
                name="document"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-[#1e293b] mb-2">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                placeholder="Add justification"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#004aad] hover:bg-[#003380] text-white font-medium rounded-lg px-4 py-2 sm:py-3 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
