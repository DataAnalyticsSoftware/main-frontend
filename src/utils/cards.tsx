import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export const Cards=({icon,title,text,button, index})=> {

  return (
    <>
    {button ?
    <Box>
        <i className={icon}></i>
        <Typography>{title}</Typography>
        <Typography>{text}</Typography>
        <Button>Read More</Button>
    </Box>
    : 
    <Box sx={{pb:2, backgroundColor:`${index===0?'#4252CF':'white'}`,color:`${index===0?'white':'black'}`, p:2, borderRadius:5,mb:4}}>
        <Box sx={{mb:4,pl:1, width:'50px', height:'50px', color:`${index===0?'white':'#1F37FF'}`}}>
            <i style={{fontSize:50}} className={icon}></i>
        </Box>
        <Typography variant='h5' sx={{pb:2}}>{title}</Typography>
        <Typography sx={{lineHeight:1.7}}>{text}</Typography>
    </Box> 
    }
    </>
  )
}