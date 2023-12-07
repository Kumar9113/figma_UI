import { Button } from '@mui/material'
import React from 'react'
import { Delete } from '@mui/icons-material'
import { Send } from '@mui/icons-material'
//buttons

function First() {
    return (
        <div>
            <div>
                <h1>React -MUI</h1>
                <button>click me</button>
                <Button color='primary'>Meterial UI Button</Button>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary" startIcon={<Send></Send>}>
                    Primary
                </Button>
                <Button variant="contained" color="secondary" size='large'>
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button endIcon={<Delete></Delete>} variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>

            </div>

        </div>
    )
}

export default First
