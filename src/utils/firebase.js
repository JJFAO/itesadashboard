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

const collectionSnapshot = (userID, collection, setArray) => {
    if (userID) {
        return collection.where('userID', '==', userID)
            .onSnapshot(function (docs) {
                let array = [];
                docs.forEach(doc => {
                    const element = doc.data();
                    element.key = doc.id;
                    array.push(element)
                })
                setArray(array);
            })
    }
}

const updateDoc = async (collection, id, prop) => {
    const doc = collection.doc(id);
    await doc.update(prop);
}

const removeItem = (value) => (firebase.firestore.FieldValue.arrayRemove(value))

const firebaseApp = firebase;

export {firebaseApp, getCollection, collectionSnapshot, updateDoc, removeItem};
