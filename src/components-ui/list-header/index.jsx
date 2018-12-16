import React, { Component } from 'react';
import './index.less';
import { Button, Icon } from 'antd';
import SMoreHandle  from '../../components/s-more-handle';
import TableCheckHandle from '../../components/table-checked-handle';

class ListHeader extends Component {
    render() {
        let { stateOption = { total: 0, flag: false } } = this.props;
        return (
            <div className="component-ui-list-header">
                {
                    this.props.children
                }
                <div className="right-handle">
                    {
                        this.props.defaultOption.btns && this.props.defaultOption.btns.map((item, index) => {
                            if(item.type === 'btn-add') {
                                return <Button key={index} type={ item.btnType } style={{margin:'0 10px'}} onClick={ () => { item.handle() } }>{ item.title }</Button>
                            } else if(item.type === 'more') {
                                return <SMoreHandle key={index} exportData={item.exportData} importData={item.importData} style={{margin: '0 30px 0 10px'}}/>
                            } else {
                                return <div key={index} className="handle" onClick={ () => { item.handle() } }>
                                <Icon type="paper-clip" />
                                <span>{ item.title }</span>
                            </div>
                            }
                        })
                    }
                </div>

                {/* 选中表格后 弹出层的 更多操作 start */}
                <TableCheckHandle 
                        defaultOption={this.props.defaultOption.moreOperBtns}
                        total={ stateOption.total }
                        className={ `${stateOption.flag ? 'active' : ''}` }
                        close={ this.props.defaultOption.close }
                        />
                {/* 选中表格后 弹出层的 更多操作 end */}
            </div>
        );
    }
}

export default ListHeader;