import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishCard from './DishCard';
import { Box, Grid, Typography, Button } from '@mui/material';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchMenuData() {
      try {
        const response = await axios.get('https://online-food-web-server.vercel.app/menu');
        setMenuItems(response.data);
        setVisibleItems(response.data.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    }

    fetchMenuData();
  }, []);

  const handleSeeMore = () => {
    setVisibleItems(menuItems);
    setShowAll(true);
  };

  return (
    <div>
       <Typography variant="h4" component="h3" align="center" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={2}>
        {visibleItems.map((dish) => (
          <Grid item xs={12} sm={6} md={4} key={dish.name}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
              borderRadius={8}
              boxShadow={2}
            >
              <DishCard
                id={dish._id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                rating={dish.rating}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      {!showAll && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button
            style={{
              padding: '1.5rem 4rem',
              borderRadius: '2rem',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              textTransform: 'uppercase',
              color: '#fff',
              backgroundColor: '#ff4081',
              border: 'none',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={handleSeeMore}
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Menu;
