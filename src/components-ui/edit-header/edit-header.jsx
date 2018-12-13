import React from 'react';
import './index.less';
import { Button } from 'antd';
import Item from 'antd/lib/list/Item';

class EditHeader extends React.Component {
    render() {
        return (
            <div className="component-ui-edit-header clearfix">
                <h2>{ this.props.title }</h2>
                <div className="btns">
                    {
                        this.props.option && this.props.option.map((item, index) => {
                            return <Button key={index} type={ item.type } className="btn" onClick={ () => { item.handle() } }>{ item.title }</Button>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default EditHeader;