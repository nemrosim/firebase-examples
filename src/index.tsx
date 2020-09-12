import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';
import { store } from './store';
import './styles/index/css-styles-reset.scss';
import './styles/index/main.scss';

import 'react-toastify/dist/ReactToastify.css';

import * as serviceWorker from './serviceWorker';
import { NavBar } from './components/NavBar/NavBar';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { toast, ToastContainer } from 'react-toastify';

// Call it once in your app. At the root of your app is the best place
toast.configure();

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/sign-up" exact={true} component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                </Switch>
            </Router>
            <ToastContainer />
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
