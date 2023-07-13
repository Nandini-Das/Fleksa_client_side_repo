import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';

const PopularSection = () => {
  const popularItems = [
    {
      name: 'Chicken Biryani',
      description: 'Aromatic rice dish with tender chicken and flavorful spices.',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWNrZW4lMjBiaXJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Paneer Tikka Masala',
      description: 'Grilled paneer cubes in a creamy and spicy tomato-based sauce.',
      image: 'https://images.unsplash.com/photo-1657186618738-9dfbcee196b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    },
    {
      name: 'Butter Chicken',
      description: 'Tender chicken cooked in a rich and buttery tomato-based sauce.',
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" component="div" align="center" gutterBottom>
        Popular Items
      </Typography>
      <Grid container spacing={2}>
        {popularItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Card>
              <CardMedia component="img" height="200" image={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularSection;
