import { takeLatest, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { setScore } from './scoreActions';
import { endSession } from '../session/sessionActions';
import { replaceCard } from '../cards/cardsActions';

export function* onUpdateScore(action) {
  const { cards, score } = yield select();
  const { value } = action.payload.card;
  const newScore = score + value;

  if (newScore > 21) {
    const aceCardIndex = yield cards.findIndex(item => item.value === 11);

    if (aceCardIndex > -1) {
      const reducedScore = newScore - 10;
      const newAceData = {
        image: cards.get(aceCardIndex).image,
        value: 1,
      };

      yield put(replaceCard(aceCardIndex, newAceData));
      yield put(setScore(reducedScore));

      return;
    } else {
      yield put(setScore(newScore));
      yield put(endSession());

      return;
    }
  }

  yield put(setScore(newScore));

  if (newScore === 21) yield put(endSession());
}

export default function* scoreSaga() {
  yield all([
    takeLatest(constants.cards.ADD, onUpdateScore),
  ]);
}
