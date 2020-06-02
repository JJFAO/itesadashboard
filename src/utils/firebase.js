import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';


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

const arrayUnion = (value) => (firebase.firestore.FieldValue.arrayUnion(value));

const fireBaseServices = {
    setUser(userID) {
        this.userID = userID;
    },
    getCollectionRef(collectionID) {
        return firebase.firestore().collection(collectionID);
    },
    getCollectionSnapshot(collectionID, setArrayState, setLoading) {
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
                    setLoading((prev) => ({ ...prev, [collectionID]: false }))
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
    getUserSnapshot(setState, setLoading) {
        const collection = this.getCollectionRef('users');
        return collection.doc(this.userID).onSnapshot(doc => {
            const element = doc.data();
            element.userID = doc.id;
            setState(element);
            setLoading((prev) => ({ ...prev, user: false }))
        })
    },
    updateUserDoc(prop) {
        return this.updateDoc('users', this.userID, prop);
    },
    updateDoc(collectionID, docID, prop) {
        const collectionProducts = this.getCollectionRef(collectionID);
        return collectionProducts.doc(docID).update(prop);
    },
    getProductsSnapshot(setArrayState, setLoading) {
        return this.getCollectionSnapshot('products', setArrayState, setLoading);
    },
    updateProductDoc(docID, prop) {
        return this.updateDoc('products', docID, prop);
    },
    getOrdersSnapshot(setArrayState, setLoading) {
        return this.getCollectionSnapshot('orders', setArrayState, setLoading);
    },
    updateOrderDoc(docID, prop) {
        return this.updateDoc('orders', docID, prop);
    },
    getShopsSnapshot(setArrayState, setLoading) {
        return this.getCollectionSnapshot('shops', setArrayState, setLoading);
    },
    updateShopDoc(docID, prop) {
        return this.updateDoc('shops', docID, prop);
    },
    getImageStorageRef() {
        return firebase.storage().ref().child(`usersImages/${this.userID}/background`);
    },
}


export { firebaseApp, fireBaseServices, arrayUnion, arrayRemove };
