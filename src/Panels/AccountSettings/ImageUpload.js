import React from "react";
import { Upload, message, Button, Spin } from 'antd';
import { LoadingOutlined, UploadOutlined, FileImageOutlined } from '@ant-design/icons';
import { fireBaseServices } from "../../utils/firebase";
import styles from './accountsettings.module.scss'
import { beforeUpload, getBase64 } from "../../utils/uploadFiles";
import UploadFile from "../Components/UploadFile/UploadFile";

const img1 = 'bgImageMobile'
const img2 = 'bgImageDesktop'
export default class ImageUpload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            [img1]: {
                name: 'bgImageMobile',
                image: '',
                loading: true,
            },
            [img2]: {
                name: 'bgImageDesktop',
                image: '',
                loading: true,
            },
        };
    }

    async componentDidMount() {
        const { images, loading } = this.props;
        const { bgImageMobile, bgImageDesktop } = images;
        this.setState({
            [img1]: { ...this.state[img1], image: bgImageMobile, loading },
            [img2]: { ...this.state[img2], image: bgImageDesktop, loading }
        });
    }

    handleUpload = async (e) => {
        const { file, filename } = e;
        // const imgExt = e.file.type === 'image/jpeg' ? '.jpg' : '.png';
        this.setState({ [filename]: { ...this.state[filename], loading: true } });
        const imageRef = fireBaseServices.getImageStorageRef().child(filename);
        const uploadTask = await imageRef.put(file);
        const imageUrl = await uploadTask.ref.getDownloadURL();
        const image = await getBase64(file, message);

        await fireBaseServices.updateUserDoc({ [filename]: imageUrl });
        this.setState({ [filename]: { ...this.state[filename], image } });

        setTimeout(() => {
            this.setState({ [filename]: { ...this.state[filename], loading: false } });
        }, 300);
    }


    render() {
        const handleUpload = this.handleUpload;
        const props = { beforeUpload, handleUpload };

        return (
            <>
                <p style={{marginTop: '1.5rem'}}>Para pantallas de celular:</p>
                <UploadFile {...props} {...this.state[img1]} />
                <p style={{marginTop: '1rem'}}>Para pantallas de PC:</p>
                <UploadFile {...props} {...this.state[img2]} />
            </>
        );
    }
}

