import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './rootReducer';
import RootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const appStrore = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default appStrore;
