import React, {useState, useEffect} from 'react';
import {Breadcrumb, Button, Layout, PageHeader} from "antd";
import styles from './theapp.module.scss';
import logo from '../images/logogv.png'
import itesa from '../images/logo-itesa.png'
import {Drawer as TheDrawer} from "../Drawers/Drawer";
import {DrawerMobile} from "../Drawers/DrawerMobile";
import {MenuOutlined} from '@ant-design/icons';
import TableShops from '../Panels/TableShops/TableShops';
import TableProducts from '../Panels/TableProducts/TableProducts';
import TableOrders from '../Panels/TableOrders/TableOrders';
import AccountSettings from '../Panels/AccountSettings/AccountSettings';

const { Content } = Layout;

export function TheApp({user}) {

    const [itemOpen, setItemOpen] = useState('pedidos');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {

    },[]);

    const {userID} = user;
    
    const contentBody =  (
        (itemOpen === 'pedidos' && <TableOrders userID={userID} />) ||
        (itemOpen === 'tiendas' && <TableShops userID={userID} />) ||
        (itemOpen === 'Productos' && <TableProducts userID={userID} />) ||
        (itemOpen === 'Mi cuenta' && <AccountSettings userID={userID} />)
    )
    return (
        <div className={styles.theHome}>
            
            <PageHeader
                className={styles.appBar}
                backIcon={false}
                ghost={false}
                onBack={() => null}
                title={
                    <span>
                        <Button className={styles.hambButton}
                            onClick={()=>setMobileOpen(!mobileOpen)}
                            type="primary" ghost={true}
                            icon={<MenuOutlined />}
                        />
                        <img src={logo} className={styles.title} alt="logo getvital"/>
                    </span>
                }
                extra={
                    <a className={styles.itesaLogo} href={'https://itesa.co'}>
                        <img src={itesa} className={styles.title} alt="logo de itesa"/>
                    </a>
                }
            />
            <Layout style={{backgroundColor: '#ffffff'}}>
                <TheDrawer setItemOpen={setItemOpen}/>
                <DrawerMobile setItemOpen={setItemOpen} setMobileOpen={setMobileOpen} mobileOpen={mobileOpen}/>
                <Content className={styles.content}>
                    <Breadcrumb className={styles.breadcrumb}>
                        <Breadcrumb.Item>{itemOpen}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div>
                    {contentBody}
                    </div>
                </Content>
            </Layout>

        </div>
    )
}