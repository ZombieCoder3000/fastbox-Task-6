import { PackageItem, PackageStatus } from '@/types';

let MOCK_PACKAGES: PackageItem[] = [
  {
    id: 'pkg-1',
    trackingNumber: 'FB-9021-X',
    sender: 'Lagos Logistics Hub',
    recipient: 'Adama Ventures',
    origin: 'Lagos, Nigeria',
    destination: 'Yola, Adamawa, Nigeria',
    status: 'in_transit',
    estimatedDelivery: '2026-10-02',
    history: [
      {
        id: 'cp-1',
        status: 'Departed Facility',
        location: 'Lagos Logistics Hub',
        timestamp: '2026-09-29 08:30',
        description: 'Package departed originating sort facility.',
      },
      {
        id: 'cp-2',
        status: 'In Transit',
        location: 'Abuja Sorting Center',
        timestamp: '2026-09-30 14:15',
        description: 'Scanned at regional interchange.',
      },
    ],
  },
  {
    id: 'pkg-2',
    trackingNumber: 'FB-4412-B',
    sender: 'Kano Textile Co.',
    recipient: 'Faro Bottling Supplies',
    origin: 'Kano, Nigeria',
    destination: 'Jimeta, Adamawa, Nigeria',
    status: 'delivered',
    estimatedDelivery: '2026-09-28',
    history: [
      {
        id: 'cp-3',
        status: 'Delivered',
        location: 'Jimeta, Adamawa',
        timestamp: '2026-09-28 11:45',
        description: 'Delivered and signed by front desk.',
      },
    ],
  },
  {
    id: 'pkg-3',
    trackingNumber: 'FB-7731-C',
    sender: 'Ibadan Parts Depot',
    recipient: 'Modibbo Agro',
    origin: 'Ibadan, Nigeria',
    destination: 'Yola, Adamawa, Nigeria',
    status: 'pending',
    estimatedDelivery: '2026-10-05',
    history: [
      {
        id: 'cp-4',
        status: 'Label Created',
        location: 'Ibadan Parts Depot',
        timestamp: '2026-09-30 09:00',
        description: 'Shipping label created; awaiting pickup.',
      },
    ],
  },
];

export interface CreatePackagePayload {
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
}

export interface UpdateStatusPayload {
  id: string;
  status: PackageStatus;
  location: string;
  description: string;
}

export const packageApi = {
  async fetchPackages(): Promise<PackageItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [...MOCK_PACKAGES];
  },

  async trackPackage(trackingNumber: string): Promise<PackageItem | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const found = MOCK_PACKAGES.find(
      (pkg) => pkg.trackingNumber.toLowerCase() === trackingNumber.trim().toLowerCase()
    );
    return found ? { ...found } : null;
  },

  async createPackage(payload: CreatePackagePayload): Promise<PackageItem> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const trackingNumber = `FB-${randomCode}-N`;
    const newPackage: PackageItem = {
      id: `pkg-${Date.now()}`,
      trackingNumber,
      sender: payload.sender,
      recipient: payload.recipient,
      origin: payload.origin,
      destination: payload.destination,
      status: 'pending',
      estimatedDelivery: payload.estimatedDelivery,
      history: [
        {
          id: `cp-${Date.now()}`,
          status: 'Shipment Created',
          location: payload.origin,
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
          description: 'Shipment registered in FastBox tracking network.',
        },
      ],
    };
    MOCK_PACKAGES = [newPackage, ...MOCK_PACKAGES];
    return newPackage;
  },

  async updatePackageStatus(payload: UpdateStatusPayload): Promise<PackageItem> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const target = MOCK_PACKAGES.find((pkg) => pkg.id === payload.id);
    if (!target) {
      throw new Error('Package not found');
    }

    target.status = payload.status;
    target.history.unshift({
      id: `cp-${Date.now()}`,
      status: payload.status.replace('_', ' ').toUpperCase(),
      location: payload.location,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      description: payload.description,
    });

    return { ...target };
  },
};