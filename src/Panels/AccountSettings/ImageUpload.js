import React from "react";
import { Upload, message, Button, Spin } from 'antd';
import { LoadingOutlined, UploadOutlined, FileImageOutlined } from '@ant-design/icons';
import { fireBaseServices } from "../../utils/firebase";
import styles from './accountsettings.module.scss'
import { beforeUpload, getBase64 } from "../../utils/uploadFiles";


export default class ImageUpload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            imageUrl: '',
        };
    }

    async componentDidMount() {
        const { imageUrl, loading } = this.props;

        this.setState({ imageUrl });
        this.setState({ loading });
    }

    handleUpload = async (e) => {
        // const imgExt = e.file.type === 'image/jpeg' ? '.jpg' : '.png';
        this.setState({ loading: true });
        const imageRef = fireBaseServices.getImageStorageRef();
        const uploadTask = imageRef.put(e.file);
        const imageUrl = await uploadTask.snapshot.ref.getDownloadURL();
        const image = await getBase64(e.file, message);
        await fireBaseServices.updateUserDoc({ imageUrl })
        this.setState({ imageUrl: image });

        setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    }


    render() {
        const { imageUrl, loading } = this.state;

        return (
            <Upload
                accept="image/jpeg, image/png"
                name="background"
                listType="picture-card"
                className={styles.AccountSettings + 'avatar-uploader'}
                showUploadList={false}
                customRequest={this.handleUpload}
                beforeUpload={(file) => beforeUpload(file, message)}
                onChange={this.handleChange}
            >
                <Spin spinning={loading}>
                    <div className={styles.userImgContainer}>
                        {imageUrl ?
                            <img src={imageUrl} alt="Imagen cargada" className={styles.userImg} />
                            :
                            <FileImageOutlined className={styles.placeholder} />
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
}

