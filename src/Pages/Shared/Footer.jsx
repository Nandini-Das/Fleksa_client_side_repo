import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Your Restaurant. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
