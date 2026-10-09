import { createAppSlice } from "@/redux/create-slices";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IGeneral {
  isSidebarOpen: boolean;
  modal: boolean;
}

export const generalSlice = createAppSlice({
  name: "general",
  initialState: {
    isSidebarOpen: false,
    modal: false,
  } as IGeneral,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
  selectors: {
    selectIsSidebarOpen: (general) => general.isSidebarOpen,
    selectModalState: (general) => general.modal,
  },
});

export const { toggleSidebar, setSidebarOpen, setModalState } =
  generalSlice.actions;
export const { selectIsSidebarOpen, selectModalState } =
  generalSlice.selectors;
