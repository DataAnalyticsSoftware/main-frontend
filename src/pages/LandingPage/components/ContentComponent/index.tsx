import React from 'react'
import { Box } from '@mui/material';
import { AboutUs } from './components/AboutUs';
import { OurServices } from './components/OurServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompareTable } from './components/CompareTable';
import { FAQ } from './components/FAQ';
import { Form } from './components/Form';
import { ContentLandingContextProvider } from './context/ContentLandingContext'

export const ContentLandingComponent=()=> {
  return (
    <ContentLandingContextProvider>
      <Box>
        <AboutUs/>
        <OurServices/>
        <CompareTable/>
        <WhyChooseUs/>
        <FAQ/>
        <Form/>
      </Box>
    </ContentLandingContextProvider>
  )
}