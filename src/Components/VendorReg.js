import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import { Checkbox, FormControlLabel, TextField, Chip, Tooltip, Link, Grid, Typography, Button, Container, Fab, IconButton, InputAdornment } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { makeStyles } from '@material-ui/core/styles';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import MuiAlert from '@material-ui/lab/Alert';

// import { Icon } from '@iconify/react';
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// VendorReg styling CSS
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      
    },
    input: {
      display: 'none',
    },
    fab: {
      margin: theme.spacing(2),
    },
   
    form: {
      width: '70%', 
    //   marginTop: theme.spacing(1),
      align: 'left',
    },
    submit: {
      margin: theme.spacing(3),
      
    },
    underline: {
      borderBottom: '1px solid black',
      padding: '10px',
     fontFamily:'Rockwell',
     fontSize: 30,
    },
    typographyline:{
      borderBottom: '1px solid black',
      padding: '2px',
     fontFamily:'Rockwell',
     marginTop: theme.spacing(3),
    },
    imageline:{
      fontFamily:'Roboto',
      fontSize: 11,
      fontWeight: 'bold',
      marginTop: theme.spacing(3),

    },
    location:{
        marginLeft: theme.spacing(4),
        margintop: theme.spacing(2),
       
  
        
    }
  }));

// Map styling CSS
  const mapStyles = {        
    height: "50vh",
    width: "100%"};

function VendorReg() {
    const classes = useStyles();
    // const [showPassword, setShowPassword] = useState(false);
    // const { fname,lname, email, password, contact,CNIC,lat,lng}= formData;
   
    const [formData, setFormData] = useState({
      fname: "",
      lname:"",
      email: "",
      password: "",
      contact:"",
      CNIC:"",

      // lat: 24.856989618794938,
      // lng: 67.00358817634353 
       
    });

     // state hook and initial coordinates
  const [ currentPosition, setCurrentPosition ] = useState({
    lat: 24.856989618794938,
      lng: 67.00358817634353
  });

//passing the live coordinates to variable 
  const current = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
    
    // const propertyValues = Object.values(currentPosition);
    //  console.log(propertyValues);
  };

  // On Marker Drag
  const onMarkerDragEnd = (e) => {
    const currentPosition = {
     lat: e.latLng.lat(),
    lng : e.latLng.lng()
    }
    setCurrentPosition(currentPosition)
    console.log(currentPosition);
    // const propertyValues = Object.values(currentPosition);
    // //document.getElementById('location')
    //  console.log(propertyValues);
  };

  // OnClick live Button
  const onUpdate = () =>{
    navigator.geolocation.getCurrentPosition(current);
 
  }
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(current)
  //    },[])
  
  const propertyValues = Object.values(currentPosition);
  
  console.log(propertyValues);
 
  
  
// const { fname,lname, email, password, contact,CNIC,}= formData;

const handleChange = (event) => {
  
  setFormData({ ...formData, 
    [event.target.name]: event.target.value });
};

  // Post API
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://192.168.0.107/api/vandorregister', { formData} )
    .then(response => {
        console.log(response);
        console.log(response.data)
        
        setFormData({ formData: response.data })
      })
      .catch(error => {
 
        console.log(error)
        
      })
      console.log(formData)
        console.log('hello')

        
}  
  
return (
        <Container  component="main" maxWidth="md">
    
      <div className={classes.paper}>
    
        <Typography 
          component="h1" 
          align= 'center' 
          className= {classes.underline}
        >
         Vendor Registration
        </Typography>

        <Grid container
               direction="column" 
                justify="center"
               alignItems="flex-end">
          <Typography className={classes.typographyline}>
            Vendor Image / Logo
            </Typography>
        
      
            <Typography className={classes.imageline}>
              *Upload image having resolution between <br/>
                    340 x 340 to 1080 x 1080
            </Typography>
<br />
            <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
     
            <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>     
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Browse
          </Button>
          </ Grid>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >

{/* FName */}
              <TextField
               
               name="fname"
                variant="outlined"
                required
                fullWidth
                // value={fname}
                onChange={handleChange}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
             
                fullWidth
                id="location"
                label="Coordinates"
                name="location"
                type="text"
                value={propertyValues}
               
              />
            </Grid> 

{/* Map */}
            <Grid item xs={12}>                  
                    <Typography variant='h6' 
                    align= 'left'

                    >Store Location</Typography> 
                    < hr />
             
               <Chip color="primary" label='Drag Marker to set position'  />        
              
                      <Tooltip title=" Use Current Location" arrow  >
                            <Fab  variant = "round"color="secondary" aria-label="add" size="large" onClick={onUpdate} className={classes.fab}> <LocationOnRoundedIcon /></Fab>
                      </Tooltip>

                                    <LoadScript
                                          googleMapsApiKey='AIzaSyARJeIBTthW0nJPJh-lUW0DnD329a8es9c'>
                                            <GoogleMap
                                              mapContainerStyle={mapStyles}
                                              zoom={16}
                                              center={currentPosition} 
                                              >
                                                {
                                            currentPosition.lat ? 
                                              <Marker
                                              position={currentPosition}
                                              onDragEnd={(e) => onMarkerDragEnd(e)}
                                              
                                              
                                              draggable={true} /> :
                                              null
                                            }
                                          
                                            </GoogleMap>
                                          
                                            </LoadScript>
                     
                
            </Grid>
        
                <Grid >
                  <FormControlLabel 
                    control={<Checkbox  color='primary'  required/>}
                    label= " I agree with the terms and policies and have read the guidlines "/>
                </Grid>
     </Grid>
          
          {/*Submit Button */}
          <Button       
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >Confirm</Button>

         
                </form>
                      <Link href="http://192.168.0.110/login" target="_blank" variant="body2" color="Secondary">
                              Already have an account? Sign in
                            </Link>
              </div>


              {/* <Snackbar open={alert} autoHideDuration={6000} onClose={handleOff}>

<Alert onClose={handleOff} severity="success">
        Location Confirmed!
</Alert>
</Snackbar> */}
                        
    </Container>
    )
}

export default VendorReg
