import React from 'react';
import { url_select_list } from '../../url/url';
import { mAxios } from '../../util';
import { Select } from 'antd';
const Option = Select.Option;

/**
 * 楼座 单位 = 幢 / 栋 / ...
 */
class GalleryUnit extends React.Component {
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
    componentDidMount() {
        mAxios.ajax({
            url: url_select_list,
            data: {
                code: 'dic.gallery'
            }
        }).then(data => {
            this.setState({
                list: data.resultData
            });
        });
    }

    render() {
        return (
            <Select
                value={this.state.value}
                onChange={this.onChangeHandle}
                >
                <Option value="">请选择</Option>
                {
                    this.state.list.map(item => <Option key={item.id}>{item.dictionaryName}</Option>)
                }
            </Select>
        )
    }
}

export default GalleryUnit;