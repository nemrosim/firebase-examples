import { all, takeLatest } from 'redux-saga/effects';
import { action_getProfileData, worker_getProfileData } from './getProfileData';
import { action_setProfileData, worker_setProfileData } from './setProfileData';
import { action_updateProfileData, worker_updateProfileData } from './updateProfileData';
import { action_deleteProfileData, worker_deleteProfileData } from './deleteProfileData';
import { action_setAvatar, worker_setAvatar } from './setAvatar';

export function* profile(): IterableIterator<any> {
    yield all([
        takeLatest(action_getProfileData, worker_getProfileData),
        takeLatest(action_setProfileData, worker_setProfileData),
        takeLatest(action_updateProfileData, worker_updateProfileData),
        takeLatest(action_deleteProfileData, worker_deleteProfileData),
        takeLatest(action_setAvatar, worker_setAvatar),
    ]);
}
