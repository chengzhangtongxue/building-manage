import React from 'react';
import './index.less';
import { Row, Col } from 'antd';

export default function(props) {
    const childrens = React.Children.map(props.children,item=>item);
    return <Row className="components-form-layout-col">
                <Col span={ 7 } offset={4}>
                    { childrens[0] }
                </Col>
                <Col span={ 7 } offset={ 2 }>
                    { childrens[1] }   
                </Col>
            </Row>
}