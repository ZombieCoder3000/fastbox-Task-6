'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector, fetchAllPackages } from '@/store';
import { PackageItem, PackageStatus } from '@/types';
import { Card, Badge, Input, Button, DataTable, Column } from '@/components/common';
import { CreatePackageModal, StatusFilterChips } from '@/components/dashboard';

export default function PackagesListPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.packages);
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllPackages());
  }, [dispatch]);

  const counts = useMemo(() => {
    return {
      all: items.length,
      in_transit: items.filter((p) => p.status === 'in_transit').length,
      delivered: items.filter((p) => p.status === 'delivered').length,
      pending: items.filter((p) => p.status === 'pending').length,
      delayed: items.filter((p) => p.status === 'delayed').length,
    };
  }, [items]);

  const filteredData = useMemo(() => {
    return items.filter((pkg) => {
      const matchesSearch =
        pkg.trackingNumber.toLowerCase().includes(filterText.toLowerCase()) ||
        pkg.sender.toLowerCase().includes(filterText.toLowerCase()) ||
        pkg.recipient.toLowerCase().includes(filterText.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || pkg.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [items, filterText, statusFilter]);

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

  const columns: Column<PackageItem>[] = [
    {
      key: 'trackingNumber',
      header: 'Tracking ID',
      render: (pkg) => (
        <span className="font-semibold text-blue-600 hover:underline">
          {pkg.trackingNumber}
        </span>
      ),
    },
    {
      key: 'route',
      header: 'Route',
      render: (pkg) => (
        <div className="flex flex-col text-xs">
          <span className="text-slate-800 font-medium">{pkg.origin}</span>
          <span className="text-slate-400">→ {pkg.destination}</span>
        </div>
      ),
    },
    {
      key: 'recipient',
      header: 'Recipient',
      render: (pkg) => (
        <div className="flex flex-col text-xs">
          <span className="text-slate-800 font-medium">{pkg.recipient}</span>
          <span className="text-slate-400">From: {pkg.sender}</span>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (pkg) => (
        <Badge variant={getBadgeVariant(pkg.status)}>
          {pkg.status.replace('_', ' ')}
        </Badge>
      ),
    },
    {
      key: 'estimatedDelivery',
      header: 'Est. Delivery',
      render: (pkg) => (
        <span className="text-xs font-mono text-slate-600">
          {pkg.estimatedDelivery}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Shipment Directory</h1>
          <p className="text-sm text-slate-500">
            Monitor, filter, and inspect tracked parcels across transit hubs.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          + New Shipment
        </Button>
      </div>

      <Card>
        <div className="space-y-4 mb-6">
          <Input
            placeholder="Search tracking ID, recipient, or sender..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />

          <StatusFilterChips
            selectedStatus={statusFilter}
            onSelect={setStatusFilter}
            counts={counts}
          />
        </div>

        <DataTable
          columns={columns}
          data={filteredData}
          keyExtractor={(item) => item.id}
          isLoading={loading}
          onRowClick={(pkg) => router.push(`/dashboard/packages/${pkg.id}`)}
          emptyMessage="No shipments found matching criteria."
        />
      </Card>

      <CreatePackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}