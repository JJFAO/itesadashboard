import React, { useState, useEffect, useRef } from 'react';
import { Breadcrumb, Button, Layout, PageHeader, Badge } from "antd";
import styles from './theapp.module.scss';
import logo from '../images/logogv.png'
import itesa from '../images/logo-itesa.png'
import { Drawer as TheDrawer } from "../Drawers/Drawer";
import { DrawerMobile } from "../Drawers/DrawerMobile";
import { MenuOutlined, BellOutlined } from '@ant-design/icons';
import TableShops from '../Panels/TableShops/TableShops';
import TableProducts from '../Panels/TableProducts/TableProducts';
import TableOrders from '../Panels/TableOrders/TableOrders';
import AccountSettings from '../Panels/AccountSettings/AccountSettings';
import { fireBaseServices } from '../utils/firebase';

const { Content } = Layout;


export function TheApp({ userID }) {
    // const { userID } = user;
    const [itemOpen, setItemOpen] = useState('pedidos')
    const [mobileOpen, setMobileOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [shops, setShops] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState({ orders: true, shops: true, products: true, user: true })
    const [badge, setBadge] = useState(0)
    useEffect(() => {
        const unSubOrders = fireBaseServices.getOrdersSnapshot(setOrders, setLoading)
        const unSubShops = fireBaseServices.getShopsSnapshot(setShops, setLoading)
        const unSubProducts = fireBaseServices.getProductsSnapshot(setProducts, setLoading)
        const unSubUser = fireBaseServices.getUserSnapshot(setUser, setLoading)

        return () => {
            unSubOrders && unSubOrders();
            unSubProducts && unSubProducts();
            unSubShops && unSubShops();
            unSubUser && unSubUser();
        }
    }, [userID])

    const prevCount = usePrevious(orders.length);
    useEffect(() => {
        let count = 0;
        orders.forEach(o => { if (!o.state) { count += 1; } })
        const newOrders = orders.length - prevCount;
        if (prevCount === 0) {
            setBadge(count);
        } else if (newOrders) {
            setBadge(b => b + newOrders);
        } else {
            setBadge(b => (b > count) ? (count) : b)
        }
    }, [orders, prevCount])

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
                    <>
                        <a className={styles.itesaLogo} href={'https://itesa.co'}>
                            <img src={itesa} className={styles.title} alt="logo de itesa" />
                        </a>
                        <Button shape="circle" type="link"
                            onClick={() => setBadge(0)}
                            icon={
                                <Badge count={badge}>
                                    <BellOutlined style={{ fontSize: '1.5rem' }} />
                                </Badge>}
                        />
                    </>
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
                                    setBadge={setBadge}
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
                                <AccountSettings user={user} setUser={setUser} loading={loading.user} />
                            )
                        }
                    </div>
                </Content>
            </Layout>

        </div>
    )
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}