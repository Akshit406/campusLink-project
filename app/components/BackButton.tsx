// components/BackButton.tsx
'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  return (
    <Link 
      href="/inventory"
      className="inline-flex items-center text-[#004aad] hover:text-[#003380] font-medium mb-6 transition-colors"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Inventory
    </Link>
  );
};