import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export const Cards=({icon,title,text,button, index})=> {

  return (
    <>
    {button ?
    < >
      <Box sx={{mb:1,height:'50px', color:`${'#FF5A05'}`,textAlign:'center', bacgrkoundColor:'#D7EFDB'}}>
        <i style={{fontSize:70, backgroundColor:'#D7EFDB', borderRadius:'50%', padding:5}} className={icon}></i>
      </Box>
      <Box sx={{pb:2, backgroundColor:`${'white'}`,color:`${'black'}`, p:2, borderRadius:5,mb:8, textAlign:'center', justifyContent:'center'}}>
        <Typography variant='h6' sx={{pb:2,mt:4}}>{title}</Typography>
          <Typography sx={{lineHeight:1.3,pb:2}}>{text}</Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button sx={{backgroundColor:'#fe5b05', color:'#FFFFFF', padding:2}} variant="text">Learn More</Button>
          </Box>
      </Box>
    </>
    : 
    <Box className='border' sx={{pb:2, backgroundColor:`${index===0?'#4252CF':'white'}`,color:`${index===0?'white':'black'}`, p:2, borderRadius:5,mb:4, }}>
        <Box sx={{mb:4,pl:1, width:'50px', height:'50px', color:`${index===0?'white':'#1F37FF'}`}}>
            <i style={{fontSize:50}} className={icon}></i>
        </Box>
        <h4 style={{paddingBottom:2}}>{title}</h4>
        <p style={{lineHeight:1.5}}>{text}</p>
    </Box> 
    }
    </>
  )
}