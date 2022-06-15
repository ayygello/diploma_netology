import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catalogReducer from '../reducers/catalog';
import topSalesReducer from '../reducers/topSales';
import saga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    topSales: topSalesReducer,
    catalog: catalogReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(saga);

export default store;
