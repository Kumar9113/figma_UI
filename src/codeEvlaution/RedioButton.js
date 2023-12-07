import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

function RedioButton() {
    return (
        <div>
            <FormControl>
                <FormLabel id='job-exprnece'>Years of Exprience
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-exprnece'>
                    <FormControlLabel control={<Radio></Radio>} label='0-2' value='0-2'></FormControlLabel>
                    <FormControlLabel control={<Radio></Radio>} label='3-5' value='3-5'></FormControlLabel>
                    <FormControlLabel control={<Radio></Radio>} label='6-10' value='6-10'></FormControlLabel>
                </RadioGroup>
            </FormControl>

        </div>
    )
}

export default RedioButton
