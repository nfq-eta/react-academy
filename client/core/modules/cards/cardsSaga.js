import { takeEvery, select, all } from 'redux-saga/effects';
import { constants } from '../../../core/constants';

function* onRequestCard() {
  const state = yield select();

  // put - tas pats, kas dispatch
  // call - requestinti f-jas, generatorius, requestus
}

export default function* sessionSaga() {
  yield all([
    takeEvery(constants.cards.REQUEST, onRequestCard),
  ]);
}
