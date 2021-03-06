import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Typography, Paper, Fab, } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
// import NativeSelect from '@material-ui/core/NativeSelect';
import TestCard from '../Testing/TestCard';
import '../material.css'
import Navbar from './Navbar';

class ProductList extends Component {

  constructor(props) {
    super(props)
console.log("props k data in search product", props.data.Directions)
    this.state = {
      posts: [],
      testState: "",
      name:'',
      data: [

        {
          product_name: 'Panadol',
          regular_price: '20.5',
          product_description: '',
          vandor: 'The Chemist Pharmacy',
          location: '0.5 KM',
          chemical_name: 'Paracetamol',
          imgURL: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          imgTitle: 'Paracetamol',
          initial_name: 'TCP',
          sym1: "Body pain",
          sym2: "fever",
          sym3: "temperature",
          discount: "5"
        },
        {
          product_name: 'Panadol',
          regular_price: '20.5',
          product_description: '',
          vandor: 'The Chemist Pharmacy',
          location: '0.5 KM',
          chemical_name: 'Paracetamol',
          imgURL: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          imgTitle: 'Paracetamol',
          initial_name: 'TSP',
          sym1: "Body pain",
          sym2: "fever",
          sym3: "temperature",

        },

        {
          product_name: 'Panadol',
          regular_price: '10',
          product_description: '',
          vandor: 'Bin Hashim Pharmacy',
          location: '0.7 KM',
          chemical_name: 'Paracetamol',
          imgURL: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          imgTitle: 'Paracetamol',
          initial_name: 'BHP',
          sym1: "Body pain",
          sym2: "fever",
          sym3: "temperature",


        },

        {
          product_name: 'Panadol',
          regular_price: '20',
          product_description: '',
          vandor: 'Dvago Pharmacy',
          location: '1 KM',
          chemical_name: 'Paracetamol',
          imgURL: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          imgTitle: 'Paracetamol',
          initial_name: 'DP',
          sym1: "Mild Pain",
          sym2: "fever",
          sym3: "temperature",

        },

        {
          product_name: 'Panadol',
          regular_price: '10',
          product_description: '',
          vandor: 'Bin Safeer Pharmacy',
          location: '1.2 KM',
          chemical_name: 'Paracetamol',
          imgURL: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          imgTitle: 'Paracetamol',
          initial_name: 'BSP',
          sym1: "Mild Pain",
          sym2: "fever",
          sym3: "temperature",

        },
        {
          product_name: 'Panadol',
          regular_price: '10',
          product_description: '',
          vandor: 'Bin Safeer Pharmacy',
          location: '1.2 KM',
          chemical_name: 'Paracetamol',
          imgURL: 'https://images.unsplash.com/photo-1576072060548-105cb2a8e670?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          imgTitle: 'Paracetamol',
          initial_name: 'BSP',
          sym1: "Mild Pain",
          sym2: "fever",
          sym3: "temperature",

        },
        {
          product_name: 'Panadol',
          regular_price: '10',
          product_description: '',
          vandor: 'Bin Safeer Pharmacy',
          location: '1.2 KM',
          chemical_name: 'Paracetamol',
          imgURL: 'https://images.unsplash.com/photo-1576072060548-105cb2a8e670?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          imgTitle: 'Paracetamol',
          initial_name: 'BSP',
          sym1: "Mild Pain",
          sym2: "fever",
          sym3: "temperature",

        }
      ],
    }
  }
  // this._onButtonClick = this._onButtonClick.bind(this);

  // async componentDidMount() {
  //   let name;
  //   let response = await axios.get('http://192.168.0.107/api/search', { name }).then(response => {
  //     console.log(response);
  //     console.log(response.data)
  //     this.setState({ posts: response.data })
  //     this.setState({ testState: response.data.product_description })
  //     // console.log("description", this.state.testState)
  //   })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   // console.log({name});
  // }

  handleName = (event )=> {
    this.setState({
       [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault();
    //  alert('Product Searched for: ' + this.state.name);

    const {name} = this.state;
    const{msg}=this.state;


    axios.post('https://wearteachers.xyz/public/api/search', { name })

      .then(response => {
        // console.log(response,"responce");
        // console.log(response.data)
        // console.log(response.data.message,"Apna msg")
        
          // this.setState({ msg: response.data.message});
          console.log(response);
        console.log(response.data);
        // console.log(this.state.name)
       
        // console.log({name})
        this.setState({ posts: response.data })
   
        // this.setState({ testState: response.data.product_description })
        // console.log("yeh b description hy")

      })
      .catch(error => {
        console.log(error)
      })
    console.log({ name} );
  };
 
 

  // _onButtonClick() {
  //   this.setState({
  //     showComponent: true,
  //   });
  // }

  render() {
    const { posts} = this.state;

    return (

      <div >

        <form onSubmit={this.handleSubmit}>
          <div style={{ paddingTop: '20px' }} />
          <Grid container direction="row" justify="center" xs={12}>
            <Paper elevation={6} style={{ width: '90%', borderRadius: "50px" }} >
             


              
                  <TextField
                    style={{ width: '100%' }}
                    className="inputRounded"
                    id="filled-secondary"
                    placeholder="Search for Medicine "
                    variant="outlined"
                    color="secondary"
                    // required
                    type= "text"
                    name = "name" 
                    value={this.state.value}
                    onChange= {this.handleName}
                    InputProps={
                      {
                         
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
          

          {/* {this.state.msg} */}
          <Grid container direction="row" justify="center" xs={12}>
          
            <Fab type="submit" variant="extended" color="secondary" aria-label="add" size="large" onSubmit={this.handleSubmit} 
              style={{
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontWeight: 'Bold',
                borderRadius: '40px',
              }}
            > Search</Fab>

          </Grid>

          <br />

          <div style={{ paddingLeft: '10px' }}>
            <Typography variant='h7' style={{ fontWeight: 'bold'}}>Result Showing:{<Typography variant='h6' style={{color:"#29BB89",fontFamily:'Calibri'}}>{this.state.name}</Typography>}</Typography>
               </div>

        </form>
        {/* 
<div style={{padding:"20px 0px 0px 0px "}} align="right">   
    <Typography style={{fontFamily:"Oswell", fontSize:"14px", fontWeight:"bold"}}>Filter by:
    
    <FormControl required style={{ paddingLeft:" 10px "}} variant="outlined" >
   
        <NativeSelect
          id="demo-customized-select-native"
          
          
        >
          
          <option value={1}>Nearest Vendor</option>
          <option value={2}>Lowest Price</option>
          <option value={3}>Alternate</option>
        </NativeSelect>
      </FormControl>
    
    </Typography>

    
      </div> */}


        <hr />
        <div style={{ paddingTop: '20px' }} />

        <Grid item container>

          <Grid item xs={1} />

          <Grid item xs={10}>
            <Grid container spacing={5}>

              {posts.map(post =>
                <Grid item xs={12} sm={4}>
                  <TestCard
                    key={post.id}
                    product={post.product_name}
                    Price={post.sell_price}
                    desc={post.product_description}
                    vendor={post.name}
                    chemical={post.chemical_name}
                    cat={post.category}
                    pres={post.prescrip}
                    loc={post.distance}
                    add={post.location}
                     img={post.imgURL}
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

    );
  }
}
export default ProductList

const medicineList = [
  { title: 'Panadol' },
  { title: 'Concor' },
  { title: 'Brufen' },
  { title: 'Disperine' }

];