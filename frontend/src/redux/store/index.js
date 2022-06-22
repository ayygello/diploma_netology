import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catalogSlice from '../features/catalog/catalogSlice';
import topSalesSlice from '../features/topSales/topSalesSlice';
// import catalogReducer from '../reducers/catalog';
// import topSalesReducer from '../reducers/topSales';
import saga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    topSales: topSalesSlice,
    catalog: catalogSlice,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(saga);

export default store;
