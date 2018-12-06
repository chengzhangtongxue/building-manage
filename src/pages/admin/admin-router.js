import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import RouterContent from './router-content';
import BulidingListWindow from './pages/building/building-list-window';
import BulidingList from './pages/building/building-list';
import BulidingAdd from './pages/building/building-add';
import HouseEdit from './pages/building/house-edit';
import VisitingCustomerInfo from './pages/lease/visiting-customer-info';

class AdminRouter extends Component {
    render() {
        return (
            <HashRouter>
                <RouterContent>
                    <Switch>
                        <Route path="/admin/building-add" component={BulidingAdd}></Route>
                        <Route path="/admin/building-list-window" component={BulidingListWindow}></Route>
                        <Route path="/admin/building-list" component={BulidingList}></Route>
                        <Route path="/admin/house-edit" component={HouseEdit}></Route>
                        <Route path="/admin/visiting-customer-info" component={VisitingCustomerInfo}></Route>
                    </Switch>
                </RouterContent>
            </HashRouter>
        );
    }
}

export default AdminRouter;