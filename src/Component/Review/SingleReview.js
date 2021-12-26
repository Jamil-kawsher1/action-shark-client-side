import React from 'react';
import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const SingleReview = (props) => {
    const { rating, productname, reviewtext, orderedby } = props.review;
    return (
        // <Grid sx={{ marginTop: 5, marginBottom: 5, padding: 3, }} item xs={12} sm={12} md={12}>
        <Container>



            <Paper sx={{ py: 5, mb: 3, m: 3, }} elevation={3} >
                <Typography sx={{ color: "#00bcd4", fontWeight: 600, }} variant="h5" gutterBottom component="div">
                    {productname}
                </Typography>
                <Typography component='div'>
                    {orderedby}
                </Typography>
                <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block', sm: 'block' } }} variant="h6" color="text.secondary">
                    <Rating name="read-only" value={rating} readOnly />

                </Typography>
                <Typography sx={{ display: { xs: 'none', md: 'none', lg: 'none', sm: 'none' } }} variant="h6" color="text.secondary">
                    <Rating name="read-only" value={rating} readOnly />

                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {reviewtext}
                </Typography>


            </Paper>
        </Container>

        // </Grid>
    );
};

export default SingleReview;