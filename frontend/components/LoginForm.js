import React from 'react';

import { Form, Input, Icon, Button } from 'antd';
import Link from '../components/Link';
import styled from 'styled-components';

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
    return (
        <StyledLoginForm>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <Form className="login-form">
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
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