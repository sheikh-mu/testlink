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
import { MapContainer } from '../Testing/TestMap';

const useStyles= makeStyles((theme) => ({
typograhyStyles:{
    
    fontFamily:'Rockwell',
    fontSize:20,
    margin:theme.spacing(2)
    
},
backdrop: {
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
},
}));



export default function Navbar() {
    const classes = useStyles();
    const image='https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    return (
      <Grid container direction="column"  >  
        <Grid item style={{margin:"5px 10px 5px 10px"}}>
        <AppBar position='static'>
        <Toolbar>

          <Avatar src={image} />
           
            <Typography className={classes.typograhyStyles} >
               Smart Pharmacy
            </Typography>
            <div>
            <IconButton   edge="end" color="secondary" target="_blank" href="http://192.168.43.43/">
              <AccountCircleTwoTone />
            </IconButton>
            </div>
          {/* <Button variant="outlined"  onClick={handleToggle} >Map</Button>
          <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
  
      </Backdrop> */}
        </Toolbar>
       
      
    </AppBar>
    </Grid>
    </Grid>
   
    )
}
