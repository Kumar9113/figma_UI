import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

function Text() {
    return (
        <div style={{ margin: 50 }}>
            <TextField label="enter" variant='outlined' error helperText="Enetr valid one"></TextField>
            <TextField type='number' inputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>


            }}></TextField>
        </div>
    )
}

export default Text
