import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';
import { getCollection, collectionSnapshot, docSet } from "../../utils/firebase";
import styles from './tableorders.module.scss';
import DropDownStates from '../Components/DropDownTypes/DropDownStates';

const ordersCollection = getCollection('orders');
const shopsCollection = getCollection('shops');


/* --TableOrders Component-- */

const TableOrders = ({ userID }) => {
    const [orders, setOrders] = useState([])
    const [shops, setShops] = useState([])

    useEffect(() => {
        collectionSnapshot(userID, ordersCollection, setOrders)
        collectionSnapshot(userID, shopsCollection, setShops)
    }, [userID])

    const prodsMap = (prods) => (prods.map(prod => (
        <Tag key={prod.name}>{`${prod.name}  x${prod.quantity}`}</Tag>
    )));

    const handleState = (id) => (e) => {
        const state = Number(e.key);
        editProps(id, { state });
    }

    const editProps = (id, prop) => {
        docSet(ordersCollection, id, prop);
    }


    const columns = [
        {
            title: 'Numero de pedido',
            dataIndex: 'orderNum',
            key: 'orderNum',
            render: (orderNum) => (
                <span> {orderNum} </span>
            )
        }, {
            title: 'Cliente',
            dataIndex: 'clientName',
            key: 'clientName',
            render: (clientName) => (
                <span> {clientName} </span>
            )
        }, {
            title: 'Modalidad',
            dataIndex: 'type',
            key: 'type',
            render: (type) => (
                <span>
                    {type === 0 && 'Envío'}
                    {type === 1 && 'Takeaway'}
                </span>
            )
        },
        {
            title: 'Total',
            className: styles.columnMoney,
            dataIndex: 'total',
            key: 'total',
            render: (total) => (
                <span className={styles.wPrice}>$ {total} </span>
            )
        }, {
            title: 'Tienda',
            dataIndex: 'shop',
            key: 'shop',
            render: (shopID) => { 
                const shopOrder = shops.find( shop => shop.key === shopID)
                return <span> {shopOrder && shopOrder.name} </span>
            }
        }, {
            title: 'Dirección',
            dataIndex: 'address',
            key: 'address',
            render: (address) => (
                <span> {address} </span>
            )
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email) => (
                <span> {email} </span>
            )
        }, {
            title: 'Teléfono',
            dataIndex: 'phone',
            key: 'phone',
            render: (phone) => (
                <span> {phone} </span>
            )
        }, {
            title: 'Fecha',
            dataIndex: 'date',
            key: 'date',
            render: (date) => (
                <span> {date} </span>
            )
        }, {
            title: 'Estado',
            dataIndex: 'state',
            key: 'state',
            render: (state, {key}) => (
                <DropDownStates state={state} id={key} handleState={handleState} />
            )
        },
    ];


    return (
        <div className={styles.tableContent}>
            <div className={styles.scrollTable}>
                <Table loading={{ spinning: !orders.length, delay: 200 }}
                    dataSource={orders}
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => (
                            prodsMap(record.products)
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default TableOrders;