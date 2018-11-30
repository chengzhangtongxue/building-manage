import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BulidingListWindow from './pages/building/building-list-window';
import BulidingList from './pages/building/building-list';
import BulidingAdd from './pages/building/building-add';
import RouterContent from './router-content';

class AdminRouter extends Component {
    render() {
        return (
            <HashRouter>
                <RouterContent>
                    <Switch>
                        <Route path="/admin/building-add" component={BulidingAdd}></Route>
                        <Route path="/admin/building-list-window" component={BulidingListWindow}></Route>
                        <Route path="/admin/building-list" component={BulidingList}></Route>
                    </Switch>
                </RouterContent>
            </HashRouter>
        );
    }
}

export default AdminRouter;