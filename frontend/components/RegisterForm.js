import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledRegisterForm = styled.div`
    .register-form {
        max-width: 600px;
        margin: auto;
    }
    .register-form-button {
        width: 100%;
}
`;

const RegisterForm = () => {
    return (
        <StyledRegisterForm>
            <Form className="register-form">
                <h2 style={{ textAlign: "center" }}>Register</h2>
                <Form.Item label="Username">
                    <Input />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Confirm Password" >
                    <Input.Password />
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