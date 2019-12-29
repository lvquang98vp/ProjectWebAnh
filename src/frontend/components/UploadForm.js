import React, { useState } from 'react';
import { Upload, Button, Icon, Form, Input, message } from 'antd';
import axios from 'axios';
import config from '../config';

const UploadForm = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hashTag, setHashtag] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [fileList, setFileList] = useState([]);

    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        listType: 'picture',
        className: 'upload-list-inline',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
                setFileList(info.fileList);
                let image = new FormData();
                if (info.fileList.length != 0) {
                    image.append("image", info.fileList[0].originFileObj);
                    axios.post('https://api.imgur.com/3/image',
                        image,
                        {
                            headers: {
                                'Authorization': 'Client-ID 546c25a59c58ad7',
                                'Authorization': 'Bearer 892b95a36835afbf82f4c6f9f2ef0564c7168e23'
                            }
                        }
                    )
                        .then(response => {
                            console.log(response.data.data);
                            setId(response.data.data.id);
                            setUrlImage(response.data.data.link);
                        })
                        .catch(err => console.log(err));
                }
            }
        },
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            id: id,
            title: title,
            description: description,
            hashtagImage: hashTag,
            urlImage: urlImage
        };
        console.log(userData);

        axios.create({ baseURL: config.rootPath })
            .post('api/image/addImage', userData)
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    window.alert('Uploaded successfully');
                    window.location.href = '/';
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Upload Image:</h2>
            <Form layout="vertical" onSubmit={handleSubmit}>
                <Form.Item label="Title">
                    <Input
                        required
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }} />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        type="textarea"
                        required
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }} />
                </Form.Item>
                <Form.Item label="Hashtag">
                    <Input
                        required
                        onChange={(event) => {
                            setHashtag(event.target.value);
                        }} />
                </Form.Item>
                <Form.Item>
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UploadForm;