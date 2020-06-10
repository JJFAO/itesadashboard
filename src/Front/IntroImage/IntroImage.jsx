import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Typography, Hidden, Button, Toolbar } from '@material-ui/core';
import img1 from '../ImgHomeReg/img1.png';
import img2 from '../ImgHomeReg/img2.png';
import img3 from '../ImgHomeReg/img3.png';
import gvlogo from '../Header/gvlogo.png';
import { Link } from 'react-router-dom';


export default function IntroImage({ classes }) {
    return (

        <Grid item xs={false} sm={4} md={8} lg={7} className={classes.logfondo}>
            <div className={classes.logimage}>

                <Toolbar>
                    <Typography className={classes.navmenu}>
                        <img src={gvlogo} className={classes.logo} alt="" />
                    </Typography>
                    <Link to="/" className={classes.linklogin1}>
                        <Button color="inherit" >Home</Button>
                    </Link>
                </Toolbar>

                <Typography variant="h3" className={classes.logtitle}>
                    Incorporá un carrito a tu sitio,
                </Typography>
                <Typography variant="h3" className={classes.logtitle1}>
                    Solo con un click...
                </Typography>
                <Typography className={classes.loglabel}>
                    Hoy te convertís en e-commerce <span role="img" aria-label="cara alegre">😊</span>
                </Typography>
                <Hidden smDown>
                    <img src={img1} className={classes.imglog1} alt="" />
                    <img src={img2} className={classes.imglog2} alt="" />
                    <img src={img3} className={classes.imglog3} alt="" />
                </Hidden>
            </div>
        </Grid>
    );
}