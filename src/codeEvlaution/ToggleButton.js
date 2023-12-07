import { FormatBold } from '@mui/icons-material'
import { ToggleButtonGroup } from '@mui/material'
import React from 'react'

function ToggleButton() {
    return (
        <div>
            <ToggleButtonGroup>
                <ToggleButton value="web">Web</ToggleButton>
                <ToggleButton value="android">Android</ToggleButton>
                <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>


        </div >
    )
}

export default ToggleButton
