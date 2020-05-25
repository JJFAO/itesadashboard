import React from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core';
import celu from './celu.png'
import cel from './cel.png'
import notecut from './notecut.png'
import note from './note.png'




export default function HowWorks({ classes }) {
    return (

        <div>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.HowWorks}
            >
                <Grid item xs={false}>
                    <Grid  
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item  className={classes.HowWorksitem}>
                            <Typography className={classes.cardtitleHowWorks}>
                                COMO FUNCIONA
                            </Typography>
                            <Typography className={classes.cardescriHowWorks}>
                            Sin costos de implementación. Solo te cobramos si vendes, 100% variable! Cuando te entra un pago se te descuenta la comisión de mercado pago y el 1% de Getviral.
                            </Typography>
                        </Grid>
                        <Hidden smUp>
                        <Grid item xs={false} >
                            <img src={cel} className={classes.logoHowWorks} alt="" />
                        </Grid>
                        </Hidden>
                        <Hidden smDown>
                        <Grid item xs={false} >
                            <img src={celu} className={classes.logoHowWorkscel} alt="" />
                        </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >   
                        <Hidden smDown>
                        <Grid item xs={false}>
                            <img src={ notecut} className={classes.logoHowWorks1} alt="" />
                        </Grid>
                        </Hidden>
                        
                        <Grid item sm={false} className={classes.HowWorksitem1}>
                            <Typography className={classes.cardtitleHowWorks}>
                                COMO FUNCIONA
                            </Typography>
                            <Typography className={classes.cardescriHowWorks}>
                            Sin costos de implementación. Solo te cobramos si vendes, 100% variable! Cuando te entra un pago se te descuenta la comisión de mercado pago y el 1% de Getviral.
                             </Typography>
                        </Grid>
                        <Hidden smUp>
                        <Grid item sm={false}>
                            <img src={ note} className={classes.logoHowWorksnote} alt="" />
                        </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}
