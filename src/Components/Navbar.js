import React from 'react'
import { AppBar, TextField } from '@material-ui/core'
import {Toolbar} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Navigate from './Navigate'
import {Grid, Button} from "@material-ui/core"
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone'
import Backdrop from '@material-ui/core/Backdrop';

import SearchIcon from '@material-ui/icons/Search';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import SearchProduct from './SearchProduct'
import VendorReg from './VendorReg';
import { MapContainer } from '../Testing/TestMap';

const useStyles= makeStyles((theme) => ({
typograhyStyles:{
    
    fontFamily:'Rockwell',
    fontSize:18,
    margin:theme.spacing(2)
    
},
backdrop: {
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
},
toolbar: {
  borderBottom: `1px solid ${theme.palette.divider}`,
  
},
toolbarTitle: {
  flex: 2,
  fontFamily:'Rockwell',
  fontSize:18,
},
button: {
  margin: '2px',
}
}));

export default function Navbar() {
    const classes = useStyles();
    const image='https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

    return (
      <Router>
      <Grid container direction="column"  >  
        <Grid item style={{margin:"5px 10px 5px 10px"}}>
        <AppBar position='static'>
       
       <Toolbar className={classes.toolbar}>
       <Avatar src={image} />
        <Button size="small" href="http://localhost:3000/"> Smart Pharmacy</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          style={{fontFamily:"Rockwell"}}
          noWrap
          className={classes.toolbarTitle}
        >
    
        </Typography>
        
     <Button size="small"  color="secondary" href="/location">
     Location
     </Button>
     
     <Button size="small" variant="contained" color="secondary" href="/home" className={classes.button}>
     Home
     </Button>

    

      </Toolbar>
    </AppBar>
    </Grid>
    </Grid>


<Switch>

<Route  path="/location">
 <MapContainer />
</Route>

<Route path="/home">
 <SearchProduct />
</Route>



</Switch>

</Router>
   
    )
}
