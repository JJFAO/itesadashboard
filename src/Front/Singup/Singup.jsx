import React, { useState } from 'react';
import { InputAdornment, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import StorefrontIconOutlined from '@material-ui/icons/StorefrontOutlined';
import { CssBaseline } from "@material-ui/core";
import IntroImage from "../IntroImage/IntroImage";
import {firebaseApp} from "../../utils/firebase";
import 'firebase/auth'
import 'firebase/firestore'



export default function Signup({ classes }) {
  const [user, setUser] = useState({mail: "", password: "", repeatPassword: "", shop: ""});

  const handleChange = e => {
    //validar contraseñas iguales
    setUser({...user, [e.target.name]: e.target.value});
  }



  function singUp() {

      firebaseApp.auth().createUserWithEmailAndPassword(user.mail, user.password).then(function (data) {
          let uid = data.user.uid;
          let db = firebaseApp.firestore();
          db.collection('users').doc(user.shop).set({
              uid,
              email: user.mail,
          }).then(function () {

              let redirectURI =
                  'https://auth.mercadopago.com.ar/authorization?client_id=2128884128966380&response_type=code&platform_id=mp&redirect_uri=https://checkouts.itesa.co/starting'  ;
              window.location.href = redirectURI;
          })

      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
      });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <IntroImage classes={classes} />
      <Grid className={classes.flexcenter} item xs={12} sm={4} md={3} lg={5} >
        <Grid className={classes.rounded} item component={Paper} elevation={3} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Completa tus datos:
            </Typography>

            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label=""
                    placeholder="Tu mail"
                    name="mail"
                    autoComplete="email"
                    value={user.mail}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Crea tu contraseña"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="repeatPassword"
                    value={user.repeatPassword}
                    onChange={handleChange}
                    placeholder="Repetí la contraseña"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    name="shop"
                    value={user.shop}
                    onChange={handleChange}
                    fullWidth
                    placeholder="Nombre de tu tienda"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <StorefrontIconOutlined />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                fullWidth
                onClick={singUp}
                color="primary"
                variant="contained"
                className={classes.submit}
              >
                Continuar con Mercado Pago
          </Button>

              <Grid container justify="center" className={classes.margintop}>
                <Grid item >
                  <Typography variant="subtitle1">
                    ¿Ya tenés cuenta?
            </Typography >
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    <Link to="/login" className={classes.linkprimary} >
                      Log in
              </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}