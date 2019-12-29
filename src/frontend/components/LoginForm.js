import React, { useState } from 'react';

import { Form, Input, Icon, Button } from 'antd';
import Link from '../components/Link';
import styled from 'styled-components';
import axios from 'axios';
import config from '../config';

const StyledLoginForm = styled.div`
    .login-form {
        max-width: 300px;
        margin: auto;
    }
    .login-form-button {
        width: 100%;
    }
`;

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username: " + username)
        const userData = {
            username: username,
            password: password,
        };
        axios.create({ baseURL: config.rootPath })
            .post('api/auth/login', userData)
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    window.alert("Login successful");
                    window.location.href = '/upload';
                }
            })
            .catch(err => {
                console.log(err);
                window.alert("Username not found or Wrong password");
            });
    }

    return (
        <StyledLoginForm>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        required
                        onChange={(event) => { setUsername(event.target.value); }}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(event) => { setPassword(event.target.value); }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link href="/register">register now!</Link>
                </Form.Item>
            </Form>
        </StyledLoginForm>
    );
}

export default LoginForm;