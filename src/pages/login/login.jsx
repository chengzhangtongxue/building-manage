import React, { Component } from 'react';
import './index.less';
import { mAxios, setCookie } from '@/util';
import { url_login } from '../../url/url';
import { Button, Card, Form, Input, Icon  } from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component {
    state = {
        loading: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let errs = 0;
        this.props.form.validateFields((err, values) => {
            if (err) {
                errs++;
            }
        });
        if(errs) {
            return;
        }
        
        const { userName, passWord } = this.props.form.getFieldsValue();

        this.setState({
            loading: true
        });
        mAxios.ajax({
            url: url_login,
            data: {
                userName: userName,
                passWord: passWord
            }
        }).then(res => {
            setCookie('token', res.resultData.token, 1);
            // setCookie('token', 2, 1);
            // window.setTimeout(() => {
                console.log(this.props.history.push);
                this.props.history.push({ 
                    pathname : '/admin'
                });
            // }, 0);
        }).catch(e => {
            console.log('系统错误');
            console.log(e);
        }).finally(res => {
            // this.setState({
            //     loading: false
            // });
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <h1 className="title">楼宇管理系统</h1>
                <Card title="登陆">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('passWord', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <Button type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">登陆</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}
const Login = Form.create()(LoginForm);
export default Login;
