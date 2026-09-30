'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector, fetchAllPackages, setSelectedPackage } from '@/store';
import { PackageStatus } from '@/types';
import { Card, Badge, Button } from '@/components/common';
import { UpdateStatusModal } from '@/components/dashboard/UpdateStatusModal';

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const id = params?.id as string;

  const { items, selectedPackage, loading } = useAppSelector((state) => state.packages);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAllPackages());
    }
  }, [dispatch, items.length]);

  useEffect(() => {
    if (items.length > 0 && id) {
      const match = items.find((item) => item.id === id || item.trackingNumber === id);
      if (match) {
        dispatch(setSelectedPackage(match));
      }
    }
  }, [items, id, dispatch]);

  const getBadgeVariant = (status: PackageStatus) => {
    switch (status) {
      case 'delivered':
        return 'success';
      case 'in_transit':
        return 'info';
      case 'pending':
        return 'warning';
      case 'delayed':
        return 'danger';
      default:
        return 'default';
    }
  };

  if (loading && !selectedPackage) {
    return (
      <div className="py-12 text-center text-slate-500 text-sm">
        Loading package shipment details...
      </div>
    );
  }

  if (!selectedPackage) {
    return (
      <Card>
        <div className="text-center py-8 space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Shipment Not Located</h2>
          <p className="text-sm text-slate-500">No shipment matches the given identifier.</p>
          <Button variant="outline" onClick={() => router.push('/dashboard/packages')}>
            Back to Directory
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/packages" className="text-xs text-blue-600 hover:underline">
            ← Back to Directory
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span>{selectedPackage.trackingNumber}</span>
            <Badge variant={getBadgeVariant(selectedPackage.status)}>
              {selectedPackage.status.replace('_', ' ')}
            </Badge>
          </h1>
        </div>
        <Button onClick={() => setIsUpdateModalOpen(true)}>
          Update Status / Checkpoint
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card header={<span className="font-semibold text-slate-900">Shipment Route</span>}>
          <div className="space-y-4 text-sm">
            <div>
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">Origin</span>
              <p className="text-slate-800 font-medium mt-0.5">{selectedPackage.origin}</p>
              <p className="text-xs text-slate-500">Shipper: {selectedPackage.sender}</p>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">Destination</span>
              <p className="text-slate-800 font-medium mt-0.5">{selectedPackage.destination}</p>
              <p className="text-xs text-slate-500">Recipient: {selectedPackage.recipient}</p>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">Estimated Delivery</span>
              <p className="text-slate-800 font-medium mt-0.5">{selectedPackage.estimatedDelivery}</p>
            </div>
          </div>
        </Card>

        <Card header={<span className="font-semibold text-slate-900">Activity Log</span>}>
          <div className="flow-root">
            <ul className="-mb-8">
              {selectedPackage.history.map((cp, idx) => (
                <li key={cp.id}>
                  <div className="relative pb-8">
                    {idx !== selectedPackage.history.length - 1 && (
                      <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-slate-200" aria-hidden="true" />
                    )}
                    <div className="relative flex space-x-3 items-start">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center ring-4 ring-white text-blue-600 text-xs font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{cp.status}</p>
                          <p className="text-xs text-slate-600">{cp.location}</p>
                          <p className="text-xs text-slate-500 mt-1">{cp.description}</p>
                        </div>
                        <div className="text-right text-xs whitespace-nowrap text-slate-400 font-mono">
                          {cp.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <UpdateStatusModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        pkg={selectedPackage}
      />
    </div>
  );
}