import React from 'react';
import Link from 'next/link';

export default function LoginError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 text-center space-y-4">
        <h1 className="text-xl font-bold text-red-600">Authentication Error</h1>
        <p className="text-sm text-slate-500">Unable to authenticate user session.</p>
        <Link
          href="/auth/login"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          Return to Sign In
        </Link>
      </div>
    </div>
  );
}