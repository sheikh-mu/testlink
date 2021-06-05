import React from 'react'
import { Button } from '@material-ui/core';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../material.css'
import '../App.css'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { Typography, Tooltip, Dialog, DialogContent, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';


const mapStyles = {        
    height: "60vh",
    width: "100%"};

    const styles = (theme) => ({
      root: {
        fontFamily:"Calibri",
        margin: 0,
        padding: theme.spacing(2),
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
    });
    
    const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other} = props;
      return (
      <MuiDialogTitle disableTypography TransitionComponent className={classes.root} {...other}>
        <Typography >Choose your Location</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
    });

    export const MapContainer = () => {
    const [ currentPosition, setCurrentPosition ] = useState({
      lat: 24.856989618794938,
      lng: 67.00358817634353
    });
    // const [post, setPost] = useState({});
    const success = () => {
      const currentPosition = {
        lat: 24.856989618794938,
        lng: 67.00358817634353
      }
    setCurrentPosition(currentPosition);
    console.log(currentPosition);
  };

    const current = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
      console.log(currentPosition);
    };

 useEffect(() => {
   navigator.geolocation.getCurrentPosition(success)
    },[])

    const onMarkerDragEnd = (e) => {
        const currentPosition = {
         lat: e.latLng.lat(),
        lng : e.latLng.lng()
        }
        setCurrentPosition(currentPosition)
        console.log(currentPosition);
      };    
     const onUpdate = () =>{
        navigator.geolocation.getCurrentPosition(current);
        
      }
 
 const onSubmit = () => {
        axios.post('http://192.168.43.43/api/search', { currentPosition})
        .then(response => {
            console.log(response);
            console.log(response.data)
            
          //  setPost({ post: response.data })
          })
          .catch(error => {
     
            console.log(error)
            
          })
          console.log(currentPosition)
            console.log('hello')


    }

    
    const [open, setOpen] = React.useState(true);
  
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    const handleClose = () => {
      setOpen(false);
    };
    return (
    
      <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
      <DialogTitle  className = 'App-header' onClose={handleClose} >
  
      </DialogTitle>
  
      <DialogContent>
         <div style={{ paddingTop: '5px',paddingBottom:'5px' }} align= "center">
                  <Tooltip title=" Use Current Location" arrow  >
                    <Button onClick={onUpdate} variant="contained" color="secondary"style={{ borderRadius: 50,  height: 80, width: 80, padding:5  }} > <LocationOnRoundedIcon color="inherit" fontSize="large"/>  </Button>
                  </Tooltip> 
          
               </div>
               <Typography variant="h5">Drag Marker to set position</Typography>
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
                        <br />
                        <div align= "center"><Button onClick={onSubmit} color="primary" variant="contained" style={{ borderRadius: 50 }}>Confirm</Button></div>
      </DialogContent>
  
  
    </Dialog>
    )
  }
