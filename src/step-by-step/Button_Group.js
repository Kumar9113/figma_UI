import { Alert, AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, Grid, MenuItem, Radio, Rating, Select, Slider, Switch, Tab, Tabs, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Favorite, FavoriteBorder, TrafficSharp } from '@mui/icons-material'
import { getValue } from '@testing-library/user-event/dist/utils'
import { red } from '@mui/material/colors'
import logo from './logo.png'
function Button_Group() {
    const getValue = (e) => {
        console.log("Hello" + e.target.value);
    }
    const mark = [
        {
            value: 0,
            label: "start"
        },
        {
            value: 100,
            label: "middle"
        },
        {
            value: 200,
            label: "end"
        },
    ]
    const [value, setVal] = useState(1);
    // const handler = (e) => {
    //     setVal(val);
    // }
    const handler = (e) => {
        console.log(e.target.value);
    }
    return (

        //    -------ButtonGroup------
        // <div>
        //     <ButtonGroup color='secondary' disabled>
        //         <Button variant='outlined'>One</Button>
        //         <Button variant='contained'>Two</Button>
        //         <Button color='secondary' endIcon={<TrafficSharp></TrafficSharp>}>Three</Button>
        //     </ButtonGroup>
        // </div>


        //------checkBox-----  

        // <div>

        //     <Checkbox aria-label='Kumar' ></Checkbox>
        //     <Checkbox color='secondary' value="Kumar" onChange={(e) => getValue(e)} color='warning' icon={<FavoriteBorder></FavoriteBorder>} checkedIcon={<Favorite></Favorite>}></Checkbox>
        //     <Checkbox color='secondary' value="Kavi" int onChange={(e) => getValue(e)}></Checkbox>

        // </div>
        //-----Radio--------
        // <div>
        //     <span>Male</span><Radio value='male' onChange={(e) => getValue(e)}></Radio>
        //     <span>FeMale</span><Radio value='Female'></Radio>
        // </div>

        //----Slider--
        // <div style={{ width: 300, margin: 40, height: 300 }}>
        //     <Slider color='success' defaultValue={30} max={200} step={1} marks={mark} onChange={getValue} valueLabelDisplay='auto' orientation='vertical' ></Slider>


        // </div>

        //----select box---

        // <Select value="" displayEmpty>
        //     <MenuItem value="">Select Item</MenuItem>
        //     <MenuItem value={1}>NOde</MenuItem>
        //     <MenuItem value={2}>Php</MenuItem>
        //     <MenuItem value={3}>java</MenuItem>
        //     <MenuItem value={4}>javaScript</MenuItem>
        // </Select>

        //----textFiled----
        // <div style={{ margin: 50 }}>
        //     <TextField label="enter name" variant='standard' type='number'></TextField>
        //     <Switch color='success' size='medium'></Switch>
        //     <Box component="span" style={{ background: 'red' }} clone m={20}>
        //         <Button>HEllo</Button>
        //     </Box>
        //     <Container maxWidth="sm" style={{ backgroundColor: "skyblue" }}>
        //         <h1>HElloe world</h1>
        //     </Container>

        // </div>

        //----grid

        // <Grid item sm={12} container spacing={2}>
        //     <Grid item lg={6} style={{ backgroundColor: "skyblue" }}>
        //         <h1>xs=8</h1>
        //     </Grid>
        //     <Grid item lg={6} >
        //         <h1>xs=4</h1>
        //     </Grid>

        // </Grid>

        // <Grid item lg={6} container spacing={2}>
        //     <Grid item lg={6}><h1 style={{ backgroundColor: 'green' }}>Block-1</h1></Grid>
        //     <Grid item lg={6}><h1 style={{ backgroundColor: 'green' }}>Block-2</h1></Grid>

        // </Grid>

        <div>
            {/* <AppBar>
                <Tabs value={value} style={{ backgroundColor: "red" }} onChange={handler}>
                    <Tab label='item1'></Tab>
                    <Tab label='item2'></Tab>
                    <Tab label='item3'></Tab>
                </Tabs>
            </AppBar> */}
            <Rating name="simple-controlled" onChange={handler}></Rating>
            <Avatar src={logo} alt='image'></Avatar>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
        </div>


    )
}

export default Button_Group

