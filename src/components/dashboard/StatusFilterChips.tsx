'use client';

import React from 'react';
import { PackageStatus } from '@/types';

interface StatusFilterChipsProps {
  selectedStatus: string;
  onSelect: (status: string) => void;
  counts: Record<string, number>;
}

export const StatusFilterChips: React.FC<StatusFilterChipsProps> = ({
  selectedStatus,
  onSelect,
  counts,
}) => {
  const filters: { key: string; label: string }[] = [
    { key: 'all', label: 'All Shipments' },
    { key: 'in_transit', label: 'In Transit' },
    { key: 'delivered', label: 'Delivered' },
    { key: 'pending', label: 'Pending' },
    { key: 'delayed', label: 'Delayed' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((f) => {
        const isActive = selectedStatus === f.key;
        const count = counts[f.key] ?? 0;

        return (
          <button
            key={f.key}
            type="button"
            onClick={() => onSelect(f.key)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition ${
              isActive
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>{f.label}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                isActive ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};