import React, {Component} from 'react';
import './index.less';
import { url_lease_customer_edit } from '../../../../../url/url';
import Base from '../../base/base';
import UILoading from '../../../../../components-ui/loading/loading';
import EditHeader from '../../../../../components-ui/edit-header/edit-header';
import { Form } from 'antd';

class CustomerEdit extends Base {
    addUrl = url_lease_customer_edit;
    // 编辑 页面的 头部更多操作
    editHeaderOption = [
        {
            title: '保存并新增记录',
            type: 'primary',
            handle: (e) => {
                console.log('保存并新增房源', this)
            }
        },
        {
            title: '取消',
            handle: () => {
                this.cancle();
            },
        }
    ]

    render() {
        return (
            <div className="visiting-customer-edit">
                {
                    this.state.loading && <UILoading></UILoading>
                }

                <EditHeader title="新增楼宇" option={ this.editHeaderOption }/>
                <div className="customer-edit-con">
                    
                </div>
            </div>
        )
    }
}

export default Form.create()(CustomerEdit);