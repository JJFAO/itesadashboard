import React from 'react';
import { Grid, Typography} from '@material-ui/core';

export default function Footer({classes}) {
    return (
        <div>
            <Grid container >
                <Grid  className={classes.footer}>
                    <Typography >
                        Copyright &copy; 2018 The project by Ant Motion. All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>    
        </div>
    )
}
