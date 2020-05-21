import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import {getCollection, collectionSnapshot, docSet} from "../../utils/firebase";
import styles from './tableproducts.module.scss';
import EditableTagGroup from '../Components/EditableTagGroup/EditableTagGroup';
import ActionsCell from '../Components/ActionsCell/ActionsCell';

const productsCollection = getCollection('products');


/* --TableProducts Component-- */
const TableProducts = ({ userID }) => {
    const [products, setProducts] = useState([])
    const [editable, setEditable] = useState('')
    const [edit, setEdit] = useState({})

    useEffect(() => {
        collectionSnapshot(userID, productsCollection, setProducts)
    }, [userID])

    
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'price') {
            if ((value < 0 || value > 100000)){
                return;
            } else {
                value = value.replace(/^0+/, '');
            }
        }
        setEdit({ ...edit, [name]: value });
    }

    const handleUpdate = (id) => async () => {
        edit.price = parseInt(edit.price)
        if (editable === '0') {
            await productsCollection.add(edit);
        } else {
            await docSet(productsCollection, id, edit);
        }
        setEditable('');
        setEdit({});
    }

    const handleDelete = (key) => () => {
        productsCollection.doc(key).delete();
    }

    const removeUnsavedRow = () => {
        if (editable === '0') {
            const removed = products.filter((s) => s.key !== '0')
            setProducts([...removed])
        }
    }

    const handleCancel = () => {
        removeUnsavedRow();
        setEditable('');
        setEdit({});
    }

    const handleEditable = (obj) => {
        removeUnsavedRow();
        setEdit(obj);
        setEditable(obj.key);
    }

    const handleNew = () => {
        setEdit({
            name: '',
            price: '',
            shops: [],
            userID
        })
        setProducts([...products, { key: '0', shops: [] }])
        setEditable('0');
    }


    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (name, { key }) => (
                (editable === key) ? (
                    <Input name="name" defaultValue={name}
                        onChange={handleChange} className={styles.w200}
                        maxLength="30" autoComplete="off"
                    />
                ) : (
                    <span> {name} </span>
                )
            )
        },
        {
            title: 'Precio',
            className: styles.columnMoney,
            dataIndex: 'price',
            key: 'price',
            render: (price, { key }) => (
                (editable === key) ? (
                    <Input name="price" type="number"
                        onChange={handleChange} className={styles.wPrice}
                        maxLength="12" autoComplete="off"
                        value={edit.price}
                    />
                ) : (
                    <span className={styles.wPrice}>$ {price} </span>
                )
            )
        },
        {
            title: 'Acciones',
            dataIndex: 'key',
            key: 'key',
            render: (key, obj) => (
                <ActionsCell values={{ editable, edit, id: key, obj }}
                    handlers={{ handleUpdate, handleCancel, handleDelete, handleEditable }}
                />
            )
        },
    ];


    return (
        <div className={styles.tableContent}>
            <div className={styles.scrollTable}>
                <Table loading={{ spinning: !products.length, delay: 400 }}
                    dataSource={products}
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => (
                            <EditableTagGroup
                                shopsIds={record.shops}
                                userID={userID}
                                prodID={record.key}
                            />
                        ),
                        rowExpandable: record => (record.key !== '0'),
                        expandIconColumnIndex: 4,
                    }}
                />
            </div>
            <Button onClick={handleNew} type="primary"
                disabled={editable !== ''}
                className={styles.btnRelative}
            >
                <span className={styles.btnIcon}>+</span>
                Agregar nuevo producto
            </Button>
        </div>
    );
};

export default TableProducts;