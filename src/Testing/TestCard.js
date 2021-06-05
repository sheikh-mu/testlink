import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography , Button, Grid, Tooltip} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { CardHeader} from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import {Chip} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
  root: {
    Width: "100%",

  },
  media: {
    height: 300,
    width:'100%',
  },
  avatar: {
    backgroundColor: '#440A67',
  },
  location:{
   
    fontFamily:"Roboto"
   
  },
  heading1:{
    
    fontFamily:"Oswell",
    fontSize:"28px",
  },
  heading2:{
    fontFamily:"Roboto",
    fontSize:"16px"
  },
  heading3:{
    fontFamily:"ubuntu  ",
    fontSize:"",
    letterSpacing:"1%",
    fontWeight:""

  },
  pricebttn:{
    marginLeft:"4px",
    backgroundColor:"#ECCE3E"
  },
  bttn:{
    backgroundColor:"#3AB3D2"
  },
  picture: {
  height:300,
    width:"100%",
  },
  nav: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  discount: {
   fontWeight:'bold'
 
  }
}));

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
    <Typography variant="h5" >{children}</Typography>
    {onClose ? (
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    ) : null}
  </MuiDialogTitle>
);
});

const DialogContent = withStyles((theme) => ({
root: {
  padding: theme.spacing(2),
},
}))(MuiDialogContent);


export default function TestCard(props) {
  const classes = useStyles();
  const {  product, Price, desc,vendor,loc,img,chemical,initial,symp_1,symp_2,symp_3 ,detail, disc,cat} = props;
  const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
//  const onDesc=() =>{
//    console.log("Hello");
//  }

  return (
    <Card  className={classes.root} elevation={4} >
{/*       
      <Button variant="contained" size="small" color="secondary" className={classes.location} ><LocationOnRoundedIcon />  {loc} Distance</Button> */}
      
      <Chip color="secondary"  icon={<LocationOnRoundedIcon />} label={loc} />
      <Button variant="contained" size="small" color="primary" className={classes.discount} style={{float:'right'}}>  {disc}%off</Button>
    

      <CardHeader
        avatar={
          <Avatar  className={classes.avatar}>
          { initial}
          </Avatar>
        }
        
           title={   
             <Typography variant="h7"style={{fontSize:"24px", fontFamily:"Roboto"}} >{vendor}</Typography>    }
          subheader={
           <div>
        <Typography variant="h7" >Address</Typography>
            </div>
          }
       /> 
             
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={img}
        
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" className={classes.heading1}>
            {product}  {<Typography className={classes.heading2}>{chemical}</Typography>}
            </Typography>
            
        <Typography variant="h5" color="textSecondary" component="p" className={classes.heading3}>
            {cat}
          </Typography>
    
          <Typography variant= "h4" style={{color:"#29BB89",fontFamily:'Calibri'}}>Rs. {Price}</Typography>
        </CardContent>
   
      </CardActionArea>

      <Button fullWidth variant="contained" color="Primary" onClick={handleClickOpen}>
        See Description
      </Button>
      <Dialog fullScreen={true} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle onClose={handleClose}>
          {product}       
                         
        </DialogTitle>
        
        
        <DialogContent dividers>
        <CardMedia 
             className={classes.picture}
             image={img}
              /> 
              <br />
        <div className={classes.nav}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example" >
            <Tab style={{paddingInline:20}}label="Details" value="1" />
            <Tab style={{paddingInline:20}} label="Usage" value="2" />
            <Tab  style={{paddingInline:20}}label="Precautions" value="3" />
          </TabList>
        </AppBar>
        
        <TabPanel value="1">
        <Typography variant="h6"style={{fontWeight:"bold"}}>Generic Name:
          {<Typography variant= "h5" style={{color:"#29BB89",fontFamily:'Calibri'}}> {chemical} </Typography>}
          </Typography>
          <hr />
          <Typography variant="h6"style={{fontWeight:"bold"}}>Category:
          {<Typography variant= "h5" style={{color:"#29BB89",fontFamily:'Calibri'}}> {cat} </Typography>}
          </Typography>

          

          <hr />

            <Typography variant="h6"style={{fontWeight:"bold"}} >Price:
            {<Typography  variant= "h5" style={{color:"#29BB89",fontFamily:'Calibri'}}> Rs. {Price} per box</Typography>} 
            </Typography> 

            <hr />

             <Typography variant="h6" style={{fontWeight:"bold"}}>Product Specification:
                    
                   { <Typography>
                     <ul>
                      <li>1.56 Rs each tablet</li>
                      <li>10 strips </li>
                      <li>200 tablets each box</li>
                      </ul>
                    </Typography>}
                   </Typography>
                    
                    <hr />

              <Typography variant="h6" style={{fontWeight:"bold"}}> Vendor Name: 
              {<Typography variant= "h5" style={{color:"#29BB89",fontFamily:'Calibri'}}>{vendor}</Typography>}
              </Typography>

              <hr />

              <Typography variant="h6"style={{fontWeight:"bold"}} > Vendor Location: 
              {<Typography variant= "h5" style={{color:"#29BB89",fontFamily:'Calibri'}}>{loc}</Typography>}
              </Typography>
              <hr />
          </TabPanel>

        <TabPanel value="2">
        <Typography variant="h6" style={{fontWeight:"bold"}}> Symptoms</Typography>
        <hr />
        <div  style={{paddingInline:20}}>
          <li> <Chip color="secondary" label={symp_1} /></li>  
            <br />
          <li><Chip color="secondary" label={symp_2} /></li>  
            <br />
          <li><Chip color="secondary" label={symp_3} /></li>
        </div>
          </TabPanel>

        <TabPanel value="3">
           
          </TabPanel>

      </TabContext>
    </div>
        </DialogContent>
    
      </Dialog>

    </Card>
    
  );
}
