import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import { MapContainer } from '../Testing/TestMap';
  import SearchProduct from './SearchProduct'
  import VendorReg from './VendorReg';


  export default function BasicExample() {
    return (
            <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Loc</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/vendor">Vendor</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
           <MapContainer />
          </Route>
          <Route path="/home">
           <SearchProduct />
          </Route>
          <Route path="/vendor">
           <VendorReg />
          </Route>
        </Switch>
      </div>
    </Router>
      
    
      );
    }