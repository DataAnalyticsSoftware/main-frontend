import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export const Cards=({icon,title,text,button, index})=> {

  return (
    <>
    {button ?
    < >
    <div style={{minWidth: '342px', maxWidth: '450px', position: 'relative', marginTop: 60}}>
      <div style={{width: '106px', height: '106px', backgroundColor: '#DAE8FF', borderRadius: '50%', display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 'calc(-53px)', left: 'calc(50% - 53px)'}}>
        <i style={{fontSize: '48px', color: '#FF5A05'}} className={icon}></i>
      </div>
      <div style={{backgroundColor: 'white', border: '1px solid grey', padding: '63px 15px', paddingBottom: '20px', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '230px'}}>
        <p style={{paddingBottom:2,marginTop:4}}>{title}</p>
        <Typography sx={{lineHeight:1.3,pb:2}}>{text}</Typography>
      </div>
    </div>
    </>
    :
    <Box sx={{pb:2, backgroundColor:`${index===0?'#4252CF':'white'}`,color:`${index===0?'white':'black'}`, p:2, borderRadius:5,mb:4}}>
        <Box sx={{mb:4,pl:1, width:'50px', height:'50px', color:`${index===0?'white':'#1F37FF'}`}}>
            <i style={{fontSize:50}} className={icon}></i>
        </Box>
        <Typography variant='h5' sx={{pb:2}}>{title}</Typography>
        <Typography sx={{lineHeight:1.5}}>{text}</Typography>
    </Box>
    }
    </>
  )
}