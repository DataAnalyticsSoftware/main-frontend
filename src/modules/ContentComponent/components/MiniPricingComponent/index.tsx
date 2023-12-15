import React from 'react'
import { Stepper,Box, Typography, TextField, Grid, Paper,StepLabel,Step, Button } from '@mui/material';

export const MiniPricingComponent=({price, title, description, link})=> {
  return (
    <Box style={{backgroundColor:'#111827', height:'74.5px', borderRadius:'25px', display:'flex',alignItems:'center', color:'white', marginBottom:'6px'}}>
        <Grid item xs={4}>
            <Typography style={{fontSize:'32px', marginBottom:'-12px', fontWeight:800}}>{price}$</Typography>
            <p style={{marginBottom:'4px'}}>/month</p>
        </Grid>
        <Grid item xs={6} style={{textAlign:'left'}}>
            <Typography style={{fontWeight:700,fontSize:'22px'}}>{title}</Typography>
            <Typography style={{fontSize:'14px'}}>{description}</Typography>
        </Grid> 
        <Grid item xs={2} style={{textAlign:'left', backgroundColor:'#4F46E5', borderRadius:'25px', height:'100%', paddingTop:'8px',}}>
            <Button style={{outline: 'none', color:'white', fontWeight:700}}>More Info</Button>
        </Grid>        
    </Box>
  )
}