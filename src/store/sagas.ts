/** @format */
import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { authorization } from './auth/auth.sagas';

export function* sagas(): SagaIterator {
    yield all([fork(authorization)]);
}
