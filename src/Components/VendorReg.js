import React from 'react'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      
    },
   
    form: {
      width: '50%', 
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
     fontSize: 34,
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


function VendorReg() {
    const classes = useStyles();
    return (
        <Container  maxWidth="md">
      
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
            
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Browse
          </Button>
          </ Grid>

        <form className={classes.form}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Vendor Name"
                autoFocus
              />
              </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
              />
            </Grid>

            <Grid item xs={16}>
                       
            <TextField
             id="outlined-multiline-static"
             label="Location"
             multiline
            maxWidth
             rows={4}
           
             variant="outlined" />
             
                <Button 
                variant = "outlined" 
                size= 'large'  
                color= '#0000' 
                className={classes.location} 
                // onClick = {} 
                >  <RoomRoundedIcon />
                </Button>
               

             
            </Grid>
           
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                fullWidth
                id="Contact"
                label="Contact"
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                
              />
            </Grid>
           
           
            <Grid >
      
              <FormControlLabel 
                control={<Checkbox  color='primary' />}
                label= " I agree with the terms and policies and have read the guidlines "
              />
            </Grid>
            </Grid>
          
          {/*Submit Button */}
          <Button       
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Confirm</Button>
             
        </form>
      </div>
    
    </Container>
    )
}

export default VendorReg
