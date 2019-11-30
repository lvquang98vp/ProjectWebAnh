import React from 'react';
import { Card, Col, Row } from 'antd';
import Link from '../components/Link';

const { Meta } = Card;

const Image = () => {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <Link href="/image/7F1bHq5">
                    <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" className="img-fluid" src="https://i.imgur.com/7F1bHq5.png" />}
                    >
                        <Meta title='Girl' description='abc'></Meta>
                    </Card>
                </Link>
                
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Link href="/image/FnsVq0A">
                    <Card
                        hoverable
                        style={{ width: '' }}
                        cover={<img alt="example" className="img-fluid" src="https://i.imgur.com/FnsVq0A.jpg" />}
                    >
                        <Meta title='Girl' description='abc'></Meta>
                    </Card>
                </Link>
            </Col>
            <Col span={6}>
                <a rel="noopener noreferrer" target='_blank' href='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'>
                    <Card
                        hoverable
                        style={{ width: '' }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title='Girl' description='abc'></Meta>
                    </Card>
                </a>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://t.a4vn.com/2019/01/6/them-phot-chan-dong-jennie-black-pink-bi-dao-lai-facebook-cu-toa-222.jpg" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://t.a4vn.com/2019/01/6/them-phot-chan-dong-jennie-black-pink-bi-dao-lai-facebook-cu-toa-222.jpg" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
        </Row>
    );
}

export default Image;