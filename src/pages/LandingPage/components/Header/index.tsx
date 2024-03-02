import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonDas } from './../../../../components/ButtonDas/index';
import { GenericContext } from '../../../../context/GenericContext';

export const Header = () => {
  const { t, i18n } = useContext(GenericContext);
  return (
    <Box >
      <ButtonDas text='EN' onClick={() => i18n?.changeLanguage('en')}/>
      <ButtonDas text='ES' onClick={() => i18n?.changeLanguage('es')}/>
      <h5>{t('header.title-1')}<h4 style={{color:'#fe5b05', fontStyle:'bold'}} >{t('header.title-2')}</h4></h5>
      <Box sx={{ maxHeight: '86px', height: '256px' }}>{/* Tu componente de imagen grande aquí */}</Box>
      <Typography variant="body1" paragraph> {t("header.description")} </Typography>
      <Box sx={{ maxHeight: '256px', height: '256px', backgroundColor:'white',my:2 }}>{/* Tu componente de imagen grande aquí */}</Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button sx={{backgroundColor:'#fe5b05', color:'#FFFFFF', padding:2}} variant="text">Try Demo</Button>
      </Box>
    </Box>
  );
};
