import { take, call, all } from 'redux-saga/effects';
import ApplicationBaseSaga from '../app/common/redux/sagas/ApplicationBaseSaga';

export default function* RootSaga() {
  yield all([ApplicationBaseSaga()]);
}
