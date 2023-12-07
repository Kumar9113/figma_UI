import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ButtonGroup, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
function Hello() {
    return (
        <>
            <CssBaseline></CssBaseline>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera></PhotoCamera>
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color="red" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color="textSecondary" paragraph>
                            ksf  rri grifbger g ibviddf gibg rbg  bbvfbxdfv iid bvibfv dfibv kkfa-border''f
                            gdshgb sbvi bbv hhdfvi  variant eguegje
                            '
                        </Typography>
                        {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup> */}
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        see my Photos

                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        secondary actions
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default Hello
