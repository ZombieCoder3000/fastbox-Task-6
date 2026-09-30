import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { PackageItem } from '@/types';
import { packageApi, CreatePackagePayload, UpdateStatusPayload } from '@/services/api';

interface PackagesState {
  items: PackageItem[];
  selectedPackage: PackageItem | null;
  loading: boolean;
  creating: boolean;
  updating: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: PackagesState = {
  items: [],
  selectedPackage: null,
  loading: false,
  creating: false,
  updating: false,
  error: null,
  searchQuery: '',
};

export const fetchAllPackages = createAsyncThunk(
  'packages/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await packageApi.fetchPackages();
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : 'Failed to fetch packages');
    }
  }
);

export const searchPackageByTracking = createAsyncThunk(
  'packages/searchByTracking',
  async (trackingNumber: string, { rejectWithValue }) => {
    try {
      const result = await packageApi.trackPackage(trackingNumber);
      if (!result) {
        return rejectWithValue('Package not found with this tracking number.');
      }
      return result;
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : 'Error locating package');
    }
  }
);

export const createNewPackage = createAsyncThunk(
  'packages/create',
  async (payload: CreatePackagePayload, { rejectWithValue }) => {
    try {
      return await packageApi.createPackage(payload);
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : 'Failed to create package');
    }
  }
);

export const updatePackageStatus = createAsyncThunk(
  'packages/updateStatus',
  async (payload: UpdateStatusPayload, { rejectWithValue }) => {
    try {
      return await packageApi.updatePackageStatus(payload);
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : 'Failed to update package');
    }
  }
);

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearSelectedPackage: (state) => {
      state.selectedPackage = null;
    },
    setSelectedPackage: (state, action: PayloadAction<PackageItem>) => {
      state.selectedPackage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPackages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPackages.fulfilled, (state, action: PayloadAction<PackageItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(searchPackageByTracking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPackageByTracking.fulfilled, (state, action: PayloadAction<PackageItem>) => {
        state.loading = false;
        state.selectedPackage = action.payload;
      })
      .addCase(searchPackageByTracking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.selectedPackage = null;
      })
      .addCase(createNewPackage.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(createNewPackage.fulfilled, (state, action: PayloadAction<PackageItem>) => {
        state.creating = false;
        state.items.unshift(action.payload);
      })
      .addCase(createNewPackage.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload as string;
      })
      .addCase(updatePackageStatus.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updatePackageStatus.fulfilled, (state, action: PayloadAction<PackageItem>) => {
        state.updating = false;
        state.selectedPackage = action.payload;
        const idx = state.items.findIndex((item) => item.id === action.payload.id);
        if (idx !== -1) {
          state.items[idx] = action.payload;
        }
      })
      .addCase(updatePackageStatus.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, clearSelectedPackage, setSelectedPackage } = packagesSlice.actions;
export default packagesSlice.reducer;