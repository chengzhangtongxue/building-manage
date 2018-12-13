import React, { Component } from 'react';
import './App.less';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <div className="app">
                    {this.props.children}
                </div>
            </LocaleProvider>
        );
    }
}

export default App;
