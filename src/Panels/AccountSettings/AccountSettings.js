import React from 'react';
import { Button, Spin, message } from 'antd';
import styles from './accountsettings.module.scss'
import { fireBaseServices, firebaseApp } from '../../utils/firebase';
import { ChromePicker } from 'react-color';
import ImageUpload from './ImageUpload';
import { LogoutOutlined } from '@ant-design/icons';



const AccountSettings = ({ user, setUser, loading }) => {
    const { userID, bgImageMobile, bgImageDesktop } = user;

    const handleChange = (e) => {
        setUser({ color: e.hex });
    }

    const handleSave = async () => {
        const { color } = user;
        await fireBaseServices.updateUserDoc({ color });
        message.success('Cambio guardado');
    }

    const handleLogOut = () => {
        console.log('logout');
        firebaseApp.auth().signOut();
    }


    const userUrl = userID && (
        'https://stores.itesa.co/' + userID.replace(/\s/g, '')
    );
    const urlEncoded = encodeURIComponent(userUrl);

    return (
        <div className={styles.AccountSettings}>

            <Button size="small"
                icon={<LogoutOutlined />}
                onClick={handleLogOut}
                className={styles.btnLogOut}
            >
                Cerrar Sesión
            </Button>

            <div className={styles.userUrl}>
                <p>
                    Link a tu negocio:{' '}
                    <a href={userUrl} target="_blank" rel="noopener noreferrer">
                        <span>{userUrl}</span>
                    </a>
                </p>
            </div>

                <Button className={styles.btnWhats}
                    href={`https://api.whatsapp.com/send?text=${urlEncoded}`}
                    target="_blank" rel="noopener noreferrer"
                >
                    Compartir en WhatsApp
                </Button>

            <div style={{ marginTop: "2rem" }}>
                <h3>Imágenes para la aplicación:</h3>
                <ImageUpload images={{ bgImageMobile, bgImageDesktop }} loading={loading} />
            </div>

            <div style={{ marginTop: "2rem" }}>
                <p>Color de Tema:</p>
                <Spin spinning={loading} delay="150" style={{ width: '200px' }}>
                    <ChromePicker
                        width="198px"
                        onChangeComplete={handleChange}
                        color={user.color || '#9146f7'}
                    />
                </Spin>
            </div>

            <div>
                <Button onClick={handleSave} type="primary" className={styles.btnSave} >
                    Guardar Cambios
                </Button>
            </div>

        </div>
    );
};

export default AccountSettings;