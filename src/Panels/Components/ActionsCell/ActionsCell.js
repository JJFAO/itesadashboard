import React from 'react'
import { Button, Popconfirm } from 'antd'
import { SaveOutlined, CloseCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'

const ActionsCell = ({ values, handlers }) => {
    const { edit, editable, id, obj } = values;
    const { handleUpdate, handleCancel, handleDelete, handleEditable } = handlers;
    const isDisabled = () => {
        for (const key in edit) {
            if (edit.hasOwnProperty(key)) {
                const value = edit[key];
                if (value === '') { return true }
            }
        }
        return false;
    }

    return (
        (editable === id) ? (

            <>
                <Button onClick={handleUpdate(id)} type="link" icon={<SaveOutlined />} disabled={isDisabled()}>
                    Guardar
                </Button>
                <Button onClick={handleCancel} type="link" icon={<CloseCircleOutlined />}>
                    Cancelar
                </Button>
            </>
        ) : (
            <>
                <Button onClick={() => handleEditable(obj)} type="link" icon={<EditOutlined />}>
                    Editar
                </Button>
                <Popconfirm
                    title="¿Desea eliminar la tienda?"
                    onConfirm={handleDelete(id)}
                    okText="Eliminar" cancelText="Volver"
                >
                    <Button type="link" icon={<DeleteOutlined />}>
                        Eliminar
                    </Button>
                </Popconfirm>
            </>
        )
    )
}

export default ActionsCell
