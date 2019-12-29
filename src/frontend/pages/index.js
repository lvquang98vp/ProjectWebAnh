import React, { Component } from 'react';
import { Layout, Menu, Input } from 'antd';
import Image from '../components/Image';
import Link from '../components/Link';
import axios from 'axios';
import config from '../config';
import styled, { css } from 'styled-components';

const { Header, Content, Footer } = Layout;

class Index extends Component {
  state = {
    images: [],
    searchString: ''
  };

  componentDidMount() {
    axios.create({ baseURL: config.rootPath })
      .get('api/image/allImage')
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          this.setState({ images: response.data.images });
          console.log(this.state.images);
        }
      })
      .catch(err => console.log(err));
  }

  _handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({ searchString: event.target.value});
  }

  render() {
    const filterImage = this.state.images.filter(img => 
      img.title.includes(this.state.searchString) || 
      img.hashtagImage.includes(this.state.searchString)
    );
    return (
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
            <Menu.Item >
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Input
              style={{ marginTop: 64 }}
              placeholder="input search text"
              onChange={this._handleSearch}
              style={{ width: 500 }} />
            <Image images={filterImage} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Upload Image Created by PhuNX</Footer>
      </Layout>
    );
  }
};
export default Index;