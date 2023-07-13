import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const ServicesPage = () => {
  const services = [
    {
      title: 'Online Ordering',
      description: 'Conveniently order your favorite dishes online and enjoy a seamless food delivery experience.',
      imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwb3JkZXJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Catering Services',
      description: 'Let us handle your events with our professional catering services, providing meals for your guests.',
      imageUrl: 'https://images.unsplash.com/photo-1562249004-8aa16dc0202b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2F0ZXJpbmclMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Private Dining',
      description: 'Experience a personalized dining experience with our private dining options for special occasions.',
      imageUrl: 'https://images.unsplash.com/photo-1668583029711-cccc9d1f109c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50JTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
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
