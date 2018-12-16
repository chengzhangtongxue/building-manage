import React, { Component } from 'react';
import { mAxios } from '../../util';
import { url_province_city_county } from '../../url/url';
import { Select, Row, Col } from 'antd';
const Option = Select.Option;

class ProvinceCityCounty extends Component {
    state = {
        provinces: [],
        citys: [],
        countys: []
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

        });
    }
    componentDidMount() {
        this.getProvinces();
    }
    render() {
        return (
            <React.Fragment>
                <Row gutter={10}>
                    <Col span={8}>
                        <Select>
                            <Option value="">请选择省</Option>
                            {
                                // this.state.provinces && 
                            }
                        </Select>
                    </Col>
                    <Col  span={8}>
                    <Select>
                            <Option value="">请选择市</Option>
                    </Select>
                    </Col>
                    <Col span={8}>
                    <Select>
                            <Option value="">请选择省</Option>
                    </Select>
                    </Col>
                </Row>
                   
            </React.Fragment>
        )
    }
}

export default ProvinceCityCounty;