import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Photos
                </Typography>
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
            </Toolbar>
        </AppBar>
    </Box>
  );
};
