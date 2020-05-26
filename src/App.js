import React, { useEffect, useState } from 'react';
import './App.css';
import { TheApp } from "./TheApp/TheApp";
import {firebaseApp} from "./utils/firebase";
import 'firebase/firestore';
import 'firebase/auth';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./Front/Login/Login";
import Singup from "./Front/Singup/Singup";
import Home from "./Front/Home/Home";
import LandingPage from "./Front/Themes/LandingPage";
import {Loader} from "./Front/Loader/Loader";
import {Starter} from "./Front/Singup/Starter";
function App() {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const classes = LandingPage();

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(function (user) {
            setLoading(true)
           /* user = { uid: 'bP28xX6AzMOB2JZLb0eNuG7kL202' }*/
            /* console.log(user) */
            if (user) {
                setLogin(true)
                let uid = user.uid;
                let db = firebaseApp.firestore();

                db.collection('users').where('uid', '==', uid)
                    .onSnapshot(function (docs) {
                        docs.forEach(function (doc) {
                            let theUser = doc.data();
                            theUser.userID = doc.id;
                            setUser(theUser);
                            setLoading(false)
                        })
                    })
            } else {
                setLogin(false)
                setLoading(false)
            }
        });
    }, [])

    const PrivateRoute = ({ component: Component, user, ...rest }) => (
        <Route {...rest} render={(props) => (
            login === true
                ? <Component {...props} user={user} {...rest} />
                : <Redirect to='/login' />
        )} />
    )


    return (
        <div className="App">
           {/* {login && <TheApp user={user} />}
            {!login && <RouterApp/>}*/}
            {
                !loading &&
                <Router>
                    <Switch>
                        <Route exact path="/login" >
                            <Login classes={classes} />
                        </Route>
                        <Route exact path="/singup">
                            <Singup classes={classes} />
                        </Route>
                        <Route exact path="/starting">
                           <Starter/>
                        </Route>
                        <PrivateRoute exact path="/dashboard" user={user} component={TheApp} />
                        <Route exact path="/">
                            <Home classes={classes} />
                        </Route>


                    </Switch>
                </Router>
            }
            {loading &&
            <Loader/>
            }

        </div>
    );
}

export default App;
