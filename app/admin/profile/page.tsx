'use client';

import { useState } from 'react';

const adminData = {
  name: 'Dr. Robert Smith',
  email: 'robert.smith@university.edu',
  department: 'Dean Student Welfare',
  phone: '+1 (555) 987-6543',
  role: 'Administrator',
  joinDate: '2022-01-15',
};

export default function AdminProfilePage() {
  const [formData, setFormData] = useState({
    name: adminData.name,
    email: adminData.email,
    department: adminData.department,
    phone: adminData.phone,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile update:', formData);
    // Handle profile update logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aad] mb-8">Profile Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#004aad] hover:bg-[#003380] text-white py-3 px-6 rounded-lg transition-colors font-medium"
              >
                Update Profile
              </button>
            </form>
          </div>

          {/* Password Change */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="button"
                className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-3 px-6 rounded-lg transition-colors font-medium"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>

        {/* Admin Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Role</span>
                <span className="font-semibold text-[#004aad]">{adminData.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Join Date</span>
                <span className="font-semibold text-[#004aad]">{adminData.joinDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Department</span>
                <span className="font-semibold text-[#004aad]">{adminData.department}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">System Overview</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Clubs</span>
                <span className="font-semibold text-[#004aad]">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Coordinators</span>
                <span className="font-semibold text-[#004aad]">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Approvals</span>
                <span className="font-semibold text-[#004aad]">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Month</span>
                <span className="font-semibold text-[#004aad]">156</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}