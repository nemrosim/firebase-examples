import React, { useState } from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';

import { signIn } from '../../../store/auth/signIn';
import '../../../assets/styles/_constants.scss';

import './signInWithMultipleAccounts.scss';
import { firebase_app } from '../../../api/firebase';

import phoneImage from '../../../assets/logos/phone-icon.png';
import googleImage from '../../../assets/logos/google-logo.png';
import facebookImage from '../../../assets/logos/facebook-logo.png';
import twitterImage from '../../../assets/logos/twitter-icon.png';
import githubImage from '../../../assets/logos/github-icon.png';
import emailImage from '../../../assets/logos/email-icon.png';
import { action_signInWithPopup } from '../../../store/auth/signInWithPopUp';
import firebase from 'firebase';

let googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
let twitterProvider = new firebase.auth.TwitterAuthProvider();
let githubProvider = new firebase.auth.GithubAuthProvider();
let phoneProvider = new firebase.auth.PhoneAuthProvider();

export const SignInWithMultipleAccounts: React.FC = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    firebase_app.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    });

    const dispatch = useDispatch();

    return (
        <div className="main-div">
            <img className="logo-img" src={firebaseImage} />

            <span>Sign in with multiple accounts</span>

            <div className="images-container">
                {/*<img*/}
                {/*    src={phoneImage}*/}
                {/*    className="image-icon-button"*/}
                {/*    onClick={() => {*/}
                {/*        dispatch(action_signInWithPopup({ provider: phoneProvider }));*/}
                {/*    }}*/}
                {/*/>*/}
                <img
                    src={googleImage}
                    className="image-icon-button"
                    onClick={() => {
                        dispatch(action_signInWithPopup({ provider: googleProvider }));
                    }}
                />
                <img
                    src={facebookImage}
                    className="image-icon-button"
                    onClick={() => {
                        facebookProvider.addScope('email');
                        dispatch(action_signInWithPopup({ provider: facebookProvider }));
                    }}
                />
                <img
                    src={twitterImage}
                    className="image-icon-button"
                    onClick={() => {
                        dispatch(action_signInWithPopup({ email, password }));
                    }}
                />
                <img
                    src={githubImage}
                    className="image-icon-button"
                    onClick={() => {
                        dispatch(action_signInWithPopup({ email, password, hello: 'some' }));
                    }}
                />
                <img
                    src={emailImage}
                    className="image-icon-button"
                    onClick={() => {
                        dispatch(action_signInWithPopup({ email, password }));
                    }}
                />
            </div>
        </div>
    );
};
