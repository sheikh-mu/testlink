import React from 'react'
import { AppBar, TextField } from '@material-ui/core'
import {Toolbar} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SearchProduct from './SearchProduct'
import {Grid, Button} from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import { MapContainer}   from '../Testing/TestMap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  const [Directions,setDirections]=React.useState({})
    return (
      <Router>
      <Grid container direction="column"  >  
        <Grid item style={{margin:"5px 10px 5px 10px"}}>
        <AppBar position='static'>
       
       <Toolbar className={classes.toolbar}>
       <Button size="small" href="http://localhost:3000/home" > 
       <Avatar src={image} />
         </Button>
    
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          style={{fontFamily:"Roboto",fontWeight: 'Bold'}}
          noWrap
          className={classes.toolbarTitle}
        >
    X Pharmacy
        </Typography>
      
        
     <Button size="small" variant="contained" color="secondary" href="http://localhost:3000/"    
     style={{
                fontFamily: 'Roboto',
                fontSize:'14px',
                // fontWeight: 'Bold',
                borderRadius: '40px'
                
              }}>
     Relocate
     </Button>
     
      </Toolbar>
    </AppBar>
    </Grid>
    </Grid>


<Switch>

<Route exact path="/">
 <MapContainer data={Directions} />
</Route>

<Route path="/home">
 <SearchProduct  />
</Route>



</Switch>

</Router>
   
    )
}
