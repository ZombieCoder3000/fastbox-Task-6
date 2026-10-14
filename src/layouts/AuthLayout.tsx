'use client';

import React from 'react';
import Link from 'next/link';

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-black tracking-tight text-blue-600">
            FastBox
          </Link>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};