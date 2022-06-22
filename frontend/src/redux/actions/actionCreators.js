import {
  FETCH_ALL_ITEMS_FAILURE,
  FETCH_ALL_ITEMS_REQUEST,
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_SELECTED_CATEGORY_ITEMS_FAILURE,
  FETCH_SELECTED_ITEMS_REQUEST,
  FETCH_SELECTED_CATEGORY_ITEMS_SUCCESS,
  FETCH_TOP_SALES_FAILURE,
  FETCH_TOP_SALES_REQUEST,
  FETCH_TOP_SALES_SUCCESS,
  FETCH_LOAD_MORE_ITEMS_REQUEST,
} from './actionTypes';

export const fetchTopSalesRequest = () => ({
  type: FETCH_TOP_SALES_REQUEST,
});

export const fetchTopSalesFailure = (error) => ({
  type: FETCH_TOP_SALES_FAILURE,
  payload: {
    error,
  },
});

export const fetchTopSalesSuccess = (items) => ({
  type: FETCH_TOP_SALES_SUCCESS,
  payload: {
    items,
  },
});

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: {
    error,
  },
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});

export const fetchAllItemsRequest = () => ({
  type: FETCH_ALL_ITEMS_REQUEST,
});

// export const fetchAllItemsFailure = (error) => ({
//   type: FETCH_ALL_ITEMS_FAILURE,
//   payload: {
//     error,
//   },
// });

export const fetchAllItemsSuccess = (catalog) => ({
  type: FETCH_ALL_ITEMS_SUCCESS,
  payload: {
    catalog,
  },
});

export const fetchSelectedCategoryItemsRequest = (id) => ({
  type: FETCH_SELECTED_ITEMS_REQUEST,
  payload: {
    id,
  },
});

// export const fetchSelectedCategoryItemsFailure = (error) => ({
//   type: FETCH_SELECTED_CATEGORY_ITEMS_FAILURE,
//   payload: {
//     error,
//   },
// });

export const fetchSelectedCategoryItemsSuccess = (catalog) => ({
  type: FETCH_SELECTED_CATEGORY_ITEMS_SUCCESS,
  payload: {
    catalog,
  },
});

export const fetchLoadMoreItemsRequest = () => ({
  type: FETCH_LOAD_MORE_ITEMS_REQUEST,
});
