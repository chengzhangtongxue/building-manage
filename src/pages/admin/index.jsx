import React, { Component } from 'react';
import './index.less';
import { getCookie } from '@/util';
import LeftNav from '../../components/left-nav';
import MHeader from '../../components/m-header';
import AdminRouter from './admin-router';
import SecondNav from '../../components/second-nav';
// import { HashRouter, Route, Switch } from 'react-router-dom';

class Admin extends Component {
    componentWillMount() {
        const isLogin = getCookie('isLogin');
        if(!isLogin) {
            this.props.history.push('/login');
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="admin">
                <LeftNav></LeftNav>
                <div className="layout-main">
                    <MHeader></MHeader>
                    <div className="layout-content">
                        <SecondNav></SecondNav>
                        <AdminRouter></AdminRouter>
                        {/* <HashRouter>
                            <RouterContent>
                                <Switch>
                                    <Route path="/admin/building-info" component={BulidingInfo}></Route>
                                    <Route path="/admin/buliding-list" component={BulidingList}></Route>
                                    <Route path="/admin/buliding-add" component={BulidingAdd}></Route>
                                    <Route path="/admin" component={BulidingInfo}></Route>
                                </Switch>
                            </RouterContent>
                        </HashRouter> */}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Admin;