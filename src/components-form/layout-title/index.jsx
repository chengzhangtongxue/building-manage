import React, { Component, Fragment } from 'react';
import './index.less';
import { Row, Col } from 'antd';

class LayoutTitle extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col offset={4} span={16}>
                        <h2 className="layout-title">{ this.props.title }</h2>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default LayoutTitle;