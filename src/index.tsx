import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './history';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import { NavBar } from './components/NavBar/NavBar';
import {
    SignIn,
    SignUp,
    SignInWithPopUp,
    SetProfileData,
    PageNotFound,
    GetProfileData,
    UpdateProfileData,
    SetProfileImage,
    DeleteProfileData,
} from './pages';
import { toast, ToastContainer } from 'react-toastify';

import './styles/index/css-styles-reset.scss';
import './styles/index/main.scss';
import 'react-toastify/dist/ReactToastify.css';

// Call it once in your app. At the root of your app is the best place
toast.configure();

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/sign-up" exact={true} component={SignUp} />
                    <Route path="/sign-in" exact={true} component={SignIn} />
                    <Route path="/sign-in-with-popup" exact={true} component={SignInWithPopUp} />
                    <Route path="/set-profile-data" exact={true} component={SetProfileData} />
                    <Route path="/get-profile-data" exact={true} component={GetProfileData} />
                    <Route path="/get-profile-data" exact={true} component={GetProfileData} />
                    <Route path="/update-profile-data" exact={true} component={UpdateProfileData} />
                    <Route path="/delete-profile-data" exact={true} component={DeleteProfileData} />
                    <Route path="/set-profile-image" exact={true} component={SetProfileImage} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
            <ToastContainer />
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
