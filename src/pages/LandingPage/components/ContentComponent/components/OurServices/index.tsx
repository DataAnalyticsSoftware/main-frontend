import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Cards } from '../../../../../../utils/cards';
import { ContentLandingContext } from '../../context/ContentLandingContext';
import { GenericContext } from '../../../../../../context/GenericContext';

export const OurServices=()=> {

  const { landings } = useContext(ContentLandingContext)
  const { t } = useContext(GenericContext)
  return (
    <Box sx={{paddingTop:8}}>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{paddingBottom:'2px', textAlign: 'left', backgroundColor:'white',color:'black',marginBottom:'4px', width: '400px'}}>
          <h4 style={{color:'#fe5b05', paddingBottom:2}}>{t('ourServices.main-card.main-title')}</h4>
          <h2 style={{fontWeight:700}}>{t('ourServices.main-card.title')}</h2>
          <p style={{paddingTop:2, fontSize:18}}>{t('ourServices.main-card.description')}</p>
        </div>
        {landings.filter((landing) => !landing.button).map((landing, index) =>
          <Cards key={index} index={index} icon={landing.icon} title={landing.title} text={landing.description} button={landing.button} />
        )}
      </div>
    </Box>
  )
}
