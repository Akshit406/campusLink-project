import Card from '../components/Card';
import Link from 'next/link';

const stats = [
  { label: 'Pending Budgets', value: 5 },
  { label: 'Approved Budgets', value: 12 },
  { label: 'Rejected Budgets', value: 2 },
  { label: 'Funds Released', value: 8 },
];

const quickLinks = [
  { 
    title: 'Submit New Budget Request', 
    subtitle: 'Create and submit budget proposals',
    href: '/secretary/budget/new'
  },
  { 
    title: 'Event Proposals', 
    subtitle: 'Manage event planning and approvals',
    href: '/secretary/events'
  },
  { 
    title: 'Attendance Tracking', 
    subtitle: 'Record and monitor event attendance',
    href: '/secretary/attendance'
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad] mb-6 sm:mb-8">
        Dashboard
      </h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="text-center p-4 sm:p-6"
          >
            <div className="text-2xl sm:text-4xl font-bold text-[#004aad] mb-1 sm:mb-2">
              {stat.value}
            </div>
            <div className="text-sm sm:text-base text-[#64748b] font-medium">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-4 sm:mb-6">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {quickLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <Card className="h-full cursor-pointer p-4 sm:p-6">
              <h3 className="font-bold text-[#1e293b] mb-1 sm:mb-2 text-sm sm:text-base">
                {link.title}
              </h3>
              <p className="text-[#64748b] text-xs sm:text-sm">
                {link.subtitle}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
