import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const ExploreProduct = () => {
    const [cproducts, setCproducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCproducts(data));

    }, [])

    return (

        <div>
            {cproducts.length < 1 && <CircularProgress />}

            <Container maxWidth="lg">
                <Grid container spacing={2} style={{ marginTop: 20 }}>
                    {cproducts.map(camera => <SingleProduct camera={camera} key={camera._id}></SingleProduct>)}
                </Grid>
            </Container>




        </div>
    );
};

export default ExploreProduct;