import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 space-y-4">
        <h1 className="text-xl font-bold text-slate-900">Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              placeholder="admin@fastbox.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}