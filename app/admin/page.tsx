'use client';

import Link from 'next/link';
import { useState } from 'react';

const stats = [
  { label: 'Pending Budgets', value: 12, href: '/admin/budget', icon: '💰' },
  { label: 'Event Requests', value: 8, href: '/admin/events', icon: '📅' },
  { label: 'Attendance Records', value: 15, href: '/admin/attendance', icon: '✅' },
  { label: 'Inventory Requests', value: 5, href: '/admin/inventory', icon: '📦' },
];

const approvalStages = [
  { stage: 'Secretary', status: 'Completed', description: 'Request submitted' },
  { stage: 'Coordinator', status: 'Completed', description: 'Reviewed and forwarded' },
  { stage: 'DSW', status: 'In Progress', description: 'Awaiting your approval' },
  { stage: 'Shop', status: 'Pending', description: 'Verification required' },
  { stage: 'Final Approval', status: 'Pending', description: 'Release funds' },
];

const pendingItems = {
  budgets: [
    { id: 'BGT-012', name: 'Tech Symposium', club: 'Tech Club', date: '2024-01-20', status: 'DSW Review' },
    { id: 'BGT-011', name: 'Cultural Fest', club: 'Cultural Club', date: '2024-01-19', status: 'Shop Verification' },
    { id: 'BGT-010', name: 'Sports Equipment', club: 'Sports Club', date: '2024-01-18', status: 'DSW Review' },
  ],
  events: [
    { id: 'EVT-008', name: 'Annual Cultural Fest', club: 'Cultural Club', date: '2024-01-20', status: 'Pending' },
    { id: 'EVT-007', name: 'Tech Workshop', club: 'Tech Club', date: '2024-01-19', status: 'Pending' },
  ],
  attendance: [
    { id: 'ATT-015', name: 'Sports Tournament', club: 'Sports Club', date: '2024-01-20', status: 'Pending' },
    { id: 'ATT-014', name: 'Science Exhibition', club: 'Science Club', date: '2024-01-19', status: 'Pending' },
  ],
};

const recentNotifications = [
  { id: 1, message: 'Cultural Fest budget forwarded by Coordinator', time: '2h ago', type: 'budget' },
  { id: 2, message: 'Tech Symposium event requires final approval', time: '4h ago', type: 'event' },
  { id: 3, message: 'Sports equipment request needs Shop verification', time: '1d ago', type: 'inventory' },
  { id: 4, message: 'New attendance records submitted for review', time: '1d ago', type: 'attendance' },
];

const requestDistribution = [
  { name: 'Budgets', value: 35, color: '#004aad' },
  { name: 'Events', value: 25, color: '#10b981' },
  { name: 'Attendance', value: 30, color: '#f59e0b' },
  { name: 'Inventory', value: 10, color: '#8b5cf6' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('budgets');

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'DSW Review':
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      case 'Shop Verification':
        return `${baseClasses} bg-blue-100 text-blue-700`;
      case 'Pending':
        return `${baseClasses} bg-gray-100 text-gray-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  const getStageStatus = (status: string) => {
    switch (status) {
      case 'Completed':
        return { color: 'bg-green-500', icon: '✅' };
      case 'In Progress':
        return { color: 'bg-yellow-500', icon: '⏳' };
      case 'Pending':
        return { color: 'bg-gray-300', icon: '⚪' };
      default:
        return { color: 'bg-gray-300', icon: '⚪' };
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#004aad] mb-2">
          Welcome, Admin 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Here's what's happening across CampusLink today.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-[#004aad] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Approval Timeline & Pending Items */}
        <div className="lg:col-span-2 space-y-8">
          {/* Approval Timeline */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Budget Approval Timeline</h2>
            <div className="space-y-4">
              {approvalStages.map((stage, index) => {
                const stageStatus = getStageStatus(stage.status);
                return (
                  <div key={stage.stage} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${stageStatus.color} text-white text-sm`}>
                      {stageStatus.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-gray-800">{stage.stage}</h3>
                        <span className={`text-xs font-medium ${
                          stage.status === 'Completed' ? 'text-green-600' :
                          stage.status === 'In Progress' ? 'text-yellow-600' : 'text-gray-400'
                        }`}>
                          {stage.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{stage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Next Action Needed:</strong> Review and approve pending DSW requests
              </p>
            </div>
          </div>

          {/* Pending Items Table */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Pending Approvals</h2>
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                {['budgets', 'events', 'attendance'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                      activeTab === tab
                        ? 'bg-[#004aad] text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Item</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Club</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingItems[activeTab as keyof typeof pendingItems].map((item, index) => (
                    <tr 
                      key={item.id} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-800 font-medium">{item.name}</td>
                      <td className="py-3 px-4 text-gray-600">{item.club}</td>
                      <td className="py-3 px-4 text-gray-600">{item.date}</td>
                      <td className="py-3 px-4">
                        <span className={getStatusBadge(item.status)}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Link 
                          href={`/admin/${activeTab.slice(0, -1)}/${item.id}`}
                          className="text-[#004aad] hover:text-[#003380] transition-colors font-medium"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {pendingItems[activeTab as keyof typeof pendingItems].map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <span className={getStatusBadge(item.status)}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Club: {item.club}</div>
                    <div>Date: {item.date}</div>
                  </div>
                  <Link 
                    href={`/admin/${activeTab.slice(0, -1)}/${item.id}`}
                    className="inline-block mt-2 text-[#004aad] hover:text-[#003380] font-medium"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Notifications & Analytics */}
        <div className="space-y-8">
          {/* Notifications Panel */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Updates</h2>
            <div className="space-y-4">
              {recentNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 mt-2 rounded-full ${
                    notification.type === 'budget' ? 'bg-blue-500' :
                    notification.type === 'event' ? 'bg-green-500' :
                    notification.type === 'attendance' ? 'bg-yellow-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm">{notification.message}</p>
                    <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              href="/admin/notifications"
              className="block text-center mt-4 text-[#004aad] hover:text-[#003380] font-medium"
            >
              View All Notifications
            </Link>
          </div>

          {/* Request Distribution Chart */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Request Distribution</h2>
            <div className="space-y-3">
              {requestDistribution.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-8">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Approvals */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Approvals</h2>
            <div className="space-y-3">
              {[
                { day: 'Mon', count: 12 },
                { day: 'Tue', count: 18 },
                { day: 'Wed', count: 15 },
                { day: 'Thu', count: 22 },
                { day: 'Fri', count: 8 },
              ].map((day) => (
                <div key={day.day} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{day.day}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-[#004aad]" 
                        style={{ width: `${(day.count / 25) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-4">{day.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#004aad] mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/admin/budget"
            className="bg-[#004aad] hover:bg-[#003380] text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors text-center"
          >
            Review Budgets
          </Link>
          <Link 
            href="/admin/events"
            className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-4 px-6 rounded-xl font-semibold text-lg transition-colors text-center"
          >
            Review Events
          </Link>
          <Link 
            href="/admin/inventory"
            className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] py-4 px-6 rounded-xl font-semibold text-lg transition-colors text-center"
          >
            Review Inventory
          </Link>
        </div>
      </div>
    </div>
  );
}