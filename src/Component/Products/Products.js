import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Product from './Product';



const Products = () => {
    const [cproducts, setCproducts] = useState([])

    useEffect(() => {
        fetch('https://evening-bayou-52199.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCproducts(data));

    }, [])

    // console.log(cproducts);
    return (


        <div>
            {cproducts.length < 1 && <CircularProgress />}

            <Container >
                {/* <Grid container spacing={2}>
                    {cproducts.slice(0, 6).map(camera => <Product camera={camera} key={camera._id}></Product>)}
                </Grid> */}

                <Grid container spacing={2}>
                    {cproducts.map(sp => {
                        const { aname, price, description, img, rating, _id } = sp;
                        return <ProductCard name={aname} price={price} img={img} rating={rating} id={_id} key={_id}></ProductCard>
                    }


                    )}

                </Grid>
            </Container>




        </div >
    );
};

export default Products;