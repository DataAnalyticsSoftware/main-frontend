import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';

export const WhyChooseUs=()=> {

  const { landings } = useContext(ContentLandingContext)

  return (
    <Box sx={{paddingTop:8}}>
      <Typography variant="h4" sx={{paddingBottom:2, color:'black'}}>Why Choose<span style={{color:'#fe5b05'}}> Us?</span></Typography>
      <Typography variant="subtitle1" paragraph>
      Experience the future of data management engage with Webdatanets and elevate your business to new heights! Your data, your rules, your success.</Typography>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '25px', justifyContent: 'center'}}>
        {landings.filter(landing => landing.button).map((landing, index) =>
          <Cards index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} />
        )}
      </div>
    </Box>
  )
}