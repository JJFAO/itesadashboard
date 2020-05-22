import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Input } from 'antd';
import styles from './tableshops.module.scss';
import DropDownTypes from '../Components/DropDownTypes/DropDownTypes';
import ActionsCell from '../Components/ActionsCell/ActionsCell';
import { getCollection, collectionSnapshot, updateDoc, removeItem } from "../../utils/firebase";

const shopsCollection = getCollection('shops');
const productsCollection = getCollection('products');


/* --TableShops Component-- */

const TableShops = ({ userID }) => {
    const [products, setProducts] = useState([])
    const [shops, setShops] = useState([])
    const [editable, setEditable] = useState('')
    const [edit, setEdit] = useState({})

    useEffect(() => {
        const unSubProducts = collectionSnapshot(userID, productsCollection, setProducts);
        const unSubShops = collectionSnapshot(userID, shopsCollection, setShops);
        return () => {
            unSubProducts && unSubProducts();
            unSubShops && unSubShops();
        }
    }, [userID])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value })
    }

    const editProps = (id, prop) => {
        if (id === '0') {
            setEdit({ ...edit, ...prop });
        } else {
            updateDoc(shopsCollection, id, prop);
        }
    }

    const handleType = (id) => (e) => {
        const type = Number(e.key);
        editProps(id, { type });
    }

    const handleSwitch = (id) => (enabled) => {
        editProps(id, { enabled });
    };

    const handleUpdate = (id) => async () => {
        if (editable === '0') {
            await shopsCollection.add(edit);
        } else {
            await updateDoc(shopsCollection, id, edit);
        }
        setEditable('');
        setEdit({});
    }

    const removeShopInProducts = (id) => {
        products.forEach(({ shops, key }) => {
            if (shops.includes(id)) {
                updateDoc(productsCollection, key, { shops: removeItem(id) })
            }
        })
    }

    const handleDelete = (id) => () => {
        shopsCollection.doc(id).delete();
        removeShopInProducts(id);
    }

    const handleNew = () => {
        setEdit({
            name: '',
            type: 1,
            enabled: false,
            userID
        })
        setShops([...shops, { key: '0' }])
        setEditable('0');
    }

    const removeUnsavedRow = () => {
        if (editable === '0') {
            const removed = shops.filter((s) => s.key !== '0')
            setShops([...removed])
        }
    }

    const handleCancel = () => {
        removeUnsavedRow();
        setEditable('');
        setEdit({});
    }

    const handleEditable = (id) => {
        removeUnsavedRow();
        setEditable(id);
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
                ):(
                    <span className={styles.w200}> {name} </span>
                )
            )
        },
        {
            title: 'Modalidad',
            dataIndex: 'type',
            key: 'type',
            render: (type, { key }) => (
                <DropDownTypes type={type} id={key} edit={edit} handleType={handleType} />
            )
        },
        {
            title: 'Habilitada',
            dataIndex: 'enabled',
            key: 'enabled',
            render: (enabled, { key }) => {
                if (key === '0') {
                    enabled = edit.enabled;
                }
                return (
                    <Switch checked={enabled} onClick={handleSwitch(key)} />
                )
            }
        },
        {
            title: 'Acciones',
            dataIndex: 'key',
            key: 'key',
            render: (key) => (
                <ActionsCell values={{ editable, edit, id: key }}
                    handlers={{ handleUpdate, handleCancel, handleDelete, handleEditable }}
                />
            )
        },
    ];


    return (
        <div className={styles.tableContent}>
            <div className={styles.scrollTable}>
                <Table loading={{ spinning: !shops.length, delay: 400 }}
                    bordered
                    dataSource={shops}
                    columns={columns}
                />
            </div>
            <Button onClick={handleNew} type="primary" disabled={editable !== ''} className={styles.btnRelative}>
                <span className={styles.btnIcon}>+</span>
                Agregar nueva tienda
            </Button>
        </div>
    );
};

export default TableShops;
