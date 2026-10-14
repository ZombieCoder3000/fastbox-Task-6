export type PackageStatus = 'in_transit' | 'delivered' | 'pending' | 'delayed';

export interface TrackingCheckpoint {
  id: string;
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

export interface PackageItem {
  id: string;
  trackingNumber: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  status: PackageStatus;
  estimatedDelivery: string;
  history: TrackingCheckpoint[];
}