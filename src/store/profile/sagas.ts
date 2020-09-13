import { all, takeLatest } from 'redux-saga/effects';
import { action_getProfileData, worker_getProfileData } from './getProfileData';
import { action_setProfileData, worker_setProfileData } from './setProfileData';

export function* profile(): IterableIterator<any> {
    yield all([
        takeLatest(action_getProfileData, worker_getProfileData),
        takeLatest(action_setProfileData, worker_setProfileData),
    ]);
}
