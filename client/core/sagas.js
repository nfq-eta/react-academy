import { all, fork } from 'redux-saga/effects';
import cardsSaga from './modules/cards/cardsSaga';
import deckSaga from './modules/deck/deckSaga';
import scoreSaga from './modules/score/scoreSaga';

export default function* rootSaga() {
  yield all([
    fork(cardsSaga),
    fork(deckSaga),
    fork(scoreSaga),
  ]);
}
