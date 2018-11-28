import React, { Component } from 'react';
import './index.less';

import LeftNav from '../../components/left-nav';
import MHeader from '../../components/m-header';
import BulidingInfo from './pages/building-info';
import BulidingList from './pages/building-list';
import RouterContent from './router-content';
import SecondNav from '../../components/second-nav';
import { HashRouter, Route, Switch } from 'react-router-dom';

class Admin extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="app">
                <LeftNav></LeftNav>
                <div className="layout-main">
                    <MHeader></MHeader>
                    <div className="layout-content">
                        <SecondNav></SecondNav>
                        <HashRouter>
                            <RouterContent>
                                <Switch>
                                    <Route path="/admin/building-info" component={BulidingInfo}></Route>
                                    <Route path="/admin/buliding-list" component={BulidingList}></Route>
                                    <Route path="/admin" component={BulidingInfo}></Route>
                                </Switch>
                            </RouterContent>
                        </HashRouter>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Admin;