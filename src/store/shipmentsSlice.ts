import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Shipment {
  id: string;
  trackingId: string;
  destination: string;
  origin: string;
  status: 'In Transit' | 'Delivered' | 'Pending Customs' | 'Delayed';
  estimatedDelivery: string;
}

interface ShipmentsState {
  items: Shipment[];
  filterStatus: string;
}

const initialState: ShipmentsState = {
  items: [
    {
      id: '1',
      trackingId: 'FB-89420',
      destination: 'Abuja Central Warehouse',
      origin: 'Lagos Hub',
      status: 'Delivered',
      estimatedDelivery: '2026-09-23',
    },
    {
      id: '2',
      trackingId: 'FB-89421',
      destination: 'Kano Sorting Facility',
      origin: 'Port Harcourt Hub',
      status: 'In Transit',
      estimatedDelivery: '2026-09-24',
    },
    {
      id: '3',
      trackingId: 'FB-89422',
      destination: 'Enugu Distribution Center',
      origin: 'Lagos Hub',
      status: 'Pending Customs',
      estimatedDelivery: '2026-09-25',
    },
    {
      id: '4',
      trackingId: 'FB-89423',
      destination: 'Ibadan Logistics Depot',
      origin: 'Lagos Hub',
      status: 'In Transit',
      estimatedDelivery: '2026-09-24',
    },
    {
      id: '5',
      trackingId: 'FB-89424',
      destination: 'Kaduna Station',
      origin: 'Abuja Central Warehouse',
      status: 'Delayed',
      estimatedDelivery: '2026-09-26',
    },
  ],
  filterStatus: 'ALL',
};

const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    addShipment: (state, action: PayloadAction<Shipment>) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { setFilterStatus, addShipment } = shipmentsSlice.actions;
export default shipmentsSlice.reducer;