import React, { Component, Fragment } from 'react';
import './index.less';
import GridTitle from '../grid-title';

class LayoutGridCenter extends Component {
    render() {
        let { label, required, children, center } = this.props;
        return (
            <Fragment>
                <GridTitle label = { label } required={ required }/>
                <div className="layout-grid-center">
                    <div className="gird">
                        {
                            children[0]
                        }
                    </div>
                    <div className="center">{ center }</div>
                    <div className="gird">
                        {
                            children[1]
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LayoutGridCenter;