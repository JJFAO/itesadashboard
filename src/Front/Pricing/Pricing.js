import React from 'react'
import { Grid, Paper, Typography, Button, Hidden } from '@material-ui/core';
import socialimg from './socialimg.png';
import eclipse from '../ImgHomeReg/eclipse.png';
import eclipse1 from "../ImgHomeReg/eclipse1.png";
import { Link } from "react-router-dom";

export default function Pricing({ classes }) {
    return (
        <div className={classes.imgfondopoints}>
            <Typography variant="h3" className={classes.labeltitlePricing}>
                Pricing Transparente
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.Pricing}
            >
                <Grid item  className={classes.Pricingitem}>
                    <Hidden smUp>
                    <Typography variant="h3" className={classes.cardtitlePricing}>
                            Plan COVID-19
                    </Typography>
                    </Hidden>
                    <img src={socialimg} className={classes.logosPricing} alt="" />
                </Grid>
                <Grid item  className={classes.Pricingitem1}>
                    <Paper className={classes.paperpricing} elevation={3}>
                        <Hidden smDown>
                        <Typography variant="h3" className={classes.cardtitlePricing}>
                            Plan COVID-19
                            </Typography>
                        </Hidden>    
                        <Typography variant="h4" className={classes.carddescripPricing}>
                            Sin costos de implementación. Solo te cobramos si vendes, 100% variable! Cuando te entra un pago se te descuenta la comisión de mercado pago y el 1% de Getviral
                            </Typography>
                        <Typography variant="h4" className={classes.cardivaPricing}>
                            1% + IVA
                            </Typography>
                            <Link to="/singup" className={classes.linklogin2} >
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.submitregb}
                            >
                                
                                Proba gratis ya!
                           
                            </Button>
                        </Link>
                    </Paper>
                </Grid>

            </Grid>
            
            <img src={eclipse} className={classes.eclipsepric} alt="" />
            <img src={eclipse1} className={classes.eclipse1pric} alt="" />
            <img src={eclipse1} className={classes.eclipsephone} alt="" />
            <img src={eclipse1} className={classes.eclipsephone1} alt="" />
            <img src={eclipse} className={classes.eclipsephone2} alt="" />

        </div>
    )
}
