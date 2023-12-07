import { Box, Divider, Stack } from '@mui/material'
import React from 'react'

function Stackk() {
    return (
        <div>
            <Stack sx={{ border: '2px solid red' }} direction='column-reverse' spacing={2} divider={<Divider orientation='vertical' flexItem></Divider>}>
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
            </Stack>

        </div>
    )
}

export default Stackk
