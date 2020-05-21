import React, {useEffect} from 'react';
import {Menu, Drawer} from "antd";
import {UserOutlined, ShoppingCartOutlined, HomeOutlined, InboxOutlined} from '@ant-design/icons';
import itesa from '../images/logo-itesa.png'
import styles from './drawer.module.scss'
export function DrawerMobile({setItemOpen, mobileOpen, setMobileOpen}) {

    useEffect(() => {

    });
    
    const handleClick = e => {
        setItemOpen(e.key);
    };

    return (
        <Drawer
            title={<img className={styles.itesaLogo} src={itesa} alt="logo de itesa"/>}
            placement="left"
            closable={true}
            onClose={()=>{setMobileOpen(false)}}
            visible={mobileOpen}
        >
            <Menu
                onClick={handleClick}
                mode="inline"
                defaultSelectedKeys={['pedidos']}
                style={{ height: '100%' }}
            >
                <Menu.Item icon={<InboxOutlined />} key="pedidos">Pedidos</Menu.Item>
                <Menu.Item icon={<HomeOutlined />} key="tiendas">Tiendas</Menu.Item>
                <Menu.Item icon={<ShoppingCartOutlined />} key="Productos">Productos</Menu.Item>
                <Menu.Item icon={<UserOutlined />} key="Mi cuenta">Mi cuenta</Menu.Item>
            </Menu>
        </Drawer>
    )
}