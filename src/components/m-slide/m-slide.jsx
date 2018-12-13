import React from 'react';
import './index.less';
import { Drawer } from 'antd';
import { connect } from 'react-redux';

/**
 * 侧滑组件
 */
class MSlide extends React.Component {
    state = {
        visible: true
    }
    /**
     * 关闭抽屉 侧滑
     */
    onClose = () => {
        this.setState({
            visible: false
        },() => {
            setTimeout(()=> {
                this.props.close();
            }, 400);
        });
    }
    render() {
        return (
            <Drawer
                width={1200}
                placement="right"
                closable={false}
                destroyOnClose={true}
                onClose={this.props.onClose}
                visible={ this.props.visible }
                >
                { this.props.children }
            </Drawer>
        );
    }
}

// export default MSlide;
const mapStateToProps = (state) => {
    return {
        visible: state.buildingReducer.drawerVisible
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClose() {
            let action = {
                type: 'update-animation-drawer',
                visible: false
            }
            dispatch(action);

            // setTimeout(() => {
            //     action = {
            //         type: 'update-detail-show',
            //         visible: false
            //     }
    
            //     dispatch(action);
            //     action = {
            //         type: 'update-animation-drawer',
            //         visible: true
            //     }
            //     dispatch(action);
            // }, 400);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MSlide);