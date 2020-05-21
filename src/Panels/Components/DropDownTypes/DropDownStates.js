import styles from "./dropdowntypes.module.scss";
import React from 'react'
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const DropDownStates = ({state, id , handleState}) => {

    return (
        <Dropdown className={styles.dropDownTypes}
            trigger={['click']}
            overlay={
                <Menu>
                    <Menu.Item key="0" onClick={handleState(id)}>
                        <span> Pendiente </span>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="1" onClick={handleState(id)}>
                        <span> En camino </span>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="2" onClick={handleState(id)}>
                        Entregado
                </Menu.Item>
                </Menu>
            }
        >
            <Button type="link" className={styles.maxContent + ' ant-dropdown-link'} onClick={e => e.preventDefault()}>
                {state === 0 && 'Pendiente'}
                {state === 1 && 'En camino'}
                {state === 2 && 'Entregado'}
                {' '} <DownOutlined />
            </Button>
        </Dropdown>
    )
}

export default DropDownStates;