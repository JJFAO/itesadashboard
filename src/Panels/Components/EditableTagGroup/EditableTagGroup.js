import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import styles from './editableTagGroup.module.scss'
import { getCollection, docSet, collectionSnapshot } from "../../../utils/firebase";

const shopsCollection = getCollection('shops');
const productsCollection = getCollection('products');


const EditableTagGroup = ({ userID, prodID, shopsIds }) => {
    const [options, setOptions] = useState([])

    useEffect(() => {

        if (userID) {
            collectionSnapshot(userID, shopsCollection, setOptions)
        }
    }, [userID, shopsIds]);


    const handleChange = (shops) => {
        docSet(productsCollection, prodID, {shops})
    }

    const optionsMap = options.map((shop) => (
        {label: shop.name, value: shop.key}
    ));


    return (
        <div className={styles.EditableTagGroup} >
            {options.length !== 0 && <Select 
                defaultValue={shopsIds}
                id="select"
                mode="multiple"
                placeholder="Seleccione tiendas.."
                onChange={handleChange}
                showArrow
                options={optionsMap}
            >
            </Select>}
        </div>
    );
}

export default EditableTagGroup;

