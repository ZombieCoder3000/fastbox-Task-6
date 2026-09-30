'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector, fetchAllPackages, searchPackageByTracking } from '@/store';
import { Input, Button, Card, Badge } from '@/components/common';
import { MetricsOverview } from '@/components/dashboard/MetricsOverview';
import { CreatePackageModal } from '@/components/dashboard/CreatePackageModal';

export default function DashboardOverviewPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, selectedPackage, loading } = useAppSelector((state) => state.packages);
  const [trackingInput, setTrackingInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAllPackages());
    }
  }, [dispatch, items.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    dispatch(searchPackageByTracking(trackingInput.trim()));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Operations Control</h1>
          <p className="text-sm text-slate-500">Live logistics throughput and package distribution.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => router.push('/dashboard/packages')}>
            Browse Directory
          </Button>
          <Button onClick={() => setIsModalOpen(true)}>
            + Create Shipment
          </Button>
        </div>
      </div>

      <MetricsOverview />

      <Card header={<span className="font-semibold text-slate-900">Direct Tracking Lookup</span>}>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              placeholder="Enter complete tracking ID (e.g. FB-9021-X)..."
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
            />
          </div>
          <Button type="submit" isLoading={loading}>
            Locate Parcel
          </Button>
        </form>

        {selectedPackage && (
          <div className="mt-6 border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">{selectedPackage.trackingNumber}</span>
                <Badge variant={selectedPackage.status === 'delivered' ? 'success' : 'info'}>
                  {selectedPackage.status.replace('_', ' ')}
                </Badge>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Route: {selectedPackage.origin} → {selectedPackage.destination}
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => router.push(`/dashboard/packages/${selectedPackage.id}`)}
            >
              View Full History →
            </Button>
          </div>
        )}
      </Card>

      <CreatePackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
