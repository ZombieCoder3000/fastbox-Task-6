import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useAppDispatch, useAppSelector } from './hooks';
export { toggleSidebar, setSidebarOpen } from './slices/uiSlice';
export {
  fetchAllPackages,
  searchPackageByTracking,
  createNewPackage,
  updatePackageStatus,
  setSearchQuery,
  clearSelectedPackage,
  setSelectedPackage,
} from './slices/packagesSlice';
export { loginUser, registerUser, logout } from './slices/authSlice';
export { addToast, removeToast } from './slices/toastSlice';