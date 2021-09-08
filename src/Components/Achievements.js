import React from 'react'
import {Avatar, Paper, Typography, Grid} from "@material-ui/core"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Carousel}from 'react-bootstrap'
const picture=[
  {person:'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {person:'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {person:'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {person:'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
]
export default function Achievements() {
  const image='https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
   const hel='https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
  return (
        <div>
         
         
       <Accordion defaultExpanded={true} square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Vendors</Typography>
        </AccordionSummary>
       
        <AccordionDetails>
      <img style={{borderRadius:'100%', width:'100px',verticalAlign:'middle', height:'100px'}} src="https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" >Testimonials</Typography>
        </AccordionSummary>
        
        <AccordionDetails>



        </AccordionDetails>
        </Accordion>
      
    
        </div>
    
)}
