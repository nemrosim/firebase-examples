import React, { useState } from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';

import { signUp } from '../../../store/auth/signUp';

import './signUp.scss';

export const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    return (
        <div className="sign-up">
            <img src={firebaseImage} />

            <span>Sign up</span>
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
                    if (email && password) {
                        dispatch(signUp({ email, password }));
                    }
                }}
            >
                Create new user
            </button>
        </div>
    );
};
