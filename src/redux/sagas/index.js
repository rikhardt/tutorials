import {all} from 'redux-saga/effects';
import watchTutorials from './tutorials';

export default function* rootSaga() {
    yield all([
        watchTutorials()
    ]);
}