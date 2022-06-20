import React from 'react';
import './product.css'
import camera from '../img/digital-slr-camera-PZ5QY9V.png'
import { Grid, Rating, Typography } from '@mui/material';



const Product = (props) => {
    // const { aname, price, description, img, rating, _id } = props.sp;


    return (

        <Grid item xs={12} md={4}>
            <div className='container'>
                <div className="outer-card">


                    <div className="card">

                        <img className='img-class' src={camera} alt="" />


                    </div>

                    <h3 style={{ margin: '3px' }}>{"yfeferh"}</h3>
                    <h4 style={{ margin: '3px', color: '#807878', fontWeight: 'bolder' }}>$350</h4>
                    <Typography variant="h6" color="text.secondary">
                        <Rating name="read-only" value={3} readOnly />

                    </Typography>
                    <div><button className='card-btn'>Buy Now</button></div>
                </div>

            </div>
        </Grid>


    );
};

export default Product;