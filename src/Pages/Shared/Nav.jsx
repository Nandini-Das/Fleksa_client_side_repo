import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Take Away
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button  component= {Link} to="/" color="inherit">Home</Button>
          <Button  component= {Link} to="/about" color="inherit">About</Button>
          <Button component= {Link} to="/services" color="inherit">Services</Button>
         
          <Button component= {Link} to="/menu" color="inherit">Menu</Button>
          <Button component= {Link} to="/contact" color="inherit">Contact</Button>
        </Box>
        <Button color="inherit">


          <Link to="/myOrder"> <ShoppingCartIcon sx={{ marginLeft: 1 }} /></Link> 
            
          </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
