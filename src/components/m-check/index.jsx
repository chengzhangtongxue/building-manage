import React, { Component } from 'react';
import './index.less';
import { Checkbox, Input, Button } from 'antd';

class MCheck extends Component {
    state = {
        checkedList: []
    }
    componentWillMount() {
        this.setState({
            checkedList: this.props.checkedList
        });
    }
    componentDidMount() {
        // document.querySelector('.component-check').addEventListener('click', (e) => {
        //     e.stopPropagation();
        // } ,false)
    }
    /**
     * checkbox 选中的回调
     */
    onChange = (checkedValues) => {
        this.setState({
            checkedList: checkedValues
        })
    }
    /**
     * 重置
     */
    reset = () => {
        this.setState({
            checkedList: []
        });
    }
    /**
     * 提交-确定
     */
    sub = () => {
        this.props.submit(this.state.checkedList);
        this.props.close();
    }
    render() {
        let { style } = this.props;
        return (
            <div className="component-check" >
                <div className="bg" onClick={ this.props.close }></div>
                <div className="content" style={ style }>
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
                        </Checkbox.Group>
                    </div>
                    <div className="btns">
                        <Button className="reset" onClick={ this.reset }>重置</Button>
                        <Button type="primary" onClick={ this.sub }>确定</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MCheck;