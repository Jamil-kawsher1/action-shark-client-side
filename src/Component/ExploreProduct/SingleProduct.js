import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { aname, price, description, img, rating, _id } = props.camera;

    return (

        <Grid item xs={12} md={4} sx={{}} >
            <Card style={{ marginBottom: 20 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="218"
                    width='345'
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {aname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 80) + ".."}
                    </Typography>
                    <Typography variant="h5" color="InfoText">
                        {price} $
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <Rating name="read-only" value={rating} readOnly />

                    </Typography>

                </CardContent>
                <CardActions style={{ paddingBottom: 10 }}>

                    <Link style={{ margin: '0 auto', display: "flex", textDecoration: 'none' }} to={`/placeorder/${_id}`}><Button style={{ margin: '0 auto', display: "flex", }} color='success' variant='contained' size="large">Buy Now</Button></Link>



                </CardActions>
            </Card>
        </Grid >


    );
};

export default SingleProduct;