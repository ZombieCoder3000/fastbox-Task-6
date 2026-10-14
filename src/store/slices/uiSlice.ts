import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  isSidebarOpen: boolean;
  themeMode: 'light' | 'dark';
}

const initialState: UIState = {
  isSidebarOpen: true,
  themeMode: 'light',
};

export const uiSlice = createSlice({
  name: 'ui',
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

export const { toggleSidebar, setSidebarOpen, setThemeMode } = uiSlice.actions;
export default uiSlice.reducer;