import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Product = (props) => {
    const { aname, price, description, img, rating } = props.camera;
    return (

        <Grid item xs={12} md={4} sx={{ p: 3 }}>
            <Card >
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
                    <Typography variant="h6" color="text.secondary">
                        {price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <Rating name="read-only" value={rating} readOnly />

                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>


    );
};

export default Product;