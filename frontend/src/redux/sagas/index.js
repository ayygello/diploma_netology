import { debounce, put, retry, spawn, takeEvery } from 'redux-saga/effects';
import {
  fetchAllItems,
  fetchCategories,
  fetchLoadMoreItems,
  fetchSelectedItems,
  fetchTopSales,
  searchProducts,
} from '../api';
import {
  changeSearchField,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchFailure,
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchLoadMoreRequest,
  fetchLoadMoreSuccess,
  fetchSelectedItemsRequest,
  fetchSelectedItemsSuccess,
  searchProductsSuccess,
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
      action.payload
    );
    yield put(fetchSelectedItemsSuccess(data));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

function* watchFetchSelectedCatalogSaga() {
  yield takeEvery(fetchSelectedItemsRequest, handleFetchSelectedCatalogSaga);
}

function* handleLoadMoreItemsSaga(action) {
  try {
    const data = yield retry(
      retryCount,
      retryDelay,
      fetchLoadMoreItems,
      action.payload
    );
    yield put(fetchLoadMoreSuccess(data));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

function* wathcFetchLoadMoreItemsSaga() {
  yield takeEvery(fetchLoadMoreRequest, handleLoadMoreItemsSaga);
}

function* handleSearchProductsSaga(action) {
  try {
    const data = yield retry(retry, retryDelay, searchProducts, action.payload);
    yield put(searchProductsSuccess(data));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

function* watchSearchProductsSaga() {
  yield debounce(500, changeSearchField, handleSearchProductsSaga);
}

export default function* saga() {
  yield spawn(watchFetchTopSalesSaga);
  yield spawn(watchFetchCategoriesSaga);
  yield spawn(watchFetchAllCatalogSaga);
  yield spawn(watchFetchSelectedCatalogSaga);
  yield spawn(wathcFetchLoadMoreItemsSaga);
  yield spawn(watchSearchProductsSaga);
}
