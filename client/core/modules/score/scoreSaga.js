import {all, put, select, takeLatest} from 'redux-saga/effects';
import {constants} from '../../../core/constants';
import {setScore} from './scoreActions';
import {endSession} from "../session/sessionActions";

export function* onUpdateScore(action) {
    const {score} = yield select();
    const {value} = action.payload.card;
    const newScore = score + value;

    yield put(setScore(newScore));
}

export function* onCheckScore(action) {
    if (action.payload.score < 21) {
        return;
    }

    yield put(endSession())
}

export default function* scoreSaga() {
    yield all([
        takeLatest(constants.cards.ADD, onUpdateScore),
        takeLatest(constants.score.SET, onCheckScore),
    ]);
}
