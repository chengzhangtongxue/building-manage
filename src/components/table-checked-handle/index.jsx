import React, { Component, Fragment } from 'react';
import './index.less';
import { Table, Icon, Button, Divider, Transfer } from 'antd';

class TableCheckHandle extends Component {
    render() {
        let { className='' } = this.props;
        className += ' component-table-checked-more-oper';

        return (
            <div className={ className }>
                <div className="selected-num">已选<span>{ this.props.total }</span>项</div>
                {
                    this.props.defaultOption && this.props.defaultOption.map((item,key) => {
                        return <Fragment key={key}>
                            <Divider type="vertical" />
                            <div className="oper-btn" onClick={item.handle}>
                                <Icon type={item.icon}></Icon>
                                <span>{item.title}</span>
                            </div>
                        </Fragment>
                    })
                }
               
                {/* <Divider type="vertical" />
                <div className="oper-btn">
                    <Icon type="lock"></Icon>
                    <span>锁定</span>
                </div>
                <Divider type="vertical" />
                <div className="oper-btn">
                    <Icon type="unlock"></Icon>
                    <span>解锁</span>
                </div>
                <Divider type="vertical" />
                <div className="oper-btn">
                    <Icon type="fullscreen"></Icon>
                    <span>拆分</span>
                </div>
                <Divider type="vertical" />
                <div className="oper-btn">
                    <Icon type="fullscreen-exit"></Icon>
                    <span>合并</span>
                </div>
                <Divider type="vertical" />
                <div className="oper-btn">
                    <Icon type="swap"></Icon>
                    <span>转移</span>
                </div>
                <Divider type="vertical" />
                <div className="oper-btn">
                    <Icon type="download"></Icon>
                    <span>导出选中</span>
                </div> */}

                <div className="close" onClick={ this.props.close }>
                    <Icon type="close"></Icon>
                </div>
            </div>
        );
    }
}

export default TableCheckHandle;