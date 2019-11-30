import React from 'react';
import styled, { css } from 'styled-components';
import UploadForm from '../components/UploadForm';
import { Layout, Menu, Input, Button } from 'antd';

import Link from '../components/Link';


const { Header, Content, Footer } = Layout;
const { Search } = Input;
const StyledUploadForm = styled.div`
    .upload-list-inline .ant-upload-list-item {
        float: left;
        width: 200px;
        margin-right: 8px;
    }
    .upload-list-inline .ant-upload-animate-enter {
        animation-name: uploadAnimateInlineIn;
    }
    .upload-list-inline .ant-upload-animate-leave {
        animation-name: uploadAnimateInlineOut;
    }
`;

export default () => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link href='/'>Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link href='/upload'>Upload</Link></Menu.Item>
                    <Menu.Item key="3"><Link href='/login'>Login</Link></Menu.Item>
                    <Menu.Item key="4"><Link href='/register'>Register</Link></Menu.Item>
                    <Menu.Item ><Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 500 }}
                    /></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <StyledUploadForm>
                        <UploadForm />
                    </StyledUploadForm>
                    <Button type='primary' style={{ marginTop: 30 }}>Submit</Button>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Upload Image Created by PhuNX</Footer>
        </Layout>
    );
}
