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

const firebaseApp = firebase;

const arrayRemove = (value) => (firebase.firestore.FieldValue.arrayRemove(value));

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
                    // .onSnapshot(function (snapshot) {
                    //     let array = [];
                    // snapshot.docChanges().forEach(change => {
                    //     if (change.type === "added") {
                    //         console.log("New data: ", change.doc.data());
                    //         const element = change.doc.data();
                    //         element.key = change.doc.id;
                    //         array.push(element)
                    //     }
                    // })
                    // setArrayState((prev) => [ ...prev, ...array]); //mover aqui funcion para modificar el state condicionalmente
                })
        }
    },
    updateDoc(collectionID, docID, prop) {
        const collectionProducts = this.getCollectionRef(collectionID);
        return collectionProducts.doc(docID).update(prop);
    },
    getProductsSnapshot(setArrayState) {
        return this.getCollectionSnapshot('products', setArrayState);
    },
    updateProductDoc(docID, prop) {
        return this.updateDoc('products', docID, prop);
    },
    getOrdersSnapshot(setArrayState) {
        return this.getCollectionSnapshot('orders', setArrayState);
    },
    updateOrderDoc(docID, prop) {
        return this.updateDoc('orders', docID, prop);
    },
    getShopsSnapshot(setArrayState) {
        return this.getCollectionSnapshot('shops', setArrayState);
    },
    updateShopDoc(docID, prop) {
        return this.updateDoc('shops', docID, prop);
    },
    // getUserSnapshot(setArrayState) {
    //     return this.getCollectionSnapshot('shops', setArrayState);
    // },
    updateUserDoc(docID, prop) {
        return this.updateDoc('users', docID, prop);
    },
}


export { firebaseApp, arrayRemove, fireBaseServices };
