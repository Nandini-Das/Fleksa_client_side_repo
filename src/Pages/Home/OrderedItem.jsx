import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
const StyledTable = styled(Table)`
  border-collapse: collapse;

  & th,
  & td {
    border: 1px solid rgba(224, 224, 224, 1);
    padding: 12px;
  }

  & th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  & td {
    text-align: center;
  }
`;
const OrderedItem = () => {
    const [item, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/myOrder')
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
       <>
    <div>
           
            <Typography variant="h4" align="center" gutterBottom>
                All Products
            </Typography>
            <TableContainer component={Paper}>
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Order Date</TableCell>
                    
                            <TableCell>Estimated Delivery</TableCell>
                            <TableCell>Total Price</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {item.map((i) => (
                            <TableRow key={i._id}>
                                <TableCell>{i.item}</TableCell>
                                <TableCell>
                                    {i.image && (
                                        <img src={`${i.image}`} alt="Product" style={{ width: '100px' }} />
                                    )}
                                </TableCell>
                                <TableCell>{i.quantity}</TableCell>
                                <TableCell>{i.date}</TableCell>
                                <TableCell>{i.estimatedDelivery}</TableCell>

                                <TableCell>{i.totalPrice}</TableCell>
                              
                                
                              
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </div>
       </>
    );
};

export default OrderedItem;