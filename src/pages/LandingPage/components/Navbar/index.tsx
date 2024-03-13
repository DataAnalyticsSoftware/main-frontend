import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Container, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PrincipalIconDas } from '../../../../components/SvgDas';
import { ButtonDas } from '../../../../components/ButtonDas';
import { GenericContext } from '../../../../context/GenericContext';
import { CountryToggle } from './CountryToggle';

export const NavBar = () => {
  const theme = useTheme();
  const { t, i18n } = useContext(GenericContext);

  // State para manejar el menú desplegable
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Función para abrir el menú desplegable
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Función para cerrar el menú desplegable
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box style={{ backgroundColor: 'transparent' }}>
      <Box sx={{ pt:4, flexGrow: 1, display:'none',[theme.breakpoints.up('lg')]: {display: 'block'},[theme.breakpoints.up('md')]: {display: 'block'} }} style={{ backgroundColor: 'transparent' }}>
        <AppBar position="sticky" sx={{ top: 0,margin:'auto', zIndex: 100, boxShadow:'none',background: 'transparent', maxWidth:'1440px'}}>
            <Toolbar>
              {/* Sección Izquierda - Logo */}
              <Box sx={{ flexGrow: 1 }}>
              <div style={{width: '74px', height: '90px'}}>
                  <PrincipalIconDas/>
                </div>
              </Box>

              {/* Sección Centro - Botones */}
              <Box sx={{ flexGrow:1, textAlign: 'center', display:'flex' }}>
                <ul style={{display:'flex', listStyle:'none'}}>
                  <li style={{marginRight:32}}><a href='#home' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-1')}</a><span></span></li>
                  <li style={{marginRight:32}}><a href='#about' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-2')}</a><span></span></li>
                  <li style={{marginRight:32}}><a href='#services' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-3')}</a><span></span></li>
                  <li style={{marginRight:32}}><a href='#pricing' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-4')}</a><span></span></li>
                  <li style={{marginRight:32}}><a href='#thebest' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-5')}</a><span></span></li>
                  <li style={{marginRight:32}}><a href='#faq' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-6')}</a><span></span></li>
                  <li style={{marginRight:32}}><a href='#demo' style={{textDecoration:'none', color:'white'}}>{t('navbar.title-7')}</a><span></span></li>

                </ul>
              </Box>
              <Box>
                <CountryToggle />
              </Box>
            </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1, display:{sx:'block',sm:'block',md:'none',lg:'none'} }} style={{ backgroundColor: 'transparent' }}>
      <AppBar position="sticky" sx={{ top: 0, zIndex: 100, boxShadow:'none',background: 'transparent'}}>
            <Toolbar>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <div style={{width: '33px', height: '43px'}}>
                  <PrincipalIconDas/>
                </div>
                <CountryToggle />
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                {/* Menú desplegable */}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  {/* Opciones del menú */}
                  <ul style={{display:'block', listStyle:'none'}}>
                  <li style={{marginRight:32, padding:12}}><a href='#home' style={{textDecoration:'none', color:'black'}}>Home</a><span></span></li>
                  <li style={{marginRight:32, padding:12}}><a href='#about' style={{textDecoration:'none', color:'black'}}>About Us</a><span></span></li>
                  <li style={{marginRight:32, padding:12}}><a href='#services' style={{textDecoration:'none', color:'black'}}>Our Services</a><span></span></li>
                  <li style={{marginRight:32, padding:12}}><a href='#pricing' style={{textDecoration:'none', color:'black'}}>Pricing</a><span></span></li>
                  <li style={{marginRight:32, padding:12}}><a href='#thebest' style={{textDecoration:'none', color:'black'}}>Why Us</a><span></span></li>
                  <li style={{marginRight:32, padding:12}}><a href='#faq' style={{textDecoration:'none', color:'black'}}>FAQ</a><span></span></li>
                  <li style={{marginRight:32, padding:12}}><a href='#demo' style={{textDecoration:'none', color:'black'}}>Get Demo</a><span></span></li>

                </ul>
                </Menu>
              </div>
            </Toolbar>
        </AppBar>
      </Box>
     
    </Box>
  );
};
