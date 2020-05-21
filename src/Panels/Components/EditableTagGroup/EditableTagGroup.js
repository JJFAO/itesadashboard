import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import styles from './editableTagGroup.module.scss'
import { getCollection, docSet, collectionSnapshot } from "../../../utils/firebase";
const { Option } = Select;

const shopsCollection = getCollection('shops');
const productsCollection = getCollection('products');


const EditableTagGroup = ({ userID, prodID, shopsIds }) => {
    const [tags, setTags] = useState([]);
    const [options, setOptions] = useState([])

    useEffect(() => {

        if (userID) {
            // const arrayPromises = shopsIds.map(id => {
            //     return shopsCollection.doc(id).get()
            // })

            // Promise.all(arrayPromises)
            //     .then(docs => {
            //         let shops = [];
            //         docs.forEach(doc => {
            //             const shop = doc.data()
            //             shop.id = doc.id;
            //             shops.push(shop);
            //         })
            //         setTags(shops)
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
            collectionSnapshot(userID, shopsCollection, setOptions)
        }
    }, [userID, shopsIds]);

    const handleChange = (shops) => {
        docSet(productsCollection, prodID, {shops})
    }

    const optionsMap = options.map((shop) => (
        <Option key={shop.key}>{shop.name}</Option>
    ));


    return (
        <div className={styles.EditableTagGroup} >
            {options.length !== 0 && <Select 
                defaultValue={shopsIds}
                id="select"
                mode="multiple"
                placeholder="Seleccione tiendas.."
                onChange={handleChange}
            >
                {optionsMap}
            </Select>}
        </div>
    );
}

export default EditableTagGroup;

