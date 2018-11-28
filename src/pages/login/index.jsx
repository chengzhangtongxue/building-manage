import React, { Component } from 'react';
import './index.less';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    toLogin = () => {
        axios.get('/data/login.json').then(res => {
            if(res.data) {
                alert('登陆成功');
                this.props.history.push({ 
                    pathname : '/admin'
                });
            }
        });
        
    }
    render() {
        return (
            <div className="login">
                这是登陆页面 login
            
                <Button type="primary" onClick={this.toLogin}>登陆</Button>
            </div>
        );
    }
}

export default Login;