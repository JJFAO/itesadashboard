import styles from "./dropdowntypes.module.scss";
import React from 'react'
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const DropDownPaid = ({paid, id , handlePaid}) => {

    return (
        <Dropdown className={styles.dropDownTypes}
                  trigger={['click']}
                  overlay={
                      <Menu>
                          <Menu.Item key="0" onClick={handlePaid(id)}>
                              <span> Pendiente </span>
                          </Menu.Item>
                          <Menu.Divider />
                          <Menu.Item key="1" onClick={handlePaid(id)}>
                              <span> Pagado </span>
                          </Menu.Item>
                      </Menu>
                  }
        >
            <Button type="link" className={styles.maxContent + ' ant-dropdown-link'} onClick={e => e.preventDefault()}>
                {!paid && 'Pendiente'}
                {paid && 'Pagado'}
                {' '} <DownOutlined />
            </Button>
        </Dropdown>
    )
}

export default DropDownPaid;