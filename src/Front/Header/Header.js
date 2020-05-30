import React from 'react'
import { Toolbar, Typography, Button, Hidden } from '@material-ui/core';
import gvlogo from './gvlogo.png';



import { Link } from "react-router-dom";


export default function Header({ classes }) {
    return (
        
            <div className={classes.circle}>

                <nav  className={classes.navstyle}>
                    <Toolbar>
                        <Typography className={classes.navmenu}>
                            <img src={gvlogo} className={classes.logo} alt="" />
                        </Typography>
                        <Hidden smDown>
                        <Link to="/" className={classes.linklogin}><Button  color="inherit" >Home</Button></Link>
                        </Hidden>
                        <Link to="/login" className={classes.linklogin1}><Button color="inherit"  >
                            Login
                       </Button> </Link>
                        
                    </Toolbar>
                </nav>
              
                <Typography variant="h3" className={classes.labeltitle}>
                    Incorporá un carrito a tu sitio,
                </Typography>
                <Typography variant="h3" className={classes.labeltitle1}>
                    Solo con un click...
                </Typography>
                <Typography  className={classes.hoylabel}>
                    Hoy te convertís en e-commerce <span role="img" aria-label="cara alegre">😊</span>
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submitsingupwhite}
                >
                   <Link to="/singup" className={classes.linkreg} >
                      Registrarme ahora
                    </Link>
                </Button>
                <Hidden smDown>
                <Button
                    disableElevation
                    fullWidth
                    className={classes.submitsworks}
                >
                    Como funciona
                </Button>
                </Hidden>

            </div>
           
        
    );
}
