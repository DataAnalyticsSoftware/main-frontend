import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';

export const OurServices=()=> {

  const { landings } = useContext(ContentLandingContext)

  return (
    <Box sx={{paddingTop:8}}>
      <Typography variant="h6" sx={{color:'#fe5b05', paddingBottom:2}}>Our Services</Typography>
      <Typography variant="h4">The Best Platform For Your Business</Typography>
      <Typography sx={{pt:2}} variant="subtitle1" paragraph>
        We offer a verity of interesting features that you can help increase your productivity at work and manage your Business easily.
      </Typography>
      <Box sx={{justifyContent: 'space-evenly'}}>
        {landings.filter((landing) => !landing.button).map((landing, index) =>
          <Cards key={index} index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} />
        )}
      </Box>
    </Box>
  )
}
