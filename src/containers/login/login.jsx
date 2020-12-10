import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { createDemo1Action, createDemo2Action } from '../../redux/action_creators/test_actions'
import './css/login.less';
import logo from './imgs/logo.png';

class Login extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    // 点击登录按钮的回调
    onFinish = (values) => {
        alert(`登录成功，账号为：${values.username}，密码为：${values.password}`);
    };

    pwdValidator = (rule, value) => {
        if (!value) {
            // 提示必须输入密码
            return Promise.reject("密码不能为空！");
        } else if (value.length > 12) {
            // 提示密码必须小于12位
            return Promise.reject("密码长度不能大于12位！");
        } else if (value.length < 5) {
            // 提示密码必须大于4位
            return Promise.reject("密码长度不能小于5位！");
        } else if (!(/^\w+$/).test(value)) {
            // 用户名只能由英文、数字、下划线组成
            return Promise.reject("密码只能由英文、数字、下划线组成！");
        } else {
            return Promise.resolve();
        }
    }

    render() {
        return (
            <div className="login">
                <header>
                    <img src={logo} alt="logo" />
                    <h1>二手车管理系统</h1>
                </header>
                <section>
                    <h1>用户登录</h1>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '用户名不能为空！',
                                },
                                {
                                    max: 12,
                                    message: '用户名长度不能大于12位！'
                                },
                                {
                                    min: 5,
                                    message: '用户名长度不能小于5位！'
                                },
                                {
                                    pattern: /^\w+$/,
                                    message: '用户名只能由英文、数字、下划线组成！'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: this.pwdValidator
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>

                </section>
            </div>
        )
    }
}

export default connect(
    state => ({ test: state.test }),
    {
        demo1: createDemo1Action,
        demo2: createDemo2Action
    }
)(Login);