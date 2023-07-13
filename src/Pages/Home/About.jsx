import React from 'react';
import { Typography, Container, Grid, CardMedia } from '@mui/material';

const AboutPage = () => {
  const imageUrls = [
    'https://source.unsplash.com/AO_7YVfX7CM',
    'https://source.unsplash.com/jxFOIwO5tOw',
    'https://source.unsplash.com/D3CqD6e56yA',
    'https://source.unsplash.com/DCjTqFDysJ4',
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" component="div" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <div>
            <Typography variant="h5" component="div" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ex lacus. Donec efficitur mauris at ante
              consequat, et aliquet arcu viverra. Nam auctor, metus sed sollicitudin lacinia, neque arcu eleifend tortor,
              at posuere metus arcu vitae leo.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" component="div" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
              Vestibulum eget vulputate sem. Sed tincidunt, leo id suscipit fringilla, lorem nisl dignissim lectus, sit
              amet consequat metus erat at justo. Sed iaculis tincidunt luctus. Integer tempus tortor non ex faucibus
              pharetra.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" component="div" gutterBottom>
              Our History
            </Typography>
            <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
              Aenean dignissim ante eu convallis tristique. Sed aliquam pretium condimentum. Vivamus laoreet aliquet
              lacus, eget faucibus tellus cursus eget. Vestibulum efficitur odio felis, non tristique diam interdum sed.
              Donec tincidunt, elit ac venenatis facilisis, ex tortor suscipit erat, vitae placerat justo metus ut ante.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} container spacing={2}>
          {imageUrls.map((imageUrl, index) => (
            <Grid item xs={6} key={index}>
              <CardMedia component="img" height="200" image={imageUrl} alt={`Image ${index + 1}`} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
