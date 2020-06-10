import React, { useState } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { CssBaseline } from "@material-ui/core";
import IntroImage from "../IntroImage/IntroImage";

import {firebaseApp} from "../../utils/firebase";
import 'firebase/auth'
import {useHistory} from 'react-router-dom'



export default function Login({ classes }) {
  let history = useHistory();
  const [user, setUser] = useState({mail: "", password: ""});

  const handleChange = e => {
    //validar contraseñas iguales
    setUser({...user, [e.target.name]: e.target.value});
  }

  const login = () => {
    if (user.mail && user.password){
      firebaseApp.auth().signInWithEmailAndPassword(user.mail, user.password).then(function (user) {
        setTimeout(()=>{
          history.push('dashboard')
        },100)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <IntroImage classes={classes} />
      <Grid className={classes.flexcenter} item xs={12} sm={12} md={4} lg={5} >
        <Grid className={classes.roundedlog } item component={Paper} elevation={3} square>
          <div className={classes.paperlog}>
            <Typography component="h1" variant="h5" className={classes.titlelog}>
              Iniciar sesión
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
                    placeholder="Contraseña"
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

              </Grid>

              <Button
                  onClick={login}
                fullWidth
                color="primary"
                variant="contained"
                className={classes.submitlog}
              >
                Login
              </Button>

              <Grid container justify="center" className={classes.margintopreset}>
                <Grid item>
                  <Typography variant="subtitle1">
                    <Link to="/resetPassword" className={classes.linkprimary} >
                      Olvidé mi contraseña
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="center" className={classes.margintoplog}>
                <Grid item >
                  <Typography variant="subtitle1">
                    ¿No tenés cuenta?
          </Typography >
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    <Link to="/singup" className={classes.linkprimary} >
                      Registrate
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
