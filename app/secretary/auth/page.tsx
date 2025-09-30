'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending OTP to:', email);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 transition-all hover:shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#004aad] mb-2">
            CampusLink Login
          </h1>
          <p className="text-[#64748b]">
            Enter your college email to receive a verification code
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1e293b] mb-2">
              College Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
              placeholder="your.email@college.edu"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#004aad] hover:bg-[#003380] text-white font-medium rounded-lg px-4 py-3 transition-colors"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}