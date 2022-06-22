import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  catalogId: null,
  catalog: [],
  loading: false,
  error: null,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchCategoriesRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchCategoriesSuccess: (state, action) => {
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: null,
      };
    },
    fetchItemsRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchItemsSuccess: (state, action) => {
      return {
        ...state,
        catalog: action.payload,
        loading: false,
        error: null,
      };
    },
    fetchSelectedItemsRequest: (state, action) => {
      return {
        ...state,
        catalogId: action.payload,
        loading: true,
        error: null,
      };
    },
    fetchSelectedItemsSuccess: (state, action) => {
      return {
        ...state,
        catalog: action.payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const {
  fetchCategoriesRequest,
  fetchFailure,
  fetchCategoriesSuccess,
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchSelectedItemsRequest,
  fetchSelectedItemsSuccess,
} = catalogSlice.actions;

export default catalogSlice.reducer;
