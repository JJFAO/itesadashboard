import React from 'react';
import { Grid, Paper, Hidden } from '@material-ui/core';
import cmq from './cmq.png';
import corona from './corona.png';
import pata from './pata.png';
import temple from './temple.png';
import simmons from './simmons.png';
import eclipse1 from '../ImgHomeReg/eclipse1.png';

export default function Sponsors({ classes }) {
    return (
        <div>
            <Hidden smDown>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.sponsors}
                >
                    <Grid item xs={false}>
                        <Paper className={classes.paper} elevation={0}><img src={cmq} className={classes.logos} alt="" /></Paper>
                    </Grid>
                    <Grid item xs={false}>
                        <Paper className={classes.paper} elevation={0}><img src={pata} className={classes.logos} alt="" /></Paper>
                    </Grid>
                    <Grid item xs={false}>
                        <Paper className={classes.paper} elevation={0}><img src={temple} className={classes.logos} alt="" /></Paper>
                    </Grid>
                    <Grid item xs={false}>
                        <Paper className={classes.paper} elevation={0}><img src={corona} className={classes.logos} alt="" /></Paper>
                    </Grid>
                    <Grid item xs={false}>
                        <Paper className={classes.paper} elevation={0}><img src={simmons} className={classes.logos} alt="" /></Paper>
                    </Grid>
                    <Grid item xs={false}>
                        <Paper className={classes.paper} elevation={0}><img src={eclipse1} className={classes.logos} alt="" /> </Paper>
                    </Grid>
                    
                </Grid>
                
            </Hidden>
        </div>
    )
}
