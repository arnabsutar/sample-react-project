import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './rootReducer';
import RootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const appStrore = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

/**
 * Un-comment the below section and comment above appStore creation statement
 * in case user doesn't want to have redux dev tool
 */
// const appStrore = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

const { dispatch } = appStrore;

export default appStrore;
export { dispatch };
