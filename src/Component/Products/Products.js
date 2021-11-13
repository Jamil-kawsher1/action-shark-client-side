import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import Product from './Product';



const Products = () => {
    const [cproducts, setCproducts] = useState([])

    useEffect(() => {
        fetch('https://evening-bayou-52199.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCproducts(data));

    }, [cproducts])

    // console.log(cproducts);
    return (


        <div>
            {cproducts.length < 1 && <CircularProgress />}

            <Container >
                <Grid container spacing={2}>
                    {cproducts.slice(0, 6).map(camera => <Product camera={camera} key={camera._id}></Product>)}
                </Grid>
            </Container>




        </div>
    );
};

export default Products;