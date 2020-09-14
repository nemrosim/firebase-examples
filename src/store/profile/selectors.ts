import { ReduxStore } from '../../types/ReduxStore';

export const getProfile = (state: ReduxStore) => state.profile.getProfileData;
export const isAvatarImageUploading = (state: ReduxStore) => state.profile.setAvatar.loading;
