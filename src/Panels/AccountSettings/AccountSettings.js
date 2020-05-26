import React, { useEffect } from 'react';
import { Button, Spin } from 'antd';
import styles from './accountsettings.module.scss'
import { fireBaseServices } from '../../utils/firebase';
import { useState } from 'react';
import { ChromePicker } from 'react-color';

const userCollection = fireBaseServices.getCollectionRef('users');


const AccountSettings = ({ userID }) => {
    const [user, setUser] = useState({ color: '' })
    const [spin, setSpin] = useState(true)

    useEffect(() => {
        if (userID) {
            userCollection.doc(userID).onSnapshot((doc) => {
                const { color } = doc.data();
                setUser({ color });
                setSpin(false);
            })
        }
    }, [userID]);


    const handleChange = (e) => {
        setUser({ color: e.hex });
    }

    const handleSave = () => {
        const { color } = user;
        fireBaseServices.updateUserDoc(userID, { color })
    }


    const userUrl = userID && (
        'http://checkout.itesa.co/' + userID.replace(/\s/g, '')
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
                    href={`https://wa.me/?text=${urlEncoded}`}
                >
                    Compartir en WhatsApp
                </Button>
            </div>
            <div>
                <p>Color de Tema:</p>
                <Spin spinning={spin} delay="150">
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