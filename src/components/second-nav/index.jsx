import React, { Component, Fragment } from 'react';
import './index.less';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import store from '../../store';
import { CSSTransition } from 'react-transition-group';

class SecondNav extends Component {
    state = {
        secondNavShow: true,
        navList: []
    }
    componentDidMount() {
        console.log(store.getState());
        this.setState({
            navList: store.getState()[store.getState().currentFirstNav]
        })

        store.subscribe(() => {
            // console.log(store.getState());
            this.setState({
                navList: store.getState()[store.getState().currentFirstNav]
            })
        });
    }
    toggleSecondNav = () => {
        this.setState({
            secondNavShow: !this.state.secondNavShow
        });
    }
    render() {
        let { secondNavShow } = this.state;
        return (
            // <Fragment>
                <div className="second-nav">
                    <CSSTransition
                        in={ secondNavShow }
                        classNames="fade"
                        // unmountOnExit
                        timeout={ 300 }
                        >
                        <div className="content">
                            <Menu mode="inline">
                                {
                                    this.state.navList.map(item => {
                                        return (
                                            <Menu.SubMenu key={ item.key } title={ item.title }>
                                                {
                                                    item.children.map(child => {
                                                        return (
                                                            <Menu.Item key={ child.key }>
                                                                <Link to={ child.path }>{ child.title }</Link>
                                                            </Menu.Item>
                                                        )
                                                    })
                                                }
                                            </Menu.SubMenu>
                                        )
                                    })
                                }
                                        {/* <Menu.SubMenu key="sub1" title={'楼宇'}>
                                            <Menu.Item key="1">
                                                <Link to="/admin/building-list">楼宇信息</Link>
                                            </Menu.Item>
                                            <Menu.Item key="2">
                                                <Link to="/admin/building-list-window">楼宇列表与窗口</Link>
                                            </Menu.Item>
                                        </Menu.SubMenu>
                                        <Menu.SubMenu key="sub2" title={'招租'}>
                                            <Menu.Item key="3">来访客户信息</Menu.Item>
                                            <Menu.Item key="4">来访客户记录</Menu.Item>
                                        </Menu.SubMenu>
                                        <Menu.SubMenu key="sub3" title={'合同'}>
                                            <Menu.Item key="5">合同列表</Menu.Item>
                                            <Menu.Item key="6">合同租期</Menu.Item>
                                            <Menu.Item key="7">合同联系人</Menu.Item>
                                            <Menu.Item key="8">合同账单</Menu.Item>
                                        </Menu.SubMenu>
                                        <Menu.SubMenu key="sub4" title={'收付款'}>
                                            <Menu.Item key="9">收付款计划</Menu.Item>
                                            <Menu.Item key="10">收付款记录</Menu.Item>
                                            <Menu.Item key="11">收付款合计</Menu.Item>
                                        </Menu.SubMenu> */}
                            </Menu>
                        </div>
                    </CSSTransition>
                    <div onClick={ () => { this.toggleSecondNav() } } className={ `${secondNavShow ? 'toggle' : 'toggle outer'}` }>{ secondNavShow ? '收起' : '展开'}</div>
                </div>
            // </Fragment>
        );
    }
}

export default SecondNav;