import { combineReducers } from 'redux';
import ApplicationBaseReducer from '../app/common/redux/reducers/ApplicationBaseReducer';

const RootReducer = combineReducers({
  ApplicationBaseReducer,
  // add new reducers
});

export default RootReducer;
