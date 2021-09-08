import React from 'react'
import { Button, Menu, MenuItem, Fade } from '@material-ui/core';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone';
import IconButton from '@material-ui/core/IconButton';

export default function Navigate() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
   

    return (
        <div>
      
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          <IconButton   edge="end" color="secondary" > <AccountCircleTwoTone /> </IconButton>   Vendor Sign Up/Sign In </Button>
  <Menu
    id="fade-menu"
    anchorEl={anchorEl}
    keepMounted
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
  
  >
    

    <MenuItem onClick={handleClose}  >
        <Button href="http://localhost:3000/" target="_blank" >Create an Account</Button>
        </MenuItem>

    <MenuItem onClick={handleClose}>
        <Button href="http://192.168.0.110/login" target="_blank" >Already have an Account</Button>
        </MenuItem>

  </Menu>
         
        </div>
    )
}

