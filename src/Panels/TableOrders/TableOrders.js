import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import {getCollection, collectionSnapshot, docSet} from "../../utils/firebase";
import styles from './tableorders.module.scss';
import EditableTagGroup from '../Components/EditableTagGroup/EditableTagGroup';

const ordersCollection = getCollection('orders');


/* --TableOrders Component-- */

const TableOrders = ({ userID }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        collectionSnapshot(userID, ordersCollection, setOrders)
    }, [userID])
    console.log(orders);


    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },
        {
            title: 'Precio',
            className: styles.columnMoney,
            dataIndex: 'price',
            key: 'price',
            render: (price) => (
                <span className={styles.wPrice}>$ {price} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },{
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span> {name} </span>
            )
        },
    ];


    return (
        <div className={styles.tableContent}>
            <div className={styles.scrollTable}>
                <Table loading={{ spinning: !orders.length, delay: 400 }}
                    dataSource={orders}
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => (
                            <EditableTagGroup shopsIds={record.shops} userID={userID} />
                        ),
                        rowExpandable: record => record.shops.length,
                    }}
                />
            </div>
            <Button onClick={null} type="primary" disabled={null} className={styles.btnRelative}>
                <span className={styles.btnIcon}>+</span>
                Agregar nuevo producto
            </Button>
        </div>
    );
};

export default TableOrders;