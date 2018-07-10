import { takeEvery, select, all } from 'redux-saga/effects';
import { constants } from '../../../core/constants';

function* onRequestCard() {
  const state = yield select();

  // uzduotis 1:
  // paspaudus mygtukas iskviesti requesta is https://deckofcardsapi.com/ ir gauti viena korta
  // ta korta ideti i store (papildyti turima lista)
  // kortas isvesti pagr. lange

  // uzduotis 2:
  // kol vyksta korteles requestas gavimo, rodyti "loading..." jos vietoje

  // uzduotis 3: automatizuoti zaidima
  // sukurti mygtuka, kuri paspaudus viena karta, kviestu korteles tol, kol bus surinkta 21
  //    bartukai, damos, karaliai verti 10
  //    tuzai 1
  // tarp kiekvienos korteles iskvietimo turi buti 500ms pauze
  // jeigu virsyta 21, tada turi automatiskai restartuoti zaidima
  // procesas turi vykti, kol bus pasiekta lygiai 21, tada stop

  // bonus 3 uzduociai:
  // tuzas vertas 11, TACIAU jeigu su 11 virsyja 21, tada jis vertas 1

  // put - tas pats, kas dispatch
  // call - requestinti f-jas, generatorius, requestus
}

export default function* sessionSaga() {
  yield all([
    takeEvery(constants.cards.REQUEST, onRequestCard),
  ]);
}
