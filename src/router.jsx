import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch, } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/login/login';
import Admin from './pages/admin';
// import 'antd/dist/antd.css';
import BulidingEdit from './pages/admin/pages/building/building-edit/building-edit';
import CustomerEdit from './pages/admin/pages/lease/customer-edit/customer-edit';
import VisitingRecordEdit from './pages/admin/pages/lease/visiting-record-edit/visiting-record-edit';


class MRouter extends Component {
    state = {
        logined: true
    }
    render() {
        return (
            
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/admin/building-edit/:action" component={BulidingEdit}></Route>
                        <Route path="/admin/customer-edit/:action" component={CustomerEdit}></Route>
                        <Route path="/admin/visiting-record-edit/:action" component={VisitingRecordEdit}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Route path="/*" render={
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