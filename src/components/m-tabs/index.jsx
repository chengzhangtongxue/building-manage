import React, { Component } from 'react';
import './index.less';

import {withRouter, Link} from "react-router-dom";

// import store from '../../store';
import { connect } from 'react-redux';
import { Tabs  } from 'antd';
const TabPane = Tabs.TabPane;

class MTabs extends Component {
    /**
     * tabPanes被选中的回调
     */
    onChange = (activeKey) => {
        // const action = {
        //     type: 'update-tabs-active-key',
        //     activeKey
        // }
        // store.dispatch(action);

        // this.props.history.push({ 
        //     pathname : this.state.tabPanes[activeKey].path
        // });
    }
    
    componentDidMount() {
        // console.log(store);
        // let { tabPanes, activeKey } = store.getState().tabPanesReducer;
        // this.setState({
        //     tabPanes,
        //     activeKey: String(activeKey)
        // });
        // store.subscribe(() => {
        //     //  { tabPanes, activeKey } = store.getState().tabPanesReducer;
        //     tabPanes = store.getState().tabPanesReducer.tabPanes;
        //     activeKey = store.getState().tabPanesReducer.activeKey;
        //     console.log(tabPanes, activeKey);
        //     this.setState({
        //         tabPanes,
        //         activeKey: String(activeKey)
        //     });
        // });
    }
    /**
     * 关闭导航
     */
    closeTabPane = (targetKey, fnName) => {
        // if('remove' === fnName) {
        //     const action = {
        //         type: 'delete-tabs',
        //         index: targetKey
        //     }
        //     store.dispatch(action);
        // }
    }
    componentWillUnmount() {
        // this.unsubscribe && this.unsubscribe();
    }
    render() {
        return (
            <div className="component-tabs">
                <Tabs
                onChange={this.props.onChange}
                // 当前激活 tab 面板的 key
                activeKey={this.props.activeKey}
                // type="card"
                type="editable-card"
                // 是否隐藏加号图标，在 type="editable-card" 时有效
                hideAdd={true}
                tabBarGutter={ 0 }
                onEdit={this.closeTabPane}
                // closable
            >
                {
                    this.props.tabPanes.map((item, key) => <TabPane tab={ <Link to={`${item.path}`}>{item.title}</Link> } key={key} closable={ true }></TabPane>)
                }
            </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tabPanes: state.tabPanesReducer.tabPanes,
        activeKey: String(state.tabPanesReducer.activeKey)
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        onChange(activeKey) {
            const action = {
                type: 'update-tabs-active-key',
                activeKey
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MTabs);