import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';

export const WhyChooseUs=()=> {

  const { landings } = useContext(ContentLandingContext)

  return (
    <Box sx={{paddingTop:8}}>
      <Typography variant="h4" sx={{paddingBottom:2, color:'black'}}>Why Choose<Typography sx={{color:'#fe5b05', pl:1}} variant="h4"> Us?</Typography></Typography>
      <Typography variant="subtitle1" paragraph>
      Experience the future of data management engage with Webdatanets and elevate your business to new heights! Your data, your rules, your success.</Typography>
      <Box sx={{justifyContent: 'space-evenly'}}>
        {landings.filter(landing => landing.button).map((landing, index) =>
          <Cards index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} />
        )}
      </Box>
    </Box>
  )
}