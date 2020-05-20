import React, { useEffect, useState } from 'react';
import { Tag, } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import styles from './editableTagGroup.module.scss'
import { getCollection } from "../../../utils/firebase";


const EditableTagGroup = ({userID, shopsIds}) => {
    console.log(shopsIds);
    
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
    }, [userID]);

    const handleClose = tagID => {
        console.log(tagID);
        
    };


    const forMap = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                    e.preventDefault();
                    handleClose(tag.id);
                }}
            >
                {tag.name}
            </Tag>
        );
        return (
            <span key={tag.id} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };


    const tagChild = tags.map(forMap);
    return (
        <div className={styles.EditableTagGroup}>
            <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                    enter={{
                        scale: 0.8,
                        opacity: 0,
                        type: 'from',
                        duration: 100,
                        onComplete: e => {
                            e.target.style = '';
                        },
                    }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                    appear={false}
                >
                    {tagChild}
                </TweenOneGroup>
            </div>
        </div>
    );
}

export default EditableTagGroup;
