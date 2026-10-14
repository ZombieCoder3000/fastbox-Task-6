import { createAppSlice } from "@/redux/create-slices";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IGeneral {
  isSidebarOpen: boolean;
  isMobileNavOpen: boolean;
  modal: boolean;
}

export const generalSlice = createAppSlice({
  name: "general",
  initialState: {
    isSidebarOpen: false,
    isMobileNavOpen: false,
    modal: false,
  } as IGeneral,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    setMobileNavOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileNavOpen = action.payload;
    },
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
  selectors: {
    selectIsSidebarOpen: (general) => general.isSidebarOpen,
    selectIsMobileNavOpen: (general) => general.isMobileNavOpen,
    selectModalState: (general) => general.modal,
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleMobileNav,
  setMobileNavOpen,
  setModalState,
} = generalSlice.actions;
export const { selectIsSidebarOpen, selectIsMobileNavOpen, selectModalState } =
  generalSlice.selectors;
