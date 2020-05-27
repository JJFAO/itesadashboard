import React, { useState, useEffect } from 'react';
import { Breadcrumb, Button, Layout, PageHeader } from "antd";
import styles from './theapp.module.scss';
import logo from '../images/logogv.png'
import itesa from '../images/logo-itesa.png'
import { Drawer as TheDrawer } from "../Drawers/Drawer";
import { DrawerMobile } from "../Drawers/DrawerMobile";
import { MenuOutlined } from '@ant-design/icons';
import TableShops from '../Panels/TableShops/TableShops';
import TableProducts from '../Panels/TableProducts/TableProducts';
import TableOrders from '../Panels/TableOrders/TableOrders';
import AccountSettings from '../Panels/AccountSettings/AccountSettings';
import { fireBaseServices } from '../utils/firebase';

const { Content } = Layout;


export function TheApp({ user }) {
    const { userID } = user;
    const [itemOpen, setItemOpen] = useState('pedidos')
    const [mobileOpen, setMobileOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState({orders: true, shops: true, products: true})
    useEffect(() => {
        const unSubOrders = fireBaseServices.getOrdersSnapshot(setOrders, setLoading)
        const unSubShops = fireBaseServices.getShopsSnapshot(setShops, setLoading)
        const unSubProducts = fireBaseServices.getProductsSnapshot(setProducts, setLoading)
        return () => {
            unSubOrders && unSubOrders();
            unSubProducts && unSubProducts();
            unSubShops && unSubShops();
        }
    }, [userID])


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
                            onClick={() => setMobileOpen(!mobileOpen)}
                            type="primary" ghost={true}
                            icon={<MenuOutlined />}
                        />
                        <img src={logo} className={styles.title} alt="logo getviral" />
                    </span>
                }
                extra={
                    <a className={styles.itesaLogo} href={'https://itesa.co'}>
                        <img src={itesa} className={styles.title} alt="logo de itesa" />
                    </a>
                }
            />

            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TheDrawer setItemOpen={setItemOpen} />
                <DrawerMobile setItemOpen={setItemOpen} setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
                <Content className={styles.content}>
                    <Breadcrumb className={styles.breadcrumb}>
                        <Breadcrumb.Item>{itemOpen}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div>
                        {
                            ((itemOpen === 'pedidos') &&
                                <TableOrders
                                    loading={loading.orders}
                                    orders={orders}
                                    shops={shops}
                                />
                            ) ||
                            ((itemOpen === 'tiendas') &&
                                <TableShops
                                    loading={loading.shops}
                                    userID={userID}
                                    shops={shops}
                                    setShops={setShops}
                                    products={products}
                                />
                            ) ||
                            ((itemOpen === 'Productos') &&
                                <TableProducts
                                    loading={loading.products}
                                    userID={userID}
                                    products={products}
                                    setProducts={setProducts}
                                    shops={shops}
                                />
                            ) ||
                            ((itemOpen === 'Mi cuenta') &&
                                <AccountSettings userID={userID} />
                            )
                        }
                    </div>
                </Content>
            </Layout>

        </div>
    )
}