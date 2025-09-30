'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/coordinator' },
  { name: 'Budget Approvals', href: '/coordinator/budget' },
  { name: 'Attendance', href: '/coordinator/attendance' },
  { name: 'Events', href: '/coordinator/events' },
  { name: 'Inventory', href: '/coordinator/inventory' },
];

export default function CoordinatorSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 p-6">
      <div className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-sm font-medium transition-all rounded-lg ${
                isActive
                  ? 'bg-[#004aad] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}