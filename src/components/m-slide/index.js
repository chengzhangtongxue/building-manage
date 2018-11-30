import React from 'react';
import './index.less';

/**
 * 侧滑组件
 */
class MSlide extends React.Component {
    getClassName = () => {
        if(this.props.className.active) {
            return 'component-slide active';
        }
        return 'component-slide';
    }
    componentDidMount() {
        document.getElementsByClassName('component-slide')[0].addEventListener('click',(e) => {
            // e.preventDefault();
            e.stopPropagation();
        } ,true)
    }
    render() {
        return (
            <div className={ this.getClassName() } >
                { this.props.children }
            </div>
        );
    }
}

export default MSlide;