import { FormControl, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

function Switched() {
    return (
        <div>

            <FormControl>
                <FormControlLabel label='what is your name' control={<Switch></Switch>}></FormControlLabel>
            </FormControl>


        </div>
    )
}

export default Switched
