import React from 'react';
import { Grid, Paper, Typography, Button, Hidden } from '@material-ui/core';
import { Link } from "react-router-dom";
import process from './process.png';
import responsive from './responsive.png';
import socialmedia from './socialmedia.png';

export default function Sponsors({ classes }) {
    return (
        <div className={classes.imgfondopoints}>

            <Typography variant="h3" className={classes.labeltitlefeatures}>
                ¿POR QUÉ USAR EL CHECKOUT DE GETVIRAL?
                </Typography>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.features}
            >
                <Hidden smUp >
                    <Grid item xs={false} className={classes.featuresitem}>
                        <Paper className={classes.papercard} elevation={0}>
                            <img src={process} className={classes.logosfeatures} alt="" />
                            <Typography variant="h3" className={classes.cardtitlefeatures}>
                                10 MINUTOS Y YA ESTAS VENDIENDO
                            </Typography>
                            <Typography variant="h4" className={classes.carddescripfeatures}>
                                Es una solución rápida para adaptar tu sitio a los tiempos de Covid-19 sin tener que desarrollar o diseñar un e-commerce. Crear tu cuenta de Vendedor y ya se te habilita tu checkout.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={false} className={classes.featuresitem}>
                        <Paper className={classes.papercard} elevation={0}>
                            <img src={socialmedia} className={classes.logosfeatures} alt="" />
                            <Typography variant="h3" className={classes.cardtitlefeatures}>
                                SIN INTEGRACIONES
                            </Typography>
                            <Typography variant="h4" className={classes.carddescripfeatures}>
                                El checkout de Getviral le provee a la marca un link el cual puede incorporar a su sitio, compartir por WhatsApp o redes. Solo necesitas tener cuenta de Mercado Pago y tus clientes van a poder pagar
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={false} className={classes.featuresitem}>
                        <Paper className={classes.papercard} elevation={0}>
                            <img src={responsive} className={classes.logosfeatures} alt="" />
                            <Typography variant="h3" className={classes.cardtitlefeatures}>
                                SIN COSTOS DE IMPLEMENTACIÓN
                            </Typography>
                            <Typography variant="h4" className={classes.carddescripfeatures}>
                                El servicio es gratis, no cobramos suscripción. Unicamente cobramos si vendes! Por cada venta que realices Getviral se queda con un 1% y Mercado Pago absorbe su comisión dependiendo de que configuración tengas en tu cuentas
                            </Typography>
                        </Paper>
                    </Grid>
                </Hidden>
                <Hidden smDown >
                    <Grid item xs={false} className={classes.featuresitem}>
                        <Paper className={classes.papercard} elevation={3}>
                            <img src={process} className={classes.logosfeatures} alt="" />
                            <Typography variant="h3" className={classes.cardtitlefeatures}>
                                10 MINUTOS Y YA ESTAS VENDIENDO
                            </Typography>
                            <Typography variant="h4" className={classes.carddescripfeatures}>
                                Es una solución rápida para adaptar tu sitio a los tiempos de Covid-19 sin tener que desarrollar o diseñar un e-commerce. Crear tu cuenta de Vendedor y ya se te habilita tu checkout.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={false} className={classes.featuresitem}>
                        <Paper className={classes.papercard} elevation={3}>
                            <img src={socialmedia} className={classes.logosfeatures} alt="" />
                            <Typography variant="h3" className={classes.cardtitlefeatures}>
                                SIN INTEGRACIONES
                            </Typography>
                            <Typography variant="h4" className={classes.carddescripfeatures}>
                                El checkout de Getviral le provee a la marca un link el cual puede incorporar a su sitio, compartir por WhatsApp o redes. Solo necesitas tener cuenta de Mercado Pago y tus clientes van a poder pagar
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={false} className={classes.featuresitem}>
                        <Paper className={classes.papercard} elevation={3}>
                            <img src={responsive} className={classes.logosfeatures} alt="" />
                            <Typography variant="h3" className={classes.cardtitlefeatures}>
                                SIN COSTOS DE IMPLEMENTACIÓN
                            </Typography>
                            <Typography variant="h4" className={classes.carddescripfeatures}>
                                El servicio es gratis, no cobramos suscripción. Unicamente cobramos si vendes! Por cada venta que realices Getviral se queda con un 1% y Mercado Pago absorbe su comisión dependiendo de que configuración tengas en tu cuentas
                            </Typography>
                        </Paper>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Link to="/singup" className={classes.linklogin2} >
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className={classes.submitregb1}
                    >

                        Probá gratis ya!
                        </Button>
                </Link>
            </Grid>

        </div>
    );
}
