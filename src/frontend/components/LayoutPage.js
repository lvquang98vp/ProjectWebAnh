import React from 'react';
import { Layout, Menu, Input } from 'antd';
import LinkA from './Link';
import styled, { css } from 'styled-components';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const LayoutPage = ({ children }) => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><LinkA href='/'>Home</LinkA></Menu.Item>
                    <Menu.Item key="2"><LinkA href='/upload'>Upload</LinkA></Menu.Item>
                    <Menu.Item key="3"><LinkA href='/login'>Login</LinkA></Menu.Item>
                    <Menu.Item key="4"><LinkA href='/register'>Register</LinkA></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Upload Image Created by PhuNX</Footer>
        </Layout>
    );
}

export default LayoutPage;