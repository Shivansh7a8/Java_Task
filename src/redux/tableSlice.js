import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // Holds table data
  filteredData: [], // Holds filtered data
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setData, setFilteredData } = tableSlice.actions;
export default tableSlice.reducer;
