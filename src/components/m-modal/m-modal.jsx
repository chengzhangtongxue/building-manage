import React, { Component } from 'react';
import { Modal } from 'antd';

class MModal extends Component {
    state = {
        visible: true
    }
    // 确认
    handleOk = () => {
        this.props.modal.handle();
        this.handleCancel();
    }

    // 取消
    handleCancel = () => {
        this.setState({
            visible: false
        }, () => {
            setTimeout(() => {
                this.props.modal.close();
            }, 400);
        });
    }
    
    render() {
        return <Modal
                title={ this.props.modal.title }
                visible={ this.state.visible }
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
            { this.props.children }
        </Modal>
    }
}

export default MModal;