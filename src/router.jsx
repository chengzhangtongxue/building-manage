import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/login';
import Admin from './pages/admin';

class MRouter extends Component {
    state = {
        logined: true
    }
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Route path="/" render={
                            () => {
                                return this.state.logined ? (<Redirect to="/admin"/>) : (<Redirect to="/login"/>);
                            }}
                        />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default MRouter;