import { takeLatest, call, all, put } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { request } from '../../api/requests';
import { addDeckId } from './deckActions';

function* onCreateDeck() {
  const { response, error } = yield call(request, 'GET', endpoint.createDeck());

  if (response) {
    const { data: { deck_id }} = response;

    yield put(addDeckId(deck_id));
  }
}

export default function* deckSaga() {
  yield all([
    takeLatest(constants.deck.CREATE, onCreateDeck),
  ]);
}
