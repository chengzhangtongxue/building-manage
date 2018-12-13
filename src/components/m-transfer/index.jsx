import React, { Component } from 'react';
import './index.less';
import { Transfer, Icon, Button, Modal } from 'antd';

class MTransfer extends Component {
    state = {
        targetKeys: [],
    }
    
    componentDidMount() {
        this.initData();
    }
    
    initData = () => {
        this.setState({
            targetKeys: this.props.targetKeys
        });
    }
    
    filterOption = (inputValue, option) => {
        return option.title.indexOf(inputValue) > -1;
    }
    
    handleChange = (targetKeys) => {
        this.setState({ targetKeys });
    }
    sure = () => {
        
        if(this.props.dataSource.length - this.state.targetKeys.length < 2) {
            Modal.warning({
                content: '显示的列至少保存2项',
                okText: '好的'
            });
            return;
        }
        const _targetKeys = ',' + this.state.targetKeys.toString() + ',';
        const _dataSource = this.props.dataSource.filter((item) => {

            return _targetKeys.indexOf(','+item.key+',') < 0;
        });
        this.props.sure(_dataSource, this.state.targetKeys);
        this.cancel();
    }
    cancel = () => {
        this.props.cancel();
    }
    render() {
        const dataSource = this.props.dataSource.filter((item) => {
            return typeof item.title === 'string';
        });
        return (
            <div className="component-m-transfer">
                <div className="content">
                    <div className="title">编辑列<Icon type="close-circle" onClick={ ()=>{ this.cancel() } }/></div>
                    <Transfer
                        dataSource={dataSource}
                        showSearch
                        listStyle={{width: 210, height: 400}}
                        filterOption={this.filterOption}
                        targetKeys={this.state.targetKeys}
                        onChange={this.handleChange}
                        render={item => item.title}
                        lazy={false}
                        titles={['显示的列','隐藏的列']}
                    />
                    <div className="btns">
                        <Button type="primary" onClick={()=>{this.sure()}}>确定</Button>
                        <Button onClick={ ()=>{this.cancel()} } style={{margin: '0 20px 0 20px'}}>取消</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MTransfer;