import React from 'react'
import { NavBar } from './components/Navbar'
import { Header } from './components/Header'
import './styles.module.scss'
import { ContentLandingComponent } from './components/ContentComponent'
import { Box } from '@mui/material'
import { Footer } from './components/Footer'

export const LandinPage=()=> {
  return (
    <div style={{backgroundColor:'blue'}} className='landing-page'>
        <NavBar/>
        <Box sx={{ px: 4, pt: 2, color: '#FFFFFF', textAlign:'left' }}>
            <Header/>
            <ContentLandingComponent/>      
        </Box>  
        <Footer/>
    </div>
  )
}