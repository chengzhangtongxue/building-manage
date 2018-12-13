import React, { Component } from 'react';
import './index.less';

import { Pagination } from 'antd';

class ListFooter extends Component {
    render() {
        let { total, onChangeHandle } = this.props;
        return (
            <div className="component-list-footer">
                <Pagination 
                        // 数据总数	
                        total={ this.props.pagination.total } 
                        // 默认的每页条数
                        defaultPageSize={ this.props.pagination.defaultPageSize }
                        defaultPageSize = {20}
                        // 页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)
                        onChange={this.props.pagination.onChangeHandle}

                        onShowSizeChange={ this.props.pagination.onShowSizeChangeHandle }
                        showSizeChanger
                        showQuickJumper 
                        style={{marginTop:10, marginRight: 30,textAlign: 'right'}}
                        />

        
                        
            </div>
        );
    }
}

export default ListFooter;