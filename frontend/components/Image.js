import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import Link from 'next/link';

const { Meta } = Card;
const PostLink = ({props, children}) => (
    <Link href="/image/[id]" as={`/image/${props.id}`}>
        {/* <a>{children}</a> */}
    </Link>
);

class Image extends Component {
    render() {
        const allImages = this.props.images.map(info => {
            return (
                <Col key={info._id} span={6}>
                    <Link href={`/image?id=${info.id}`} as={`/image/${info.id}`}>
                    {/* <PostLink id={info.id}> */}
                        <Card
                            hoverable
                            style={{ width: '' }}
                            cover={<img alt="example" className="img-fluid" src={info.urlImage} />}
                            actions={[
                                <a href={`https://i.imgur.com/download/${info.id}.png`}><Button type="primary" shape="circle" icon="download"></Button></a>]}
                        >
                            <Meta title={info.title} description={info.description}></Meta>
                            <Meta description={'#' + info.hashtagImage}></Meta>
                        </Card>
                    {/* </PostLink>                       */}</Link>
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