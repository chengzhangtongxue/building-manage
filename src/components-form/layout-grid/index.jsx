import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import GridTitle from '../grid-title';
/**
 * 多列布局
 */
class LayoutGrid extends Component {
    render() {
        const { label, children, required } = this.props;
        const len = React.Children.count(children);
        const span = Math.floor(24 / len);
        return (
            <Fragment>
                <GridTitle required={ required } label={ label }/>
                <Row gutter={ 10 }>
                    {
                        children && React.Children.map(children, (item, index)=> {
                            return <Col span={ span } key={index}>
                                    { item }
                                </Col>
                        })
                    }
                </Row>
            </Fragment>
        );
    }
}
export default LayoutGrid;
