import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const topSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    fetchTopSalesRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchTopSalesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchTopSalesSuccess: (state, action) => {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const {
  fetchTopSalesRequest,
  fetchTopSalesFailure,
  fetchTopSalesSuccess,
} = topSalesSlice.actions;

export default topSalesSlice.reducer;
