import React, { Component } from 'react';
import './index.less';
import MCheck from '../m-check/m-check';
import SBase from '../s-base/s-base';

class SMyBuilding extends Component {
    
    render() {
        let { style, className = '' } = this.props;
        className += ' component-my-building';

        return (
            <SBase content={ <MCheck subData={ this.props.subData }/> } name="我的楼宇" className={ className } style={style}/>
        )
    }
}

export default SMyBuilding;