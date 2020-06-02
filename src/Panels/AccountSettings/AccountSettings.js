import React, { useEffect } from 'react';
import { Button, Spin } from 'antd';
import styles from './accountsettings.module.scss'
import { fireBaseServices } from '../../utils/firebase';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import ImageUpload from './ImageUpload';



const AccountSettings = ({ user, setUser, loading }) => {
    const { userID } = user;

    const handleChange = (e) => {
        setUser({ color: e.hex });
    }

    const handleSave = () => {
        const { color } = user;
        fireBaseServices.updateUserDoc({ color })
    }


    const userUrl = userID && (
        'https://stores.itesa.co/' + userID.replace(/\s/g, '')
    );
    const urlEncoded = encodeURIComponent(userUrl);

    return (
        <div className={styles.AccountSettings}>

            <div className={styles.userUrl}>
                <p>
                    Link a tu negocio:{' '}
                    <a href={userUrl} target="_blank" rel="noopener noreferrer">
                        <span>{userUrl}</span>
                    </a>
                </p>
            </div>

            <div>
                <Button className={styles.btnWhats}
                    href={`https://api.whatsapp.com/send?text=${urlEncoded}`}
                    target="_blank" rel="noopener noreferrer"
                >
                    Compartir en WhatsApp
                </Button>
            </div>

            <div style={{ marginTop: "2rem" }}>
                <p>Imagen para la aplicación:</p>
                <ImageUpload imageUrl={user.imageUrl} loading={loading} />
            </div>

            <div style={{ marginTop: "2rem" }}>
                <p>Color de Tema:</p>
                <Spin spinning={loading} delay="150" style={{width: '200px'}}>
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