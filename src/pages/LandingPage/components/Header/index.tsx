import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <Box >
      <Typography variant="h5">We're Here to Increase Your <Typography sx={{color:'#fe5b05', fontStyle:'bold'}} variant="h4">Productivity</Typography></Typography>
      <Box sx={{ maxHeight: '86px', height: '256px' }}>{/* Tu componente de imagen grande aquí */}</Box>
      <Typography variant="body1" paragraph>
        Transform the way you manage data with Webdatanets, an innovative service dedicated to optimizing, assisting, and
        revolutionizing your company's databases.
      </Typography>
      <Box sx={{ maxHeight: '256px', height: '256px', backgroundColor:'white',my:2 }}>{/* Tu componente de imagen grande aquí */}</Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button sx={{backgroundColor:'#fe5b05', color:'#FFFFFF', padding:2}} variant="text">Try Demo</Button>
      </Box>
    </Box>
  );
};
