'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt:', formData);
    // Handle sign in logic here
    router.push("/choose-role")
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#004aad] mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm">
              Sign in to your CampusLink account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link 
                  href="/auth/forgot-password" 
                  className="text-sm text-[#004aad] hover:text-[#003380] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#004aad] hover:bg-[#003380] text-white py-3 px-4 rounded-lg transition-colors font-medium"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                {"Don't have an account?"}{' '}
                <Link 
                  href="/auth/signup" 
                  className="text-[#004aad] hover:text-[#003380] font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}