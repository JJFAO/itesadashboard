import React, { useState } from 'react';
import { Table, Switch, Button, Input } from 'antd';
import styles from './tableshops.module.scss';
import DropDownTypes from '../Components/DropDownTypes/DropDownTypes';
import ActionsCell from '../Components/ActionsCell/ActionsCell';
import { fireBaseServices, arrayUnion, arrayRemove } from "../../utils/firebase";
import { useEffect } from 'react';

const shopsCollection = fireBaseServices.getCollectionRef('shops');


/* --TableShops Component-- */

const TableShops = ({ userID, shops, setShops, products, loading }) => {
    const [editable, setEditable] = useState('')
    const [edit, setEdit] = useState({})

    console.log('loop?');
    useEffect(() => {
        
        return () => {
            setShops(shops => shops.filter(s => s.key !== '0'));
        }
    }, [setShops])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value })
    }

    const editProps = (shopID, prop) => {
        if (shopID === '0') {
            setEdit({ ...edit, ...prop });
        } else {
            fireBaseServices.updateShopDoc(shopID, prop);
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
            setShops(shops => shops.filter(s => s.key !== '0'));
            const newShop = await shopsCollection.add(edit);
            products.forEach(({ shops, key }) => {
                if (!shops.includes(newShop.id)) {
                    fireBaseServices.updateProductDoc(key, { shops: arrayUnion(newShop.id) });
                }
            })
        } else {
            await fireBaseServices.updateShopDoc(id, edit);
        }
        setEditable('');
        setEdit({});
    }

    const removeShopInProducts = (id) => {
        products.forEach(({ shops, key }) => {
            if (shops.includes(id)) {
                fireBaseServices.updateProductDoc(key, { shops: arrayRemove(id) });
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
            enabled: true,
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

    const handleEditable = ({key}) => {
        removeUnsavedRow();
        setEditable(key);
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
                <Table loading={{ spinning: loading, delay: 100 }}
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
