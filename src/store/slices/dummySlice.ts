import { createSlice } from '@reduxjs/toolkit';

export const dummySlice = createSlice({
  name: 'dummy',
  initialState: { initialized: true },
  reducers: {},
});

export default dummySlice.reducer;