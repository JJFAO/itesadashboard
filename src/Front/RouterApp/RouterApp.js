import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Singup from "../Singup/Singup";
import LandingPage from "../Themes/LandingPage";
import Starting from "../Starting/Starting";

export default function RouterApp({user}){
    const classes = LandingPage();
    return(
      <Router>
        <Switch>
          <Route exact path="/login" >
            <Login classes={classes} />
          </Route>
          <Route exact path="/singup">
            <Singup classes={classes} />
          </Route>
          <Route exact path="/starting">
            <Starting classes={classes} />
          </Route>
          <Route exact path="/">
            <Home classes={classes} />
          </Route>
        </Switch>
      </Router>
    );
}