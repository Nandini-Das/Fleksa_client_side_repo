import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';

const PopularSection = () => {
  const popularItems = [
    {
      name: 'Chicken Biryani',
      description: 'Aromatic rice dish with tender chicken and flavorful spices.',
      image: 'https://source.unsplash.com/5SAqzcDpDb4',
    },
    {
      name: 'Paneer Tikka Masala',
      description: 'Grilled paneer cubes in a creamy and spicy tomato-based sauce.',
      image: 'https://source.unsplash.com/iwz9w-Klnv8',
    },
    {
      name: 'Butter Chicken',
      description: 'Tender chicken cooked in a rich and buttery tomato-based sauce.',
      image: 'https://source.unsplash.com/y7r5tgqTzM4',
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
