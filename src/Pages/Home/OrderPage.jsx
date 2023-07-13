import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography, TextField } from '@mui/material';
import Swal from 'sweetalert2';

const OrderPage = () => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState('');
  const deliveryTime = 30; 
 
  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const response = await axios.get(`https://online-food-web-server.vercel.app/menu/${id}`);
        setMenuItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuItem();
  }, [id]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (menuItem) {
        setTotalPrice(quantity * menuItem.price);
      }
    };

    calculateTotalPrice();
  }, [quantity, menuItem]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  useEffect(() => {
    const calculateEstimatedDeliveryTime = () => {
      const now = new Date();
      const estimatedDelivery = new Date(now.getTime() + deliveryTime * 60000);
      const formattedTime = estimatedDelivery.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setEstimatedDeliveryTime(formattedTime);
    };

    calculateEstimatedDeliveryTime();
  }, []);
  if (!menuItem) {
    return <div>Loading...</div>;
  }
  const handlePlaceOrder = () => {
    const orderData = {
      item: menuItem.name,
      quantity,
      date :  new Date(),
      estimatedDelivery:estimatedDeliveryTime, 
      totalPrice,
      image : menuItem.image,
        };

    axios
      .post('https://online-food-web-server.vercel.app/orderedItem', orderData)
      .then((response) => {
        console.log('Order placed:', response.data);
       if(response.data.message === 'Product added successfully'){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Order added successfully',
            showConfirmButton: false,
            timer: 1500,
          });
       }
      })
      .catch((error) => {
        console.error('Failed to place order:', error);
      });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="200"
          image={menuItem.image}
          alt={menuItem.name}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Order Page
          </Typography>
          <Typography variant="body1">Menu Item ID: {id}</Typography>
          <Typography variant="body1">Menu Item Name: {menuItem.name}</Typography>
          <Typography variant="body1">Menu Item Description: {menuItem.description}</Typography>
          <Typography variant="body1">Price per unit: {menuItem.price}</Typography>
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1, max: 10 }}
            variant="outlined"
            sx={{ marginTop: 2 }}
          />
          <hr />
          <Typography variant="body1">Total Price: ${totalPrice}</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: '1rem',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderPage;
