import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Title() {

    return (

        <Grid container spacing={3}>
            <Grid item xs={12} >

                <Typography component="h1" variant="h1">
                    Movie info
                </Typography>

            </Grid>
        </Grid>

    )
}

