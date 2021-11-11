import { Container, Grid } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import Product from './Product';



const Products = () => {
    const [cproducts, setCproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCproducts(data));
    }, [])
    console.log(cproducts);
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {cproducts.slice(0, 3).map(camera => <Product camera={camera} key={camera.id}></Product>)}
                </Grid>
            </Container>

        </div>
    );
};

export default Products;