import { Profile } from './Profile';

export interface ReduxStore {
    auth: {};
    profile: {
        getProfileData: {
            data?: Profile;
            loading: boolean;
            error: {};
        };
        setAvatar: {
            data: {};
            loading: boolean;
            error: {};
        };
    };
}
