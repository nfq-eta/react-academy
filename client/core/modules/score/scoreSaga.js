import { takeLatest, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { setScore } from './scoreActions';

export function* onUpdateScore(action) {
  const { score } = yield select();
  const { value } = action.payload.card;
  const newScore = score + value;

  yield put(setScore(newScore));
}

export default function* scoreSaga() {
  yield all([
    takeLatest(constants.cards.ADD, onUpdateScore),
  ]);
}
