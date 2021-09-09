import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import TestCard from '../Testing/TestCard';
import { Button, TextField, Typography, Paper, Fab, } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function Products() {
    
    const [formData, setFormData] = useState(0);
    const [name, setName]= useState('');

     const handleChange = (event) => {
  
        setName({  
          [event.target.name]: event.target.value });

      };

     const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.get('http://192.168.0.107/api/search',  name )
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
        <div>
    <form onSubmit={handleSubmit}>
          <div style={{ paddingTop: '20px' }} />
          <Grid container direction="row" justify="center" xs={12}>
            <Paper elevation={6} style={{ width: '90%', borderRadius: "50px" }} >
                                                            <TextField

                                                className="inputRounded"

                                                id="filled-secondary"
                                                placeholder="Search for Medicine "
                                                variant="outlined"
                                                color="secondary"
                                                required
                                                value={name}
                                                onChange={handleChange}
                                                InputProps={
                                                {
                                                    type: 'search',
                                                    startAdornment: (
                                                    <InputAdornment position="end">
                                                        <SearchIcon />
                                                    </InputAdornment>
                                                    )
                                                }}

                                                />

                                                </Paper>
                                                </Grid>
                                                <br />
                                                <Grid container direction="row" justify="center" xs={12}>
          
          <Fab type="submit" variant="extended" color="secondary" aria-label="add" size="large" onClick={handleSubmit}
            style={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontWeight: 'Bold',
              borderRadius: '40px',
            }}
          > Search</Fab>

        </Grid>

        <br />

        <div style={{ paddingLeft: '10px' }}><Typography variant='h6' style={{ fontWeight: 'bold' }}>Result showing:</Typography></div>

      </form>
    <div style={{ paddingTop: '20px' }} />

<Grid item container>

  <Grid item xs={1} />

  <Grid item xs={10}>
    <Grid container spacing={5}>

      {formData.map(post =>
        <Grid item xs={12} sm={4}>
          <TestCard
            key={post.id}
            product={post.product_name}
            Price={post.regular_price}
            desc={post.product_description}
            vendor={post.vandor}
            chemical={post.chemical_name}
            cat={post.category}
            loc={post.location}
            // img={post.imgURL}
            initial={post.initial_name}
            symp_1={post.sym1}
            symp_2={post.sym2}
            symp_3={post.sym3}
            disc={post.discount}
          //  vendor = {post.users.name} 
          // loc = {post.users.location.title}

          />

        </Grid>
      )}

    </Grid>
  </Grid>

  <Grid item xs={1} />

</Grid>




        </div>
    )
}
export default Products