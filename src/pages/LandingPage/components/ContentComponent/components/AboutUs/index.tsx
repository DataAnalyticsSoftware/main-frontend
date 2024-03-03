import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { PrincipalIconDas } from '../../../../../../components/SvgDas';

export const AboutUs=()=> {
  return (
    <Box sx={{paddingTop:2}}>
      <h4 style={{color:'#fe5b05', paddingBottom:2, fontWeight:400}}>About Us</h4>
      <h1 style={{fontWeight:600}}>Simple Solution to Complex<span style={{color:'#fe5b05', paddingBottom:2, paddingLeft:2}}>Connections</span></h1>
      <p>
        Is a Service that specializes in optimize helping, filtering and organization all your company's database.
      </p>
      <Box sx={{display:'flex',justifyContent: 'space-evenly',fontWeight:600}}>
        <Box sx={{ textAlign: 'center',justifyContent: 'space-evenly'}}>
         <i className="bi bi-check-circle"></i> High Analysis
        </Box>
        <Box sx={{ textAlign: 'center',justifyContent: 'space-evenly',paddingLeft:2 }}>
          <i className="bi bi-check-circle"></i> Certified Platform
        </Box>
      </Box>
      <Box sx={{backgroundColor:'white', my:4, textAlign:'center' }}>
        <img height={250} width={300} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/landing-photo.png"}`}/>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button sx={{backgroundColor:'#fe5b05', color:'#FFFFFF', padding:2}} variant="text">Learn More</Button>
      </Box>
    </Box>
  )
}