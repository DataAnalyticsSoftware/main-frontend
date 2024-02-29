import React from 'react'
import { Box } from '@mui/material';
import { AboutUs } from './components/AboutUs';
import { OurServices } from './components/OurServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompareTable } from './components/CompareTable';
import { FAQ } from '../FAQ';
import { Form } from '../Form';

export const ContentLandingComponent=()=> {
  return (
    <Box> 
      <AboutUs/>
      <OurServices/>
      <CompareTable/>
      <WhyChooseUs/>
      <FAQ/>
      <Form/>
    </Box>
  )
}