'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector, createNewPackage, addToast } from '@/store';
import { Modal, Input, Button } from '@/components/common';

interface CreatePackageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePackageModal: React.FC<CreatePackageModalProps> = ({
  isOpen,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const creating = useAppSelector((state) => state.packages.creating);

  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sender || !recipient || !origin || !destination || !estimatedDelivery) {
      return;
    }

    const res = await dispatch(
      createNewPackage({
        sender,
        recipient,
        origin,
        destination,
        estimatedDelivery,
      })
    );

    if (createNewPackage.fulfilled.match(res)) {
      dispatch(
        addToast({
          type: 'success',
          message: `Package ${res.payload.trackingNumber} registered successfully!`,
        })
      );
      setSender('');
      setRecipient('');
      setOrigin('');
      setDestination('');
      setEstimatedDelivery('');
      onClose();
    } else {
      dispatch(
        addToast({
          type: 'error',
          message: 'Failed to register package.',
        })
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Shipment"
      footer={
        <div className="flex gap-2 justify-end w-full">
          <Button variant="outline" onClick={onClose} disabled={creating}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} isLoading={creating}>
            Register Package
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <Input
          label="Sender / Facility"
          placeholder="e.g. Lagos Hub"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          required
        />
        <Input
          label="Recipient"
          placeholder="e.g. Adama Beverages"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Origin City"
            placeholder="e.g. Lagos, Nigeria"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
          <Input
            label="Destination City"
            placeholder="e.g. Yola, Nigeria"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <Input
          label="Estimated Delivery Date"
          type="date"
          value={estimatedDelivery}
          onChange={(e) => setEstimatedDelivery(e.target.value)}
          required
        />
      </form>
    </Modal>
  );
};