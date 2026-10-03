import React from 'react';
import { useRouter } from 'next/router';

export default function Verification() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 text-center space-y-3">
        <h1 className="text-xl font-bold text-slate-900">Verification</h1>
        <p className="text-sm text-slate-500">Processing: {slug}</p>
      </div>
    </div>
  );
}