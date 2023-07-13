import React from 'react';
import { Box, Typography } from '@mui/material';

const BannerSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1516749396351-ab12ad535d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" color="text.primary" >
      
      </Typography>
    </Box>
  );
};

export default BannerSection;
