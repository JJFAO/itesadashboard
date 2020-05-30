import React from 'react';
import { Table, Tag } from 'antd';
import styles from './tableorders.module.scss';
import DropDownStates from '../Components/DropDownTypes/DropDownStates';
import { fireBaseServices } from '../../utils/firebase';
import dateFormat from 'dateformat'

/* --TableOrders Component-- */

const TableOrders = ({ orders, shops, loading }) => {
    const ordersMap = orders.map((o) => {
        if (o.state == null) { o.state = 0; }
        return o;
    })

    const handleState = (id) => (e) => {
        const state = Number(e.key);
        editProps(id, { state });
    }

    const editProps = (docID, prop) => {
        fireBaseServices.updateOrderDoc(docID, prop);
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
    

    const shopsMap = shops.map(({ key, name }) => ({ value: key, text: name }))

    const columns = [
        {
            title: 'Nº de pedido',
            dataIndex: 'orderNum',
            key: 'orderNum',
            sorter: (a, b) => a.orderNum - b.orderNum,
            defaultSortOrder: 'descend',
            render: (num, r, index) => (
                <span> 00{index + 1} </span>
            )
        }, {
            title: 'Cliente',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <span style={{ textTransform: 'capitalize' }}>
                    {name}
                </span>
            )
        }, {
            title: 'Modalidad',
            dataIndex: 'send',
            key: 'send',
            render: (send) => (
                <span>
                    {send === '0' && 'Envío'}
                    {send === '1' && 'Takeaway'}
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
            onFilter: (value, record) => record.shop.key === value,
            render: (shop) => <span> {shop.name} </span>
        }, {
            title: 'Dirección',
            dataIndex: 'address',
            key: 'address',
            render: (address) => (<span> {address} </span>)
        }, {
            title: 'Email',
            dataIndex: 'mail',
            key: 'mail',
            render: (mail) => (<span> {mail} </span>)
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
            render: (date) => {
                if (date) {
                    const theDate = new Date(date);
                    const dateParsed = dateFormat(theDate, "mm/dd HH:MM'hs'")
                    return (
                        <span> {dateParsed} </span>
                    )
                }
            }
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
        <Tag key={prod.name}>{`${prod.name}  x${prod.quantity}`}</Tag>
    )));

    return (
        <div className={styles.tableContent}>
            <div className={styles.scrollTable}>
                <Table loading={{ spinning: loading, delay: 150 }}
                    dataSource={ordersMap}
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
