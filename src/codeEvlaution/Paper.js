import { Box, Grid } from '@mui/material'
import React from 'react'

function Paper() {
    return (
        <div>

            <Grid lg={12} s={12} container>
                <Grid xs={12} lg={6} item><Box bgcolor='darkviolet' p={2}>item1</Box></Grid>
                <Grid sm={12} lg={6} item><Box p={2}>item1</Box></Grid>
                <Grid sm={12} lg={6} item ><Box bgcolor='darkviolet' p={2}>item1</Box></Grid>
                <Grid sm={12} lg={6} item><Box p={2}>item1</Box></Grid>
            </Grid>


        </div>
    )
}

export default Paper
