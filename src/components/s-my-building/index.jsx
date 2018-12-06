import React, { Component } from 'react';
import './index.less';
import MCheck2 from '../m-check2';
import SBase from '../s-base';

class SMyBuilding extends Component {
    
    render() {
        let { style, className = '' } = this.props;
        className += ' component-my-building';

        return (
            <SBase content={ <MCheck2/> } name="我的楼宇" className={ className } style={style}/>
        )
    }
}

export default SMyBuilding;