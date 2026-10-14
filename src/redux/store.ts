import { configureStore, combineReducers } from '@reduxjs/toolkit';
import generalReducer from '@/slices/general.slice';

const rootReducer = combineReducers({
  general: generalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;