import React from 'react';
import { url_building_gallery } from '../../url/url';
import { mAxios } from '../../util';
import { Select } from 'antd';
const Option = Select.Option;

/**
 * 选择 楼座 =  A栋 / B栋 / ...
 */
class Gallery extends React.Component {
    currentfloorId = "";
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || '',
            list: []
        }
    }
    onChangeHandle = (value) => {
        this.setState({
            value
        });
        this.props.onChange(value);
    }
    componentWillReceiveProps(props) {
        if(props.floorId === this.currentfloorId) {
            return false;
        } else {
            this.currentfloorId = props.floorId;
            this.setState({
                list: [],
                value: ''
            });
        }
        
        this.init(props.floorId);
        return true;
    }
    init(floorId = this.props.floorId) {
        this.state.list.length <=0 && mAxios.ajax({
            url: url_building_gallery,
            data: {
                floorId: floorId || ''
            }
        }).then(data => {
            this.setState({
                list: data.resultData
            });
        });
    }
    componentDidMount() {
        // this.init();
    }


    render() {
        return (
            <Select
                value={this.state.value}
                onChange={this.onChangeHandle}
                >
                <Option value="">请选择</Option>
                {
                    this.state.list.map(item => <Option key={item.galleryId}>{item.galleryName}{item.meteringUnit}</Option>)
                }
            </Select>
        )
    }
}

export default Gallery;