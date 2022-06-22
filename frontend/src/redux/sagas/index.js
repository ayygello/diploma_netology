import { put, retry, spawn, takeEvery } from 'redux-saga/effects';
import {
  fetchAllItemsSuccess,
  fetchCategoriesFailure,
  // fetchCategoriesSuccess,
  // fetchTopSalesFailure,
  // fetchTopSalesSuccess,
} from '../actions/actionCreators';
import {
  FETCH_ALL_ITEMS_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_SELECTED_ITEMS_REQUEST,
  FETCH_TOP_SALES_REQUEST,
} from '../actions/actionTypes';
import {
  fetchAllItems,
  fetchCategories,
  fetchLoadMoreItems,
  fetchSelectedItems,
  fetchTopSales,
} from '../api';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchFailure,
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchRequest,
  fetchSelectedItemsRequest,
  fetchSelectedItemsSuccess,
} from '../features/catalog/catalogSlice';
import {
  fetchTopSalesFailure,
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
} from '../features/topSales/topSalesSlice';

const retryCount = 3;
const retryDelay = 1 * 1000;

// topSales worker
function* handleFetchTopSalesSaga() {
  try {
    const data = yield retry(retryCount, retryDelay, fetchTopSales);
    yield put(fetchTopSalesSuccess(data));
  } catch (e) {
    yield put(fetchTopSalesFailure(e.message));
  }
}

function* watchFetchTopSalesSaga() {
  yield takeEvery(fetchTopSalesRequest, handleFetchTopSalesSaga);
}

// Categories worker
function* handleFetchCategoriesSaga() {
  try {
    const data = yield retry(retryCount, retryDelay, fetchCategories);
    yield put(fetchCategoriesSuccess(data));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

function* watchFetchCategoriesSaga() {
  yield takeEvery(fetchCategoriesRequest, handleFetchCategoriesSaga);
}

// All items worker
function* handleFetchFullCatalogSaga() {
  try {
    const data = yield retry(retryCount, retryDelay, fetchAllItems);
    yield put(fetchItemsSuccess(data));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

function* watchFetchAllCatalogSaga() {
  yield takeEvery(fetchItemsRequest, handleFetchFullCatalogSaga);
}

function* handleFetchSelectedCatalogSaga(action) {
  try {
    const data = yield retry(
      retryCount,
      retryDelay,
      fetchSelectedItems,
      action.payload.catalogId
    );
    yield put(fetchSelectedItemsSuccess(data));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

// function* handleLoadMoreItemsSaga() {
//   try {
//     const data = yield retry(
//       retryCount,
//       retryDelay,
//       fetchLoadMoreItems
//     );
//     yield put(fe)
//   }
// }

function* watchFetchSelectedCatalogSaga() {
  yield takeEvery(fetchSelectedItemsRequest, handleFetchSelectedCatalogSaga);
}

export default function* saga() {
  yield spawn(watchFetchTopSalesSaga);
  yield spawn(watchFetchCategoriesSaga);
  yield spawn(watchFetchAllCatalogSaga);
  yield spawn(watchFetchSelectedCatalogSaga);
}
