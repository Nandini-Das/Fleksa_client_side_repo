import React from 'react';
import { Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const DishCard = ({ id, name, description, price, image, rating }) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
          Price: ${price}
        </Typography>
        <Rating
          name={`rating-${name}`}
          value={parseFloat(rating)}
          precision={0.5}
          size="small"
          sx={{ marginTop: 1 }}
        />
      </CardContent>
      <Link
        to={`/orderPage/${id}`}
        style={{
          position: 'relative',
          bottom: '12px',
          left: '298px',
          borderRadius: '8px',
          padding: '8px 16px',
          fontWeight: 'bold',
          fontSize: '1rem',
          textTransform: 'uppercase',
          backgroundColor: '#ff4081',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Order Now
      </Link>
    </Card>
  );
};

export default DishCard;
