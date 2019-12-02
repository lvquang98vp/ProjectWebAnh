import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import Link from '../components/Link';
import axios from 'axios';
import config from '../config';

const { Meta } = Card;

class Image extends Component {
    state = {
        images: []
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
    render() {
        const allImages = this.state.images.map(info => {
            return (
                <Col key={info._id} span={6}>
                    <a href={info.urlImage}>
                        <Card                          
                            hoverable
                            style={{ width: '' }}
                            cover={<img alt="example" className="img-fluid" src={info.urlImage} />}
                        >
                            <Meta title={info.title} description={info.description}></Meta>
                        </Card>
                    </a>
                </Col>
            );
        })
        return (
            <Row gutter={16} >
                {allImages}
            </Row>
        );
    };
}

export default Image;