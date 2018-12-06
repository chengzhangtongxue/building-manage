import React, { Component } from 'react';
import './index.less';
import { Button, Icon } from 'antd';
import SMoreHandle  from '../../components/s-more-handle';
import TableCheckHandle from '../../components/table-checked-handle';

class ListHeader extends Component {
    state = {

    }
    closeTableCheckHandle = () => {
        ;
    }
    render() {
        return (
            <div className="component-ui-list-header">
                {
                    this.props.children
                }
                <div className="right-handle">
                    {
                        this.props.option.btns && this.props.option.btns.map((item, index) => {
                            if(item.type === 'btn-add') {
                                return <Button key={index} type={ item.btnType } style={{margin:'0 10px'}} onClick={ () => { item.handle() } }>{ item.title }</Button>
                            } else if(item.type === 'more') {
                                return <SMoreHandle key={index} style={{margin: '0 30px 0 10px'}}/>
                            } else {
                                return <div key={index} className="handle" onClick={ () => { item.handle() } }>
                                <Icon type="paper-clip" />
                                <span>{ item.title }</span>
                            </div>
                            }
                        })
                    }
                </div>

                <TableCheckHandle 
                        total={ this.props.checkedHandle.total }
                        className={ `${this.props.checkedHandle.flag ? 'active' : ''}` }
                        close={ this.props.option.checkHandle.handle }
                        />
            </div>
        );
    }
}

export default ListHeader;