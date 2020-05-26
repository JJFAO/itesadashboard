import React from 'react';
import { Select } from 'antd';
import styles from './editableTagGroup.module.scss'
import { fireBaseServices } from "../../../utils/firebase";



const EditableTagGroup = ({ prodID, shopsIds, shops }) => {

    const handleChange = (selectedShops) => {
        fireBaseServices.updateProductDoc(prodID, { selectedShops })
    }

    const optionsMap = shops.map((shop) => (
        { label: shop.name, value: shop.key }
    ));


    return (
        <div className={styles.EditableTagGroup} >
            <Select
                defaultValue={shopsIds}
                id="select"
                mode="multiple"
                placeholder="Seleccione tiendas.."
                onChange={handleChange}
                showArrow
                options={optionsMap}
            >
            </Select>
        </div>
    );
}

export default EditableTagGroup;

