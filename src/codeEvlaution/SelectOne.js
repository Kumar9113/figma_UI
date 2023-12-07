import { Box, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

function SelectOne() {
    return (
        <div >
            <Box width='250px'>
                <TextField label='select Country' select fullWidth>
                    <MenuItem>India</MenuItem>
                    <MenuItem>USA</MenuItem>
                    <MenuItem>London</MenuItem>

                </TextField>
            </Box>
            <div style={{ margin: 50, color: 'red' }}>
                <Select label="select" value="" fullWidth>
                    <MenuItem value="">Select Item</MenuItem>
                    <MenuItem value={1}>NOde</MenuItem>
                    <MenuItem value={2}>Php</MenuItem>
                    <MenuItem value={3}>java</MenuItem>
                    <MenuItem value={4}>javaScript</MenuItem>
                </Select>
            </div>


        </div>
    )
}

export default SelectOne
