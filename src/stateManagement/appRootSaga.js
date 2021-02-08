import { all } from 'redux-saga/effects';
import applicationBaseWatcher from '../app/common/redux/sagas/applicationBaseWatcher';
import { agency1Watcher } from '../app/modules/agency1';

export default function* RootSaga() {
  yield all([applicationBaseWatcher(),);, , agency1Watcher]);
}
