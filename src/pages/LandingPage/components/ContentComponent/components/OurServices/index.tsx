import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';

export const OurServices=()=> {

  const { landings } = useContext(ContentLandingContext)

  return (
    <Box sx={{paddingTop:8}}>
      <h4 style={{color:'#fe5b05', paddingBottom:2}}>OUR SERVICES</h4>
      <h1 >The Best Platform For Your Business</h1>
      <p style={{paddingTop:2}}>
        We offer a verity of interesting features that you can help increase your productivity at work and manage your Business easily.
      </p>
      <Box sx={{justifyContent: 'space-evenly'}}>
        {landings.filter((landing) => !landing.button).map((landing, index) =>
          <Cards key={index} index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} />
        )}
      </Box>
    </Box>
  )
}
