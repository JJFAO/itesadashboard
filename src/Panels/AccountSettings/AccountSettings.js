import React from 'react';
import { Button, Input } from 'antd';
import AnchorLink from 'antd/lib/anchor/AnchorLink';
import styles from './accountsettings.module.scss'

const AccountSettings = ({ userID }) => {

    const handleClick = () => {
        console.log('w');
    }

    const handleSave = () => {
        console.log('s');
    }
    const userUrl = userID && userID.replace(/\s/g, '').toLowerCase();
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
                <Input type="color" className={styles.inputColor}></Input>
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