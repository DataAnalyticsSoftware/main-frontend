import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { GenericContext } from '../../../../context/GenericContext';
import './styles.module.scss'

export const Header = () => {
  const { t } = useContext(GenericContext);
  const theme = useTheme();

  return (
    <Box id='home' sx={{position: 'relative'}}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row',
        },
      }}>
        <Box sx={{ flex: '1', marginRight: 2, alignSelf:{lg:'center',} }}>
          <h2 style={{ fontWeight: 700, }}>{t('header.title-1')}<span style={{ color: '#fe5b05', fontStyle: 'bold', marginLeft: 4 }}>{t('header.title-2')}</span></h2>
          <Box sx={{ mt: 2, mb: 5 }}>
            <img height={25} width={256} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/banner-line.png"}`} alt="Banner Line" />
          </Box>
          <p style={{ fontWeight: 400,maxWidth: '375px' }}>{t("header.description")}</p>
          <Box  sx={{marginTop:6,display:'none',[theme.breakpoints.up('lg')]: {display: 'block',},}}>
            <div
             style={{backgroundColor: '#fe5b05',textAlign:'center',maxWidth:'35%',padding:20,borderRadius:10}} className='tryDemo' >
              <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} href='#demo'><span>{t('header.trydemo')}</span></a>
            </div>
          </Box>
        </Box>

        <Box sx={{ flex: '1',display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, [theme.breakpoints.up('md')]: { display: 'flex' } }}>
          <Box >
            <img height={590} width={800} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/landing-banner.png"}`} alt="Landing Banner" />
          </Box>
        </Box>
      </Box>

      <Box sx={{
        my: 4,
        display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
        textAlign:{xs:'center'}
      }}>
        <img height={270} width={300} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/landing-banner.png"}`} alt="Landing Banner" />
      </Box>

      <Box sx={{
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
      }}>
        <Button sx={{ backgroundColor: '#fe5b05', color: '#FFFFFF', padding: 2 }}><span>Try Demo</span></Button>
      </Box>
    </Box>
  );
};
