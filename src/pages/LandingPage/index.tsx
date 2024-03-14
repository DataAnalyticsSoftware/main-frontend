import React from 'react'
import { NavBar } from './components/Navbar'
import { Header } from './components/Header'
import './styles.module.scss'
import { ContentLandingComponent } from './components/ContentComponent'
import { Box } from '@mui/material'
import { Footer } from './components/Footer'

export const LandinPage=()=> {
  return (
    <div id="particles-js" className='landing-page'>
      <Box style={{background:'linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%)', position: 'relative', zIndex: '2'}}>
        <NavBar/>
        <Box sx={{ px: 4, pt: 2, color: '#FFFFFF', textAlign:'left', pb:6, maxWidth: '1440px', m:'auto', position: 'relative', zIndex: '2' }}>
          <Header/>
        </Box>
      </Box>
        <Box sx={{ px: 4, pt: 2, color: 'black', textAlign:'center', maxWidth: '1440px', m:'auto' }}>
          <ContentLandingComponent/>
        </Box>
       <Footer/>
    </div>
  )
}