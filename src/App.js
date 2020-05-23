import React, { useEffect, useState } from 'react';
import './App.css';
import { TheApp } from "./TheApp/TheApp";
import {firebaseApp, fireBaseServices} from "./utils/firebase";
import 'firebase/firestore';
import 'firebase/auth';

function App() {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(function (user) {

            user = { uid: '123asasd' }

            if (user) {
                setLogin(true)
                let uid = user.uid;
                let db = firebaseApp.firestore();

                db.collection('users').where('uid', '==', uid)
                    .onSnapshot(function (docs) {
                        docs.forEach(function (doc) {
                            fireBaseServices.setUser(doc.id)
                            let theUser = doc.data();
                            theUser.userID = doc.id;
                            setUser(theUser);
                        })
                    })
            } else {
                setLogin(false)
            }
        });
    }, [])

    return (
        <div className="App">
            {login && <TheApp user={user} />}
        </div>
    );
}

export default App;
