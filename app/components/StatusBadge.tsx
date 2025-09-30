// components/StatusBadge.tsx
interface StatusBadgeProps {
  status: 'available' | 'low-stock' | 'out-of-stock';
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusConfig = {
    available: {
      color: 'bg-green-100 text-green-800 border-green-200',
      text: 'Available'
    },
    'low-stock': {
      color: 'bg-red-100 text-red-800 border-red-200',
      text: 'Low Stock'
    },
    'out-of-stock': {
      color: 'bg-gray-100 text-gray-800 border-gray-200',
      text: 'Out of Stock'
    }
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}>
      {config.text}
    </span>
  );
};