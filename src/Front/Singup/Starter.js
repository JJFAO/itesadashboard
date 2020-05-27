import React, {useState, useEffect} from 'react';
import {Loader} from "../Loader/Loader";
import {firebaseApp} from "../../utils/firebase";
import 'firebase/auth'
import 'firebase/firestore'
import {useHistory} from 'react-router-dom'


export function Starter({}) {
    let history = useHistory();
    useEffect(()=>{
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
                let uid = user.uid;
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const code = urlParams.get('code')
                const token = 'APP_USR-2128884128966380-052120-4a582344b0f38a1f0531308091e79c24-485574942'
                const uri = 'https://checkouts.itesa.co/starting'
                let timestamp = firebaseApp.firestore.FieldValue.serverTimestamp();
                console.log(user)
                console.log(code)
                if (code){
                    fetch("https://api.mercadopago.com/oauth/token", {
                        body: "client_secret="+token+"&grant_type=authorization_code&code=" + code + "&redirect_uri=" + uri,

                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        method: "POST"
                    }).then(function (response) {
                        if(response.ok) {
                            response.json().then(function (val) {
                                let access_token = val.access_token;
                                let public_key = val.public_key;
                                let refresh_token = val.refresh_token

                                let seller = {
                                    access_token,
                                    public_key,
                                    refresh_token,
                                    marketplace_fee: 3,
                                    tokenAt: timestamp,
                                    createdAt: timestamp,
                                    color: '#9146F7'
                                }

                                let db = firebaseApp.firestore();
                                db.collection('users').where('uid', '==', uid).get()
                                    .then(function (snapshot) {
                                        snapshot.forEach(function (doc) {
                                            db.collection('users').doc(doc.id).update(seller).then(function () {
                                                console.log('listo')
                                                setTimeout(()=>{
                                                    history.push('dashboard')
                                                },100)

                                            })
                                        })
                                    })

                            })
                        }

                    })
                }

            } else {
                // No user is signed in.
            }
        });
    },[])

    return (
        <div>
            <Loader/>
        </div>
    )
}