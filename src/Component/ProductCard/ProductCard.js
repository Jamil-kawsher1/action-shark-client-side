import React from 'react';
import './ProductCard.css';
import camera from '../img/digital-slr-camera-PZ5QY9V.png'
import { Grid, Rating, Typography } from '@mui/material';
import djiosmo from '../img/DJI Osmo Action - 4K.png'
import { Link } from 'react-router-dom';
const ProductCard = ({ name, price, img, rating, id }) => {
    console.log()
    // const { aname, price, description, img, rating, _id } = props.camera;
    // const { aname, price, img, rating, _id } = props.camera;
    return (
        <Grid item xs={12} md={6} lg={4}>
            <div className='container'>
                <div className="outer-card">


                    <div className="card">

                        <div> <img style={{ marginTop: 'auto', marginBottom: 'auto' }} className='img-class' src={img} alt="" /></div>


                    </div>

                    <h3 style={{ margin: '3px' }}>{name}</h3>
                    <h4 style={{ margin: '3px', color: '#807878', fontWeight: 'bolder' }}>${price}</h4>
                    <Typography variant="h6" color="text.secondary">
                        <Rating name="read-only" value={rating} readOnly />

                    </Typography>
                    <div>


                        <Link style={{ textDecoration: 'none' }} to={`/placeorder/${id}`}> <button className='card-btn'>Buy Now</button></Link>
                    </div>
                </div>

            </div>
        </Grid>

    );
};

export default ProductCard;