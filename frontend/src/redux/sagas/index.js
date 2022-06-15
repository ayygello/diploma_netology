import { put, retry, spawn, takeEvery } from 'redux-saga/effects';
import {
  fetchAllItemsSuccess,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  fetchTopSalesFailure,
  fetchTopSalesSuccess,
} from '../actions/actionCreators';
import {
  FETCH_ALL_ITEMS_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_SELECTED_CATEGORY_ITEMS_REQUEST,
  FETCH_TOP_SALES_REQUEST,
} from '../actions/actionTypes';
import {
  fetchAllItems,
  fetchCategories,
  fetchSelectedItems,
  fetchTopSales,
} from '../api';

// worker
function* handleFetchTopSalesSaga() {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(retryCount, retryDelay, fetchTopSales);
    yield put(fetchTopSalesSuccess(data));
  } catch (e) {
    yield put(fetchTopSalesFailure(e.message));
  }
}

// watcher
function* watchFetchTopSalesSaga() {
  yield takeEvery(FETCH_TOP_SALES_REQUEST, handleFetchTopSalesSaga);
}

// worker
function* handleFetchCategoriesSaga() {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(retryCount, retryDelay, fetchCategories);
    yield put(fetchCategoriesSuccess(data));
  } catch (e) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

// watcher
function* watchFetchCategoriesSaga() {
  yield takeEvery(FETCH_CATEGORIES_REQUEST, handleFetchCategoriesSaga);
}

// worker
function* handleFetchFullCatalogSaga() {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(retryCount, retryDelay, fetchAllItems);
    yield put(fetchAllItemsSuccess(data));
  } catch (e) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

// watcher
function* watchFetchAllCatalogSaga() {
  yield takeEvery(FETCH_ALL_ITEMS_REQUEST, handleFetchFullCatalogSaga);
}

function* handleFetchSelectedCatalogSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      fetchSelectedItems,
      action.payload.id
    );
    yield put(fetchAllItemsSuccess(data));
  } catch (e) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

function* watchFetchSelectedCatalogSaga() {
  yield takeEvery(
    FETCH_SELECTED_CATEGORY_ITEMS_REQUEST,
    handleFetchSelectedCatalogSaga
  );
}

export default function* saga() {
  yield spawn(watchFetchTopSalesSaga);
  yield spawn(watchFetchCategoriesSaga);
  yield spawn(watchFetchAllCatalogSaga);
  yield spawn(watchFetchSelectedCatalogSaga);
}
