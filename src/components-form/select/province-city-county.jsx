import React, { Component } from 'react';
import { mAxios } from '../../util';
import { url_province_city_county } from '../../url/url';
import { Select, Row, Col } from 'antd';
const Option = Select.Option;

class ProvinceCityCounty extends Component {
    constructor(props) {
        super(props);

        const defaultValue = this.props.value;

        this.state = {
            provinceValue: '',
            provinces: [],
            cityValue:'',
            citys: [],
            countyValue: '',
            countys: []
        }
    }
    // 获取省
    getProvinces() {
        mAxios.ajax({
            url: url_province_city_county,
            data: {
                pId: ''
            }
        }).then(data => {
            this.setState({
                provinces: data.resultData
            });
        });
    }
    // 获取市
    getCitys(cityId) {
        mAxios.ajax({
            url: url_province_city_county,
            data: {
                pId: cityId
            }
        }).then(data => {
            this.setState({
                citys: data.resultData
            });
        });
    }
    // 获取区
    getCountys(countyId) {
        mAxios.ajax({
            url: url_province_city_county,
            data: {
                pId: countyId
            }
        }).then(data => {
            this.setState({
                countys: data.resultData
            });
        });
    }
    onChange = (type, value) => {
        switch(type) {
            case 'province': 
                this.setState({
                    provinceValue: value
                });
                this.getCitys(value);
            break;
            case 'city': 
                this.setState({
                    cityValue: value
                });
                this.getCountys(value)
            break;
            case 'county': 
                this.setState({
                    countyValue: value
                });
            break;
        }
    }
    componentDidMount() {
        this.getProvinces();
    }
    render() {

        return (
            <React.Fragment>
                <Row gutter={10}>
                    <Col span={8}>
                        <Select 
                            value={this.state.provinceValue}
                            onChange={(value) => { this.onChange('province',value) }}
                            >
                            <Option value="">请选择省</Option>
                            {
                                this.state.provinces.map((item) => <Option key={item.id}>{item.name}</Option>)
                            }
                        </Select>
                    </Col>
                    <Col  span={8}>
                    <Select
                        value={this.state.cityValue}
                        onChange={(value) => { this.onChange('city',value) }}
                        >
                        <Option value="">请选择市</Option>
                        {
                            this.state.citys.map((item) => <Option key={item.id}>{item.name}</Option>)
                        }
                    </Select>
                    </Col>
                    <Col span={8}>
                    <Select
                        value={this.state.countyValue}
                        onChange={(value) => { this.onChange('county',value) }}
                        >
                        <Option value="">请选择区</Option>
                        {
                            this.state.countys.map((item) => <Option key={item.id}>{item.name}</Option>)
                        }
                    </Select>
                    </Col>
                </Row>
                   
            </React.Fragment>
        )
    }
}

export default ProvinceCityCounty;