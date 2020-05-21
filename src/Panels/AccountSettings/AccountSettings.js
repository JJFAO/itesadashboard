import React, { useEffect } from 'react';
import { Button, Spin } from 'antd';
import styles from './accountsettings.module.scss'
import { getCollection, docSet } from '../../utils/firebase';
import { useState } from 'react';
import { SketchPicker } from 'react-color';

const userCollection = getCollection('users');


const AccountSettings = ({ userID }) => {
    const [user, setUser] = useState({ color: '' });

    useEffect(() => {

        if (userID) {
            userCollection.doc(userID).onSnapshot((doc) => {
                const { color } = doc.data();
                setUser({ color });
            })
        }
    }, [userID]);

    const handleClick = () => {
        console.log('whatsapp');
    }

    const handleChange = (e) => {
        console.log('evento', e);
        setUser({ color: e.target.value });
    }

    const handleSave = () => {
        const { color } = user;
        docSet(userCollection, userID, { color })
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
                    <Spin spinning={!user.color} delay="150">
                        {/* <SketchPicker
                            onChangeComplete={handleChange}
                        /> */}
                        <input id='color' type="color"
                            className={styles.inputColor}
                            value={user.color}
                            onChange={handleChange}
                        ></input>
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