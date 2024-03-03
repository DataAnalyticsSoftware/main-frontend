import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { PrincipalIconDas } from '../../../../../../components/SvgDas';

export const AboutUs=()=> {
  return (
    <Box sx={{paddingTop:8}}>
      <Typography variant="h6" sx={{color:'#fe5b05', paddingBottom:2}}>About Us</Typography>
      <Typography variant="h4">Simple Solution to Complex<Typography sx={{color:'#fe5b05', paddingBottom:2}} variant="h4">Connections</Typography></Typography>
      <Typography variant="subtitle1" paragraph>
        Is a Service that specializes in optimize helping, filtering and organization all your company's database.
      </Typography>
      <Box sx={{display:'flex',justifyContent: 'space-evenly'}}>
        <Box sx={{ textAlign: 'center',justifyContent: 'space-evenly' }}>
         <i className="bi bi-check-circle"></i> High Analysis
        </Box>
        <Box sx={{ textAlign: 'center',justifyContent: 'space-evenly',paddingLeft:2 }}>
          <i className="bi bi-check-circle"></i> Certified Platform
        </Box>
      </Box>
      <Box sx={{ maxHeight: '256px', height: '256px', backgroundColor:'white', my:2 }}>{/* Tu componente de imagen grande aquí */}</Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button sx={{backgroundColor:'#fe5b05', color:'#FFFFFF', padding:2}} variant="text">Learn More</Button>
      </Box>
    </Box>
  )
}