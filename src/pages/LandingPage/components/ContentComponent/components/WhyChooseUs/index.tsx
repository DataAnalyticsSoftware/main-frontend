import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';
import { GenericContext } from '../../../../../../context/GenericContext';

export const WhyChooseUs=()=> {
  const { landings } = useContext(ContentLandingContext)
  const { t } = useContext(GenericContext)

  return (
    <Box sx={{paddingTop:8, paddingBottom:12}} >
      <Box sx={{textAlign:{xs:'left',sm:'center',md:'center', lg:'center'}, paddingTop:2}} id='thebest'>
        <h1 style={{ paddingTop:24, fontWeight:700}}>{t('ourServices.second-card.main-title')} <span style={{color:'#fe5b05'}}> {t('ourServices.second-card.second-title')}</span></h1>
        <div style={{display:'flex', justifyContent:'center',paddingBottom:12}}>
          <hr style={{border:' 3px solid #fe5b05',width:'10%', opacity:1}}></hr>
        </div>
      <p>
      {t('ourServices.second-card.text')}
      </p>
      </Box>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '25px', justifyContent: 'center'}}>
        {landings.filter(landing => landing.button).map((landing, index) =>
          <Cards index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} key={index}  colorBackground={landing.colorBackground} colorIcon={landing.colorIcon} />
        )}
      </div>
    </Box>
  )
}