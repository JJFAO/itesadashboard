import firebase from "firebase/app";
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCVOsLHW_DOxOr2U7K1WqbGBtCqOWnl_94",
    authDomain: "itesacheckouts.firebaseapp.com",
    databaseURL: "https://itesacheckouts.firebaseio.com",
    projectId: "itesacheckouts",
    storageBucket: "itesacheckouts.appspot.com",
    messagingSenderId: "283712013896",
    appId: "1:283712013896:web:a06e7591294024ed503a7d",
    measurementId: "G-8T9H3CJ01K"
};
firebase.initializeApp(config);

const getCollection = (id) => (firebase.firestore().collection(id))


const arrayRemove = (value) => (firebase.firestore.FieldValue.arrayRemove(value));

const firebaseApp = firebase;

const fireBaseServices = {
    setUser(userID) {
        this.userID = userID;
    },
    getCollectionRef(collectionID) {
        return firebase.firestore().collection(collectionID);
    },
    getCollectionSnapshot(collectionID, setArrayState) {
        if (this.userID) {
            const collection = this.getCollectionRef(collectionID);

            return collection.where('userID', '==', this.userID)
                .onSnapshot(function (docs) {
                    let array = [];
                    docs.forEach(doc => {
                        const element = doc.data();
                        element.key = doc.id;
                        array.push(element)
                    })
                    setArrayState(array);
                })
        }
    },
    getProductsSnapshot(setArrayState) {
        return this.getCollectionSnapshot('products', setArrayState);
    },
    updateProductDoc(docID, prop) {
        const collectionProducts = this.getCollectionRef('products');
        return collectionProducts.doc(docID).update(prop);
    },
    getOrdersSnapshot(setArrayState) {
        return this.getCollectionSnapshot('orders', setArrayState);
    },
    updateOrderDoc(docID, prop) {
        const collectionOrders = this.getCollectionRef('orders');
        return collectionOrders.doc(docID).update(prop);
    },
    getShopsSnapshot(setArrayState) {
        return this.getCollectionSnapshot('shops', setArrayState);
    },
    updateShopDoc(docID, prop) {
        const collectionShops = this.getCollectionRef('shops');
        return collectionShops.doc(docID).update(prop);
    },
    // getUserSnapshot(setArrayState) {
    //     return this.getCollectionSnapshot('shops', setArrayState);
    // },
    updateUserDoc(docID, prop) {
        const collectionShops = this.getCollectionRef('users');
        return collectionShops.doc(docID).update(prop);
    },
}


export {
    firebaseApp, getCollection, 
    arrayRemove, fireBaseServices
};
