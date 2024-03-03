import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonDas } from './../../../../components/ButtonDas/index';
import { GenericContext } from '../../../../context/GenericContext';

export const Header = () => {
  const { t, i18n } = useContext(GenericContext);
  return (
    <Box>
      <ButtonDas text='EN' onClick={() => i18n?.changeLanguage('en')}/>
      <ButtonDas text='ES' onClick={() => i18n?.changeLanguage('es')}/>
      <h2 style={{fontWeight:700}}>{t('header.title-1')}<span  style={{color:'#fe5b05', fontStyle:'bold', marginLeft:4}} >{t('header.title-2')}</span></h2>
      <Box sx={{ mt:2, mb:5 }}>
        <img height={25} width={256} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/banner-line.png"}`}/>
      </Box>
      <p style={{fontWeight:400}}> {t("header.description")} </p>
      <Box sx={{my:4}}>
        <img height={200} width={256} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/landing-banner.png"}`}/>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button sx={{backgroundColor:'#fe5b05', color:'#FFFFFF', padding:2}}><span>Try Demo</span></Button>
      </Box>
    </Box>
  );
};
