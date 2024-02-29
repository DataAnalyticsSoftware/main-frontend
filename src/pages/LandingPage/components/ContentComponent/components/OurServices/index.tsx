import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Cards } from '../../../../../../utils/cards';

export const OurServices=()=> {
  return (
    <Box sx={{paddingTop:8}}>
      <Typography variant="h6" sx={{color:'#fe5b05', paddingBottom:2}}>Our Services</Typography>
      <Typography variant="h4">The Best Platform For Your Business</Typography>
      <Typography sx={{pt:2}} variant="subtitle1" paragraph>
        We offer a verity of interesting features that you can help increase your productivity at work and manage your Business easily.
      </Typography>
      <Box sx={{justifyContent: 'space-evenly'}}>
        <Cards index={0} icon={"bi-lg bi-check-circle"} title={'Effortless Data Control'} text={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} button={false} />
        <Cards index={1} icon={"bi bi-pen-fill"} title={'Graphics'} text={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} button={false} />
        <Cards index={1} icon={"bi bi-filetype-csv"} title={'Import data in .CSV'} text={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} button={false} />
        <Cards index={1} icon={"bi bi-gear-wide-connected"} title={'Connection with CRM'} text={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} button={false} />
        <Cards index={1} icon={"bi bi-chat-right-dots-fill"} title={'Email Marketing'} text={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} button={false} />
      </Box>
    </Box>
  )
}
