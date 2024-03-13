import React from 'react';
import { Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box >
      <Box className="text-center text-lg-start bg-body-tertiary text-muted mt-4 justify-content-between" sx={{ px: 4,py:1, color: '#FFFFFF', textAlign:'center' }}>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05);', textAlignLast:'center' }}>
          WEBDATANETS © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://www.webdatanets.com/"> www.webdatanets.com</a>
        </div>
      </Box>
    </Box>
  );
};



