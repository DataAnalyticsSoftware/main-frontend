import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';

export const WhyChooseUs=()=> {

  const { landings } = useContext(ContentLandingContext)

  return (
    <Box sx={{paddingTop:8}}>
      <Box sx={{textAlign:{xs:'left',sm:'center',md:'center', lg:'center'}}}>
        <h1 style={{ paddingTop:24, fontWeight:700}}>Why Choose<span style={{color:'#fe5b05'}}> Us?</span></h1>
        <div style={{display:'flex', justifyContent:'center',paddingBottom:12}}>
          <hr style={{border:' 3px solid #fe5b05',width:'10%', opacity:1}}></hr>
        </div>
      <p>
        Experience the future of data management engage with Webdatanets and elevate your business to new heights! Your data, your rules, your success.
      </p>
      </Box>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '25px', justifyContent: 'center'}}>
        {landings.filter(landing => landing.button).map((landing, index) =>
          <Cards index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} key={index} />
        )}
      </div>
    </Box>
  )
}