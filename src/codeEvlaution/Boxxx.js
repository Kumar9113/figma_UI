import { Box } from '@mui/material'
import React from 'react'

function Boxxx() {
    return (
        <div>
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    height: '100px',
                    width: '100px',
                    padding: '16px',
                    '&:hover': {
                        backgroundColor: 'primary.light'
                    }

                }}>codeEvlaution

            </Box>
            <Box
                display='flex'
                height='100px'
                width='100px'
                bgcolor='success.light'
                p={2}

            >

            </Box>


        </div>
    )
}

export default Boxxx
