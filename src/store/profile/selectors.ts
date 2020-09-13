import { ReduxStore } from '../../types/ReduxStore';

export const getProfile = (state: ReduxStore) => state.profile.getProfileData;
