import { Phone, Send, Star, Traffic } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

function Buttons() {
    return (
        <div>
            <Button variant='contained'>HEllo</Button>
            <Button variant='outlined'>HEllo</Button>
            <Button variant='text'>HEllo</Button>

            <Button variant='contained' disabled>HEllo</Button>
            <Button variant='contained' endIcon={<Star></Star>}>HEllo</Button>
            <Button variant='contained' startIcon={<Phone></Phone>}>HEllo</Button>
            <Button variant='contained' startIcon={<Send></Send>} endIcon={<Traffic></Traffic>}>HEllo</Button>

            <Button variant='contained' size='small'>HEllo</Button>
            <Button variant='outlined' size='medium'>HEllo</Button>
            <Button variant='contained' size='large'>HEllo</Button>


        </div>
    )
}

export default Buttons

