'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector, updatePackageStatus, addToast } from '@/store';
import { PackageItem, PackageStatus } from '@/types';
import { Modal, Input, Button } from '@/components/common';

interface UpdateStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: PackageItem;
}

export const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({
  isOpen,
  onClose,
  pkg,
}) => {
  const dispatch = useAppDispatch();
  const updating = useAppSelector((state) => state.packages.updating);

  const [status, setStatus] = useState<PackageStatus>(pkg.status);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !description) return;

    const res = await dispatch(
      updatePackageStatus({
        id: pkg.id,
        status,
        location,
        description,
      })
    );

    if (updatePackageStatus.fulfilled.match(res)) {
      dispatch(
        addToast({
          type: 'success',
          message: `Checkpoint added to ${pkg.trackingNumber}. Status is now ${status.replace('_', ' ')}.`,
        })
      );
      setLocation('');
      setDescription('');
      onClose();
    } else {
      dispatch(
        addToast({
          type: 'error',
          message: 'Failed to update status checkpoint.',
        })
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Update Status: ${pkg.trackingNumber}`}
      footer={
        <div className="flex gap-2 justify-end w-full">
          <Button variant="outline" onClick={onClose} disabled={updating}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} isLoading={updating}>
            Save Checkpoint
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">
            Shipment Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as PackageStatus)}
            className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="in_transit">In Transit</option>
            <option value="delivered">Delivered</option>
            <option value="delayed">Delayed</option>
          </select>
        </div>

        <Input
          label="Checkpoint Location"
          placeholder="e.g. Abuja Sorting Facility"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">
            Description Note
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. Scanned into sorting hub and prepared for dispatch."
            required
            className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </Modal>
  );
};