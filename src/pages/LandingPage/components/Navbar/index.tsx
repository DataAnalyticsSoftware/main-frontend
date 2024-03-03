import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PrincipalIconDas } from '../../../../components/SvgDas';

export const NavBar = () => {
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
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: 'transparent' }}>
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
                    <MenuItem onClick={handleClose}>Opción 1</MenuItem>
                    <MenuItem onClick={handleClose}>Opción 2</MenuItem>
                    <MenuItem onClick={handleClose}>Opción 3</MenuItem>
                </Menu>
              </div>
            </Toolbar>
        </AppBar>
    </Box>
  );
};
