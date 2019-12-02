import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import config from '../config';

const StyledRegisterForm = styled.div`
    .register-form {
        max-width: 600px;
        margin: auto;
    }
    .register-form-button {
        width: 100%;
}
`;
const { Option } = Select;

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [sex, setSex] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: username,
            password: password,
            nameDisplay: fullname,
            sex: sex
        };
        axios.create({ baseURL: config.rootPath })
            .post('api/user', userData)
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    window.alert("Register successful");
                    window.location.href = '/login';
                }
            })
            .catch(err => console.log(err));
    }

    const log = (a) => {
        console.log(a);
    }
    return (
        <StyledRegisterForm>
            <Form className="register-form" onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center" }}>Register</h2>
                <Form.Item label="Username">
                    <Input
                        required
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }} />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password
                        required
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                </Form.Item>
                <Form.Item label="Full name">
                    <Input
                        required
                        onChange={(event) => {
                            setFullname(event.target.value);
                        }} />
                </Form.Item>
                <Form.Item label="Sex">
                    <Select
                        defaultValue=""
                        style={{ width: 120 }}
                        onChange={(value) => {
                            setSex(value);
                        }}>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Register
                </Button>
                </Form.Item>
            </Form>
        </StyledRegisterForm>
    );
}

export default RegisterForm;