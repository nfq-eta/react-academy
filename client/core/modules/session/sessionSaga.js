import { takeLatest, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { resetCards } from '../cards/cardsActions';
import { deleteScore } from '../score/scoreActions';

export function* restart() {
  yield put(resetCards());
  yield put(deleteScore());
}

export function* setNextPlayer(action) {
  const state = yield select();
}

export default function* sessionSaga() {
  yield all([
    takeLatest(constants.session.RESTART, restart),
    takeLatest(constants.session.SET_NEXT_ACTIVE_PLAYER, setNextPlayer),
  ]);
}
