import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  catalogId: null,
  catalog: [],
  offset: 6,
  search: '',
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
        catalog: [],
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

    selectCatalogId: (state, action) => {
      return {
        ...state,
        catalogId: action.payload,
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

    fetchLoadMoreRequest: (state, action) => {
      return {
        ...state,
        offset: action.payload + 6,
        loading: true,
        error: null,
      };
    },

    fetchLoadMoreSuccess: (state, action) => {
      if (action.payload.length < 6) {
        return {
          ...state,
          offset: null,
          catalog: state.catalog.concat(action.payload),
          loading: false,
          error: null,
        };
      }

      return {
        ...state,
        catalog: state.catalog.concat(action.payload),
        loading: false,
        error: null,
      };
    },

    fetchLoadMoreSelectedRequest: (state, action) => {},

    changeSearchField: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },

    searchProductsRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    searchProductsSuccess: (state, action) => {
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
  selectCatalogId,
  fetchSelectedItemsRequest,
  fetchSelectedItemsSuccess,
  fetchLoadMoreRequest,
  fetchLoadMoreSuccess,
  changeSearchField,
  searchProductsRequest,
  searchProductsSuccess,
} = catalogSlice.actions;

export default catalogSlice.reducer;
