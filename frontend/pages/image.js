import React from 'react';
import { Card } from 'antd';
import LayoutPage from '../components/LayoutPage';

const { Meta } = Card;

const DetailImage = () => {
    return (
        <LayoutPage>
            <div style={{ background: '#fff', padding: 24, minHeight: 900, }}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" className="img-fluid" src="https://i.imgur.com/7F1bHq5.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </div>
        </LayoutPage>
    );
};

export default DetailImage;