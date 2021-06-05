import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
export class Navigate extends Component {
   
    render() {
        return (
            <div style ={{paddingLeft:'4px '}} >
            <Button style={{borderRadius:'100%', width:'10px', height:'50px', float:'right'}}  size="small" variant="contained" contained target="_blank" href="http://192.168.43.43/">
              <AccountCircleTwoToneIcon />
            </Button>
             
            </div>
        )
    }
}

export default Navigate
