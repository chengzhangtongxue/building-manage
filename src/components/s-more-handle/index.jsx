import React, { Component } from 'react';
import './index.less';
import SBase from '../s-base/s-base';

class SMoreHandle extends Component {
    
    render() {
        let { style={}, className=''} = this.props;
        className += ' component-more-handle';

        return (
            <SBase content={ <ExportAndImport _exportData={this.props.exportData} _importData={this.props.importData}/> } name="更多" className={ className } style={style}/>
        );
    }
}

export default SMoreHandle;

class ExportAndImport extends Component {
    render() {
        return (
            <div className="export-and-import">
                <div className="item" onClick={ this.props._importData }>导入</div>
                <div className="item" onClick={ this.props._exportData }>导出</div>
            </div>
        );
    }
}