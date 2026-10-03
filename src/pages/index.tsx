import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">FastBox Admin</h1>
        <p className="text-slate-500 text-sm">Foundation setup initialized.</p>
      </div>
    </MainLayout>
  );
}