import React from 'react';
import './index.less';
import { Drawer } from 'antd';

/**
 * 侧滑组件
 */
class MSlide extends React.Component {
    state = {
        visible: false
    }
    componentDidMount() {
        this.setState({
            visible: this.props.visible
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            visible: props.visible
        });
    }
    onClose = () => {
        console.log('on')
        this.setState({
            visible: false
        });
    }
    render() {
        return (
            <Drawer
                width={1200}
                // title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={ this.state.visible }
                >
                { this.props.children }
            </Drawer>
        );
    }
}

export default MSlide;