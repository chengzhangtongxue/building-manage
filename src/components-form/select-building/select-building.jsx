import React from 'react';
import { mAxios } from '../../util';
import { url_building_name } from '../../url/url';
import { Select } from 'antd';
const Option = Select.Option;

class SelectBuildingForm extends React.Component {
    constructor(props) {
        super(props);
     
        const value = props.value || '';
        this.state = {
            selectValue: value,
            list: []
        }
    }
    componentDidMount() {
        mAxios.ajax({
            url: url_building_name,
        }).then(data => {
            const list = data.resultData;
            this.setState((state, props) => {
                return {
                    list
                }
            });
        });
    }
    handleCurrencyChange = (currency) => {
        this.setState({
            selectValue: currency
        });
        this.props.onChange(currency)
        this.props.onChangeHandle && this.props.onChangeHandle(currency);
    }
    render() {
        return (
            <Select 
                value={this.state.selectValue}
                onChange={this.handleCurrencyChange}
                >
                <Option value="">请选择楼宇名称</Option>
                {
                    this.state.list.map(item => <Option key={item.floorId} value={item.floorId}>{item.floorName}</Option>)
                }
            </Select>
        )
    }
}

export default SelectBuildingForm;