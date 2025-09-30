'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp);
  };

  const handleResendOTP = () => {
    console.log('Resending OTP');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 transition-all hover:shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#004aad] mb-2">
            Verify OTP
          </h1>
          <p className="text-[#64748b]">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-[#1e293b] mb-2">
              Verification Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-4 py-3 text-center text-xl tracking-widest border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
              placeholder="123456"
              maxLength={6}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#004aad] hover:bg-[#003380] text-white font-medium rounded-lg px-4 py-3 transition-colors"
          >
            Verify
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={handleResendOTP}
              className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] font-medium rounded-lg px-4 py-2 transition-colors"
            >
              Resend OTP
            </button>
          </div>

          <div className="text-center">
            <Link 
              href="/auth" 
              className="text-[#004aad] hover:text-[#003380] text-sm transition-colors"
            >
              ← Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}