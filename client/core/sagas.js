import { all, fork } from 'redux-saga/effects';
import cardsSaga from './modules/cards/cardsSaga';

export default function* rootSaga() {
  yield all([
    fork(cardsSaga),
  ]);
}
