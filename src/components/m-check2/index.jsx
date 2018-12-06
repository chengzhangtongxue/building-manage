import React, { Component } from 'react';
import './index.less';
import { Checkbox, Input, Button } from 'antd';

class MCheck2 extends Component {
    state = {
        checkedList: []
    }
    componentWillMount() {
        // this.setState({
        //     checkedList: this.props.checkedList
        // });
    }
    /**
     * checkbox 选中的回调
     */
    onChange = (checkedValues) => {
        this.setState({
            checkedList: checkedValues
        })
    }
    render() {
        return (
            <div className="component-m-check2">
                <div className="filter">
                    <Input type="text" placeholder="请输入"/>
                </div>
                <div className="check-list">
                    <Checkbox.Group onChange={ this.onChange } value={ this.state.checkedList }>
                        <Checkbox value="1">全部楼宇</Checkbox>
                        <Checkbox value="2">喜马拉雅</Checkbox>
                        <Checkbox value="3">慧谷中心</Checkbox>
                        <Checkbox value="4">软件大厦</Checkbox>
                        <Checkbox value="5">龙江中心</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                        <Checkbox value="6">绿地世界</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className="btns">
                    <Button className="reset" onClick={ this.reset }>重置</Button>
                    <Button type="primary" onClick={ this.sub }>确定</Button>
                </div>
            </div>
        );
    }
}

export default MCheck2;
