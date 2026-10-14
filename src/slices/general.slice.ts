import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GeneralState {
  isSidebarOpen: boolean;
  themeMode: 'light' | 'dark';
}

const initialState: GeneralState = {
  isSidebarOpen: true,
  themeMode: 'light',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen, setThemeMode } = generalSlice.actions;
export default generalSlice.reducer;