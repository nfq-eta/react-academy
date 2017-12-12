import { takeLatest, call, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { addCard } from './cardsActions';
import { endpoint } from '../../api/endpoints';
import { request } from '../../api/requests';
import { getCardNumberValue } from '../../helpers/cardValueParser';
import { onSetScore } from '../score/scoreSaga';

function* onRequestCard({ payload: { cardCount } }) {
  const state = yield select();
  const id = state.deck.get('id');
  const oldScore = state.score;
  const { response, error } = yield call(request, 'GET', endpoint.draw(id, cardCount));

  if (response) {
    const { data } = response;

    yield all([
      data.cards.map(card => {
        const { image, value } = card;

        return put(addCard({
          image,
          value: getCardNumberValue(value)
        }));
      })
    ]);
  }
}

export default function* cardSaga() {
  yield all([
    takeLatest(constants.cards.REQUEST, onRequestCard),
  ]);
}
