import React from 'react';
import './index.less';
import { Icon, Button,  } from 'antd';
import SMyBuilding from '../../../../../components/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import TableCheckHandle from '../../../../../components/table-checked-handle';
import ListHeader from '../../../../../components-ui/list-header';

/**
 * 来访客户信息
 */
class VisitingCustomerInfo extends React.Component {
    state = {
        checkedHandle:{
            total: 0,
            flag: false
        }
    }
    listHeaderOption = {
        btns: [
            {
                title: '筛选',
                handle: () => {
                    console.log('筛选', this)
                }
            },
            {
                type: 'btn-add',
                btnType: 'primary',
                title: '新增客户',
                handle: () => {
                    console.log('btn-add', this);
                }
            },
            {
                type: 'more',
            }
        ],
        checkHandle: {
            handle: () => {
                let { checkedHandle } = this.state;
                checkedHandle.flag = false;
                this.setState({
                    checkedHandle
                });
            }
        }
    }
    click = () => {
        this.setState({
            checkedHandle: {
                total: Math.floor(Math.random() * 100),
                flag: true
            }
        })
    }
    render() {
        return (
            <div className="visiting-customer-info">

                <ListHeader option={ this.listHeaderOption } checkedHandle={ this.state.checkedHandle }>
                    <SMyBuilding style={{ marginLeft:20,marginTop: 15 }}/>
                </ListHeader>

                <Button onClick={ this.click }>点击</Button>
            </div>
        );
    }
}

export default VisitingCustomerInfo;