import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import styles from './editableTagGroup.module.scss'
import { getCollection } from "../../../utils/firebase";
const { Option } = Select;


const EditableTagGroup = ({ userID, shopsIds }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {

        if (userID) {
            const shopsCollection = getCollection('shops');
            const arrayPromises = shopsIds.map(id => {
                return shopsCollection.doc(id).get()
            })

            Promise.all(arrayPromises)
                .then(docs => {
                    let shops = [];
                    docs.forEach(doc => {
                        const shop = doc.data()
                        shop.id = doc.id;
                        shops.push(shop);
                    })
                    setTags(shops)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [userID, shopsIds]);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const options = tags.map((tag) => (
        <Option key={tag.id}>{tag.name}</Option>
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
                {options}
            </Select>}
        </div>
    );
}

export default EditableTagGroup;

