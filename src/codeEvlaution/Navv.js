import { CatchingPokemon, CheckBox, Favorite, FavoriteBorder, MailLock, NavigateNext, Phone, Send, Speed } from '@mui/icons-material'
import { Alert, AlertTitle, AppBar, Avatar, AvatarGroup, Badge, BottomNavigation, BottomNavigationAction, Breadcrumbs, Button, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, LinearProgress, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Radio, RadioGroup, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'

function Navv() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='error' aria-label='logo'>
                        <CatchingPokemon></CatchingPokemon>
                    </IconButton>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>ABCDEF</Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='success'>HEllo</Button>
                        <Button color='success'>HEllo</Button>
                        <Button color='success'>HEllo</Button>
                        <Button color='success' id='HEllo'>HEllo</Button>
                    </Stack>
                    <menu id="HEllo">
                        <MenuItem>HEllo 1</MenuItem>
                        <MenuItem>HEllo 2</MenuItem>
                    </menu>

                </Toolbar>
            </AppBar>

            <Stack>
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                    {'color="inherit"'}
                </Link>
                <Link href="#" variant="body2">
                    {'variant="body2"'}
                </Link>


            </Stack>
            <Stack>
                <Breadcrumbs maxItems={2} itemsAfterCollapse={2} separator={<NavigateNext></NavigateNext>}>
                    <Link href="#">Link</Link>
                    <Link href="#" color="inherit">
                        {'color="inherit"'}
                    </Link>
                    <Link href="#" variant="body2">
                        {'variant="body2"'}
                    </Link>
                    <Link href="#">Link</Link>
                    <Link href="#" color="inherit">
                        {'color="inherit"'}
                    </Link>
                    <Link href="#" variant="body2">
                        {'variant="body2"'}
                    </Link>

                </Breadcrumbs>
            </Stack>

            <Drawer anchor='left' >
                <Typography variant='h6'>Side pannel</Typography>

            </Drawer>


            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >

                <SpeedDialAction

                    icon={<Phone></Phone>}
                    tooltipTitle='Phone'
                    tooltipOpen

                />
                <SpeedDialAction

                    icon={<Phone></Phone>}
                    tooltipTitle='Phone'

                />

            </SpeedDial>



            <BottomNavigation
                showLabels
                sx={{ position: 'absolute', bottom: 16 }}


            >
                <BottomNavigationAction label="Recents" icon={<Phone></Phone>} />
                <BottomNavigationAction label="Favorites" icon={<Send></Send>} />
                <BottomNavigationAction label="Nearby" icon={<Speed></Speed>} />
            </BottomNavigation>

            <Stack direction='row' spacing={2}>
                <Avatar sx={{ bgcolor: "red" }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'black' }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'violet' }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'gren' }}>BW</Avatar>
            </Stack>
            <AvatarGroup max={3}>
                <Avatar sx={{ bgcolor: "red" }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'black' }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'violet' }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'gren' }}>BW</Avatar>
            </AvatarGroup>

            <Badge badgeContent={1000} max={9} color='error'>
                <MailLock></MailLock>
            </Badge>
            <Badge variant='dot' color='error'>
                <MailLock></MailLock>
            </Badge>

            <List>
                <ListItemButton>

                    <ListItem>
                        <Avatar>
                            <ListItemIcon><Send></Send></ListItemIcon>
                        </Avatar>
                        <ListItemText primary="Send" secondary="sendtoKumar"></ListItemText>
                    </ListItem>
                </ListItemButton>
            </List>


            <Tooltip title="icon" placement='right' arrow enterDelay={500} leaveDelay={200}>
                <IconButton>
                    <Send></Send>
                </IconButton>
            </Tooltip>


            <Alert severity='error' variant='outlined' onClose={() => alert("Closed")} action={<Button>Undo</Button>}>
                <AlertTitle>Error</AlertTitle>
                This an erro</Alert>


            {/* ---- Dialog*/}

            <Button variant="outlined" >
                Slide in alert dialog
            </Button>
            <Dialog



                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button >Disagree</Button>
                    <Button >Agree</Button>
                </DialogActions>
            </Dialog>

            <CircularProgress color='success'></CircularProgress>
            <CircularProgress color='success' variant='determinate' value={60}></CircularProgress>
            <CircularProgress color='success'></CircularProgress>
            <CircularProgress color='success'></CircularProgress>

            <LinearProgress color='success'></LinearProgress>

            <FormControl>
                <FormLabel id='job-exprnece'>Years of Exprience
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-exprnece'>
                    <FormControlLabel control={<Radio></Radio>} label='0-2' value='0-2'></FormControlLabel>
                    <FormControlLabel control={<Radio></Radio>} label='3-5' value='3-5'></FormControlLabel>
                    <FormControlLabel control={<Radio></Radio>} label='6-10' value='6-10'></FormControlLabel>
                </RadioGroup>
            </FormControl>


            <FormControl>
                <FormLabel id='job-exprnece'>Skills
                </FormLabel>
                <FormGroup>
                    <FormControlLabel value='Kumar' label="Helloji" control={<CheckBox />}></FormControlLabel>
                    <FormControlLabel value='Kum' label="Hello Kumar" control={<CheckBox></CheckBox>}></FormControlLabel>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="Top"
                        labelPlacement="top"
                    />
                </FormGroup>

            </FormControl>

            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="Top"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="Bottom"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>



        </div>
    )
}

export default Navv
