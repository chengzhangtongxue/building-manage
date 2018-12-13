import React, { Component } from 'react';
import './index.less';
import { mAxios } from '../../util';
import { url_building_name } from '../../url/url';
import { Checkbox, Input, Button } from 'antd';

class MCheck extends Component {
    defaultData = []
    state = {
        // 选中的 selectbox
        checkedList: [],
        // 所有的楼宇数据--筛选的数据展示
        data:[]
    }
    /**
     * checkbox 选中的回调
     */
    onChange = (checkedValues) => {
        this.setState({
            checkedList: checkedValues
        })
    }

    componentDidMount() {
        this.init();
    }
    
    //初始化数据
    init() {
        mAxios.ajax({
            url: url_building_name,
        }).then(data => {
            this.defaultData = JSON.parse(JSON.stringify(data.resultData));
            this.setData(data.resultData);
        });
    }

    setData(data) {
        this.setState({
            data
        });
    }
    // input 输入框change 事件回调
    onChangeHandle = (e) => {
        let value = e.target.value;
        let data = this.defaultData.filter((item) => {
            return item.floorName.indexOf(value) >= 0;
        });
        this.setData(data);
    }

    // 重置数据
    reset = () => {
        this.setState({
            checkedList: []
        })
    }

    shouldComponentUpdate(props) {
        console.log(props);
        return true;
    }
    // 提交数据
    sub = () => {
        this.props.subData(this.state.checkedList);
    }

    render() {
        return (
            <div className="component-m-check">
                <div className="filter">
                    <Input type="text" placeholder="请输入" onChange={ this.onChangeHandle }/>
                </div>
                <div className="check-list">
                    <Checkbox.Group onChange={ this.onChange } value={ this.state.checkedList }>
                        {
                            this.state.data && this.state.data.map((item, key) => {
                                return <Checkbox key={key} value={item.floorId}>{item.floorName}</Checkbox>
                            })
                        }
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

export default MCheck;
