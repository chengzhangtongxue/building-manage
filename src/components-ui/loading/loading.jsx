import React from 'react';
import './index.less';
import { Spin, Icon } from 'antd';

class UILoading extends React.Component {
    render() {
        return (
            <div className="component-ui-loading">
                <div className="bg-mask"></div>
                <div className="center-loading"><Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}/></div>
            </div>
        )
    }
}
export default UILoading;