import React, { useState } from 'react';
import firebaseImage from '../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';

import './signIn.scss';
import { signIn } from '../../store/auth/signIn';
import { firebase_app } from '../../api/firebase';

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    return (
        <div className="sign-up">
            <img src={firebaseImage} />

            <span>Sign in</span>
            <input
                id="email"
                name="email"
                type="input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <button
                onClick={() => {
                    firebase_app.analytics().logEvent('User clicked Sign in', {
                        email,
                    });
                    dispatch(signIn({ email, password }));
                }}
            >
                Sign in
            </button>
        </div>
    );
};
