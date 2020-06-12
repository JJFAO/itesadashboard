import React, { useState, useRef } from 'react';
import { Table, Button, Input } from 'antd';
import { fireBaseServices } from "../../utils/firebase";
import styles from './tableproducts.module.scss';
import EditableTagGroup from '../Components/EditableTagGroup/EditableTagGroup';
import ActionsCell from '../Components/ActionsCell/ActionsCell';
import { HomeOutlined } from '@ant-design/icons';

const productsCollection = fireBaseServices.getCollectionRef('products');


/* --TableProducts Component-- */
const TableProducts = ({ userID, products, setProducts, shops, loading }) => {
    const [editable, setEditable] = useState('')
    const [edit, setEdit] = useState({})
    const expandableRef = useRef({})

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'price') {
            if ((value < 0 || value > 100000)) {
                return;
            } else {
                value = value.replace(/^0+/, '');
            }
        }
        setEdit({ ...edit, [name]: value });
    }

    const handleUpdate = (id) => async () => {
        if (edit.price) { edit.price = parseInt(edit.price) }

        if (editable === '0') {
            setProducts(prods => prods.filter(p => p.key !== '0'));
            await productsCollection.add(edit);
        } else {
            await fireBaseServices.updateProductDoc(id, edit);
        }
        setEditable('');
        setEdit({});
    }

    const handleDelete = (id) => () => {
        productsCollection.doc(id).delete();
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
        setEditable(obj.key);
    }

    const handleNew = () => {
        const allShopsIDs = shops.map(({ key }) => key)
        setEdit({
            userID,
            name: '',
            price: '',
            description: '',
            shops: allShopsIDs,
        })
        setProducts([...products, { key: '0', shops: [] }])
        setEditable('0');
    }

    
    const showExpandableButton = (key) => {
        const { current } = expandableRef;
        if (current[key]) {
            const c = current[key];
            return (
                <Button type="link"
                    icon={<HomeOutlined />}
                    onClick={() => {c.ref.click()}}
                >
                    Visibilidad en tiendas
                </Button>
            )
        }
    } 

    const columns = [
        {
            title: 'Nombre',
            className: styles.columnName,
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
                    <Input name="price" type="number" defaultValue={price}
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
            title: 'Descripción',
            className: styles.columnName,
            dataIndex: 'description',
            key: 'description',
            render: (description, { key }) => (
                (editable === key) ? (
                    <Input name="description" defaultValue={description}
                        onChange={handleChange} className={styles.w200}
                        maxLength="45" autoComplete="off"
                    />
                ) : (
                    <span> {description} </span>
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
                >
                    {showExpandableButton(key)}
                </ActionsCell>
            )
        },
    ];


    return (
        <div className={styles.tableContent}>
            <div className={styles.scrollTable}>
                <Table loading={{ spinning: loading, delay: 150 }}
                    dataSource={products}
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => (
                            <EditableTagGroup
                                prodID={record.key}
                                shopsIds={record.shops}
                                shops={shops}
                            />
                        ),
                        expandIcon: ({ expanded, onExpand, record }) => (
                            <Button type="link"
                                ref={ref => { expandableRef.current[record.key] = { ref } }}
                                // icon={<HomeOutlined />}
                                onClick={e => onExpand(record)}
                                style={{display: 'none'}}
                            >
                            </Button>
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