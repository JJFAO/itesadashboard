import React from 'react';
import { Table, Tag } from 'antd';
import { getCollection, updateDoc } from "../../utils/firebase";
import styles from './tableorders.module.scss';
import DropDownStates from '../Components/DropDownTypes/DropDownStates';

const ordersCollection = getCollection('orders');


/* --TableOrders Component-- */

const TableOrders = ({ userID, orders, setOrders, shops }) => {
    

    const handleState = (id) => (e) => {
        const state = Number(e.key);
        editProps(id, { state });
    }

    const editProps = (id, prop) => {
        updateDoc(ordersCollection, id, prop);
    }

    const handleTableChange = (pagination, filters, sorter) => {
        // this.fetch({
        //   sortField: sorter.field,
        //   sortOrder: sorter.order,
        //   pagination,
        //   ...filters,
        // });
        console.log(pagination, filters, sorter);
        
      };


    const shopsMap = shops.map( ({key, name}) => ({value: key, text:name}) )

    const columns = [
        {
            title: 'Nº de pedido',
            dataIndex: 'orderNum',
            key: 'orderNum',
            sorter: (a, b) => a.orderNum - b.orderNum,
            defaultSortOrder: 'descend',
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
            filters: shopsMap,
            onFilter: (value, record) => record.shop === value,
            render: (shopID) => {
                const shopOrder = shops.find(shop => shop.key === shopID)
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
            filters: [
                { text: `Pendiente`, value: 0 },
                { text: `En camino`, value: 1 },
                { text: `Entregado`, value: 2 },
            ],
            onFilter: (value, record) => record.state === value,
            render: (state, { key }) => (
                <DropDownStates id={key} state={state}
                    handleState={handleState}
                />
            )
        },
    ];


    const prodsMap = (prods) => (prods.map(prod => (
        <Tag key={prod.name}>{`${prod.name}  x ${prod.quantity}`}</Tag>
    )));

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
                    onChange={handleTableChange}
                />
            </div>
        </div>
    );
};

export default TableOrders;
