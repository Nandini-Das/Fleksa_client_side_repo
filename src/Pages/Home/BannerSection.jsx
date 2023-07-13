import React from 'react';
import { Box, Typography } from '@mui/material';

const BannerSection = () => {
    const typographyStyle = {
        backgroundColor: '#F5F5DC',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    
    
      };
  return (
    <Box
    style={typographyStyle}
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1516749396351-ab12ad535d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)',
        opacity:'0.8',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box style={typographyStyle}>
      <Typography variant="h2">TakeAway</Typography>
      <br />
      <Typography variant="body1">
       TASTE OF LIFE
      </Typography>
    </Box>
    </Box>
  );
};

export default BannerSection;
