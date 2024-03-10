import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export const Cards=({icon,title,text,button, index, colorIcon = '', colorBackground = ''})=> {

  return (
    <>
    {button ?
    < >
    <div style={{minWidth: '342px', maxWidth: '450px', position: 'relative', marginTop: 60}}>
      <div style={{width: '106px', height: '106px', backgroundColor: colorBackground, borderRadius: '50%', display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 'calc(-53px)', left: 'calc(50% - 53px)'}}>
        <i style={{fontSize: '48px', color: colorIcon}} className={icon}></i>
      </div>
      <div style={{backgroundColor: 'white', border: '1px solid grey', padding: '63px 15px', paddingBottom: '20px', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '230px', borderRadius:'10px'}}>
        <p style={{paddingBottom:2,marginTop:4}}>{title}</p>
        <Typography sx={{lineHeight:1.3,pb:2}}>{text}</Typography>
      </div>
    </div>
    </>
    :
    <div className='border' style={{paddingBottom:'2px', backgroundColor:`${index===0?'#4252CF':'white'}`,color:`${index===0?'white':'black'}`, padding:'2rem', borderRadius:'10px',marginBottom:'4px', width: '400px'}}>
        <Box sx={{mb:4,pl:1, width:'50px', height:'50px', color:`${index===0?'white':'#1F37FF'}`}}>
            <i style={{fontSize:50}} className={icon}></i>
        </Box>
        <h4 style={{paddingBottom:2}}>{title}</h4>
        <p style={{lineHeight:1.5}}>{text}</p>
    </div>
    }
    </>
  )
}