import React, { Component, Fragment } from 'react';
import './index.less';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// import store from '../../store';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SecondNav extends Component {
    state = {
        secondNavShow: true,
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    // 展开或收起
    toggleSecondNav = () => {
        console.log(this.context);
        // this.context.router.history.push('/admin/building-list');
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
                            <Menu 
                                mode="inline"
                                onClick={ this.props.menuItemClickHandle }
                                selectedKeys={ this.props.selectedKeys }
                                >
                                {
                                    this.props.navList.map((item, key) => {
                                        return (
                                            <Menu.SubMenu key={ key } title={ item.title }>
                                                {
                                                    item.children.map(child => {
                                                        return (
                                                            <Menu.Item key={ child.key }>
                                                                <Link to={ child.path }>
                                                                { child.title }
                                                                </Link>
                                                            </Menu.Item>
                                                        )
                                                    })
                                                }
                                            </Menu.SubMenu>
                                        )
                                    })
                                }
                            </Menu>
                        </div>
                    </CSSTransition>
                    <div onClick={ () => { this.toggleSecondNav() } } className={ `${secondNavShow ? 'toggle' : 'toggle outer'}` }>{ secondNavShow ? '收起' : '展开'}</div>
                </div>
            // </Fragment>
        );
    }
}

// export default SecondNav;
const mapStateToProps = (state) => {
    return {
        // 当前导航列表
        navList: state.secondNavReducer[state.secondNavReducer.currentFirstNav],
        selectedKeys: state.secondNavReducer.selectedKeys
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // 二级导航点击的时候 回调方法
        menuItemClickHandle(menuItem) {
            console.log(menuItem);
            let title = menuItem.item.props.children.props.children;
            let path = menuItem.item.props.children.props.to;
            
            let action = {
                type: 'add-open-tabs',
                tabPane: {
                    title: title,
                    path: path,
                }
            }
            dispatch(action);

            let action2 = {
                type: 'update-second-nav-key',
                key: menuItem.key
            }
            dispatch(action2);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondNav);