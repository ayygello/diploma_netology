import {
  FETCH_ALL_ITEMS_REQUEST,
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_SELECTED_CATEGORY_ITEMS_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  catalog: [],
  loading: false,
  error: null,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case FETCH_CATEGORIES_SUCCESS:
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        loading: false,
        error: null,
      };
    case FETCH_ALL_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ALL_ITEMS_SUCCESS:
      const { catalog } = action.payload;
      return {
        ...state,
        catalog,
        loading: false,
        error: null,
      };
    case FETCH_SELECTED_CATEGORY_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default catalogReducer;
