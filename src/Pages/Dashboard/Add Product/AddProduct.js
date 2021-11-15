import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const {token} = useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        product.transmission = 'Automatic';
        product.mpg = '22/32';
        axios.post('https://shrouded-tundra-85918.herokuapp.com/cars',{
            product
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('Product added successfully.');
                e.target.reset();
            }
        })
        console.log('product',product);
    }
    return (
        <Box>
            <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                    Add a product
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto'}}></Box>
                <Box style={{marginTop: 20}}></Box>
            <form onSubmit={handleOnSubmit} style={{width: '75%', margin: '0 auto'}}>
                <TextField
                    sx={{ mb: 1 }}
                    onBlur={handleOnBlur}
                    label="Car Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required />
                <TextField
                    sx={{ mb: 1 }}
                    onBlur={handleOnBlur}
                    minRows={3}
                    label="Description"
                    name="description"
                    variant="outlined"
                    fullWidth
                    multiline
                    required />
                <TextField
                    sx={{ mb: 1 }}
                     onBlur={handleOnBlur}
                    label="Price"
                    name="price"
                    variant="outlined"
                    type="number"
                    fullWidth
                    required />
                <TextField
                    sx={{ mb: 1 }}
                     onBlur={handleOnBlur}
                    label="Image URL Includes https://"
                    name="img"
                    variant="outlined"
                    fullWidth
                    required />
                <TextField
                    sx={{ mb: 1 }}
                     onBlur={handleOnBlur}
                    label="Mileage"
                    name="mileage"
                    variant="outlined"
                    type="number"
                    fullWidth
                    required />
                <TextField
                    sx={{ mb: 1 }}
                    label="Transmission"
                    name="transmission"
                    variant="outlined"
                    defaultValue="Automatic"
                    disabled
                    fullWidth
                    required />
                <TextField
                    sx={{ mb: 1 }}
                    label="MPG CITY / MPG HWY"
                    name="mpg"
                    variant="outlined"
                    defaultValue="22/32"
                    disabled
                    fullWidth
                    required />
                    <Button type="submit" variant="contained" style={{width: '100%'}}>Add Product</Button>
            </form>
        </Box>
    );
};

export default AddProduct;