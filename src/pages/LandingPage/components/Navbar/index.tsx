import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Container, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PrincipalIconDas } from '../../../../components/SvgDas';
import { ButtonDas } from '../../../../components/ButtonDas';
import { GenericContext } from '../../../../context/GenericContext';

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
              <Box sx={{ flexGrow:1, textAlign: 'center' }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit">Our Services</Button>
                <Button color="inherit">Contact</Button>
              </Box>


              <Box>
                              
      <ButtonDas text='EN' onClick={() => i18n?.changeLanguage('en')}/>
      <ButtonDas text='ES' onClick={() => i18n?.changeLanguage('es')}/>
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
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                    <MenuItem onClick={handleClose}>Our Services</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Menu>
              </div>
            </Toolbar>
        </AppBar>
      </Box>
     
    </Box>
  );
};
