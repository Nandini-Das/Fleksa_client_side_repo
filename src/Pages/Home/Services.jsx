import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const ServicesPage = () => {
  const services = [
    {
      title: 'Online Ordering',
      description: 'Conveniently order your favorite dishes online and enjoy a seamless food delivery experience.',
      imageUrl: 'https://source.unsplash.com/0RXKZPww86U',
    },
    {
      title: 'Catering Services',
      description: 'Let us handle your events with our professional catering services, providing delicious meals for your guests.',
      imageUrl: 'https://source.unsplash.com/-ScHmVgWUOo',
    },
    {
      title: 'Private Dining',
      description: 'Experience a personalized dining experience with our private dining options for special occasions.',
      imageUrl: 'https://source.unsplash.com/YqDZDm4A3Lc',
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" component="div" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia component="img" height="200" image={service.imageUrl} alt={service.title} />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;
