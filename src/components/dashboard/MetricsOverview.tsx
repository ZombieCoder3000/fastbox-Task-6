'use client';

import React, { useMemo } from 'react';
import { useAppSelector } from '@/store';
import { Card } from '@/components/common';

export const MetricsOverview: React.FC = () => {
  const items = useAppSelector((state) => state.packages.items);

  const stats = useMemo(() => {
    const total = items.length;
    const inTransit = items.filter((p) => p.status === 'in_transit').length;
    const delivered = items.filter((p) => p.status === 'delivered').length;
    const pending = items.filter((p) => p.status === 'pending').length;

    return [
      { label: 'Total Shipments', value: total, color: 'text-slate-900', border: 'border-slate-200' },
      { label: 'In Transit', value: inTransit, color: 'text-blue-600', border: 'border-blue-100' },
      { label: 'Delivered', value: delivered, color: 'text-emerald-600', border: 'border-emerald-100' },
      { label: 'Pending Processing', value: pending, color: 'text-amber-600', border: 'border-amber-100' },
    ];
  }, [items]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((metric) => (
        <Card key={metric.label} className={`p-4 border ${metric.border}`}>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              {metric.label}
            </span>
            <span className={`text-2xl font-black mt-2 ${metric.color}`}>
              {metric.value}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};
