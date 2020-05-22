import React, { useEffect } from 'react';
import { Button, Spin } from 'antd';
import styles from './accountsettings.module.scss'
import { getCollection, updateDoc } from '../../utils/firebase';
import { useState } from 'react';
import { ChromePicker  } from 'react-color';

const userCollection = getCollection('users');


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

    const handleClick = () => {
        console.log('whatsapp');
    }

    const handleChange = (e) => {
        setUser({ color: e.hex });
    }

    const handleSave = () => {
        const { color } = user;
        updateDoc(userCollection, userID, { color })
    }


    const userUrl = userID && userID.replace(/\s/g, '');

    return (
        <div className={styles.AccountSettings}>
            <div className={styles.userUrl}>
                <p>
                    Link a tu negocio:{' '}
                    <a href={`http://checkout.itesa.co/${userUrl}`} target="_blank" rel="noopener noreferrer">
                        <span>http://checkout.itesa.co/{userUrl}</span>
                    </a>
                </p>
            </div>
            <div>
                <Button onClick={handleClick} className={styles.btnWhats}>
                    Compartir en WhatsApp
                </Button>
            </div>
            <div>
                <p>Color de Tema:</p>
                <div style={{ display: 'flex' }}>
                    <Spin spinning={spin} delay="150">
                        <ChromePicker
                            width="180px"
                            onChangeComplete={handleChange}
                            color={user.color || '#9146f7'}
                        />
                        {/* <input id='color' type="color"
                            className={styles.inputColor}
                            value={user.color}
                            onChange={handleChange}
                        ></input> */}
                    </Spin>
                </div>

            </div>
            <div>
                <Button onClick={handleSave} type="primary" className={styles.btnSave}>
                    Guardar Cambios
                </Button>
            </div>
        </div>
    );
};

export default AccountSettings;