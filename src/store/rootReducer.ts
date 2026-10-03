import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;