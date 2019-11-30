import React from 'react';
import { Layout, Menu, Input } from 'antd';
import Image from '../components/Image';
import Link from '../components/Link';
import LayoutPage from '../components/LayoutPage'
import styled, { css } from 'styled-components';
import RegisterForm from '../components/RegisterForm'

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default () => (
    <LayoutPage>
        <div style={{ background: '#fff', padding: 24, minHeight: 380, }}>
            <RegisterForm />
        </div>
    </LayoutPage>
);
