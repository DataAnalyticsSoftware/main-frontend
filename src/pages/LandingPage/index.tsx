import React from 'react'
import { NavBar } from './components/Navbar'
import { Header } from './components/Header'
import './styles.module.scss'
import { ContentLandingComponent } from './components/ContentComponent'
import { Box } from '@mui/material'
import { Footer } from './components/Footer'

export const LandinPage=()=> {
  return (
    <div  className='landing-page'>
      <Box style={{background:'linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%)'}}>
      <NavBar/>
      <Box sx={{ px: 4, pt: 2, color: '#FFFFFF', textAlign:'left', pb:6 }}>
        <Header/>
      </Box> 
      </Box>
        <Box sx={{ px: 4, pt: 2, color: 'black', textAlign:'left' }}>
          <ContentLandingComponent/>      
        </Box>  
        <Footer/>
    </div>
  )
}