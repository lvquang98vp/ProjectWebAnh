import React from 'react';
import { Upload, Button, Icon, Form, Input } from 'antd';

const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];

const props2 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    // defaultFileList: [...fileList],
    className: 'upload-list-inline',
};

const UploadForm = () => {
    return (
        <div>
            <h2>Upload Image:</h2>
            <Form layout="vertical">
                <Form.Item label="Title">
                    <Input />
                </Form.Item>
                <Form.Item label="Description">
                    <Input type="textarea" />
                </Form.Item>
            </Form>
            <Upload {...props2}>
                <Button>
                    <Icon type="upload" /> Upload
                </Button>
            </Upload>
        </div>
    );
}

export default UploadForm;