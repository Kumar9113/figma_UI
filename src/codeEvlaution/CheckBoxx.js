import { CheckBox } from '@mui/icons-material'
import { FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React from 'react'

function CheckBoxx() {
    return (
        <div>
            <FormControl>
                <FormLabel id='job-exprnece'>Skills
                </FormLabel>
                <FormGroup>
                    <FormControlLabel label="Hello ji" control={<CheckBox ></CheckBox>}></FormControlLabel>
                    <FormControlLabel label="Hello ji" control={<CheckBox ></CheckBox>}></FormControlLabel>
                    <FormControlLabel label="Hello ji" control={<CheckBox ></CheckBox>}></FormControlLabel>
                </FormGroup>

            </FormControl>

        </div>
    )
}

export default CheckBoxx
