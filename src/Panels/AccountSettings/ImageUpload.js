import React from "react";
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, UploadOutlined, FileImageOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('Solamente archivos JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('La imagen debe ser menor a 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class ImageUpload extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        console.log(info.file.status);
        
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const { imageUrl } = this.state;

        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="Imagen cargada" style={{ width: '100%', paddingBottom: '0.5rem' }} /> : <FileImageOutlined style={{fontSize: '3.5rem', padding: '1.5rem', color: '#9146f7c2'}} />}
                <Button style={{width: "11rem"}}>
                    {this.state.loading ? <LoadingOutlined /> : <UploadOutlined />}
                    Cargar Imagen
                </Button>
            </Upload>
        );
    }
}

