import React from 'react';
import { Layout, Menu, Input } from 'antd';
import Image from '../components/Image';
import Link from '../components/Link';
import styled, { css } from 'styled-components';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
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
        <Image />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Upload Image Created by PhuNX</Footer>
  </Layout>
);
