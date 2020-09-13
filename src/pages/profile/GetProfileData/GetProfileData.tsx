import React, { useEffect, useState } from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { action_getProfileData } from '../../../store/profile/getProfileData';

import './getProfileData.scss';
import { getProfile } from '../../../store/profile/selectors';
import { firebase_app } from '../../../api/firebase';

export const GetProfileData: React.FC = () => {
    const dispatch = useDispatch();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

    firebase_app.auth().onAuthStateChanged((user) => {
        if (user) {
            setIsUserLoggedIn(true);
        }
    });

    useEffect(() => {
        if (isUserLoggedIn) {
            dispatch(action_getProfileData());
        }
    }, [isUserLoggedIn, dispatch]);

    const { data: profile, loading: isProfileLoading } = useMappedState(getProfile);

    return (
        <div className="get-profile-data">
            <img src={firebaseImage} />

            <span>Get profile data</span>
            {isProfileLoading && <span>Loading</span>}
            <pre>{JSON.stringify(profile, null, '\t')}</pre>
        </div>
    );
};
