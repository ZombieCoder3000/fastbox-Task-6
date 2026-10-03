import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <div className="p-6 bg-white border border-slate-200 rounded-xl">
          <p className="text-sm text-slate-600">Operations dashboard.</p>
        </div>
      </div>
    </MainLayout>
  );
}