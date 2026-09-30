import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import packagesReducer from './slices/packagesSlice';
import authReducer from './slices/authSlice';
import toastReducer from './slices/toastSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  packages: packagesReducer,
  auth: authReducer,
  toast: toastReducer,
});

export default rootReducer;