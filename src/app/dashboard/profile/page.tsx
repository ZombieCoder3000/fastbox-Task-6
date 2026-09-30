'use client';

import React from 'react';
import { useAppSelector } from '@/store';
import { Card, Badge } from '@/components/common';

export default function ProfilePage() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated || !user) {
    return (
      <Card>
        <div className="text-center py-8">
          <p className="text-slate-600 text-sm">No active user session detected.</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Account</h1>
        <p className="text-sm text-slate-500">
          Account credentials and role permissions for FastBox operations.
        </p>
      </div>

      <Card header={<span className="font-semibold text-slate-900">Profile Details</span>}>
        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Full Name
              </span>
              <p className="text-slate-900 font-semibold mt-1">{user.name}</p>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Email Address
              </span>
              <p className="text-slate-900 font-semibold mt-1">{user.email}</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
              Assigned Role
            </span>
            <div className="mt-1.5">
              <Badge variant="info">{user.role}</Badge>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
              Account ID
            </span>
            <p className="text-xs font-mono text-slate-600 mt-1">{user.id}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}