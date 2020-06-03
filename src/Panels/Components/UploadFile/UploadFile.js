import React from 'react'
import { Upload, Spin, Button, message } from 'antd';
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import styles from './uploadfile.module.scss'

export default function UploadFile(props) {
    const { name, image, loading, beforeUpload, handleUpload, handleChange, style, icon: Icon } = props;
    console.log(props);


    return (
        <Upload
            accept="image/jpeg, image/png"
            name={name}
            listType="picture-card"
            className={styles.UploadFile + 'avatar-uploader'}
            showUploadList={false}
            customRequest={handleUpload}
            beforeUpload={(file) => beforeUpload(file, message)}
            onChange={handleChange}
        >
            <Spin spinning={loading}>
                <div className={styles.userImgContainer} style={style}>
                    {image ?
                        <img src={image} alt="Imagen cargada" className={styles.userImg} />
                        :
                        <Icon className={styles.placeholder} />
                    }
                </div>
            </Spin>
            <Button style={{ width: "11rem" }}>
                {loading ? <LoadingOutlined /> : <UploadOutlined />}
                Cargar Imagen
            </Button>
        </Upload>
    );
}
