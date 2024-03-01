import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Cards } from '../../../../../../utils/cards';

export const WhyChooseUs=()=> {
  return (
    <Box sx={{paddingTop:8}}>
      <Typography variant="h4" sx={{paddingBottom:2, color:'black'}}>Why Choose<Typography sx={{color:'#fe5b05', pl:1}} variant="h4"> Us?</Typography></Typography>
      <Typography variant="subtitle1" paragraph>
      Experience the future of data management engage with Webdatanets and elevate your business to new heights! Your data, your rules, your success.</Typography>
      <Box sx={{justifyContent: 'space-evenly'}}>
        <Cards index={0} icon={"bi-lg bi-check-circle"} title={'Effortless Data Control'} text={'Seamlessly add, sort, filter, delete, and update your entire database with a few clicks. Tailor your data by Dates, Countries, Languages, Age, Sex, Purchases, and more'} button={true} />
        <Cards index={1} icon={"bi bi-pen-fill"} title={'Visualize Insights in Real Time'} text={'Immerse yourself in interactive graphs and real-time insights for each collection. Customize data displays to make complex comparisons, providing a profound of your business dynamics.'} button={true} />
        <Cards index={1} icon={"bi bi-filetype-csv"} title={'Streamlined Comparison Tools'} text={'Effortlessly compare collections to uncover trends, patterns, and variations. Gain a competitive edge with a comprehensive analysis of your data sets.'} button={true} />
        <Cards index={1} icon={"bi bi-gear-wide-connected"} title={'Strategic Advertising Solutions'} text={'Harness the power of data collection and visualization for targeted advertising campaigns. Save on testing costs and ensure precision in your advertising strategies.'} button={true} />
      </Box>
    </Box>
  )
}